import React from "react";
import $ from "jquery";

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            snipet: undefined
        };
    }

    componentDidMount() {
        // let url = `http://api.linkpreview.net/?key=5a8db23fda580b6952e403e52ff901127c4701a2a3852&q=${
        //     this.props.article.web_url
        // }`;
        let url =
            "http://api.linkpreview.net/?key=123456&q=https://www.google.com";
        $.ajax({
            url: url,
            method: "GET"
        })
            .done(results => {
                this.setState({ snipet: results });
            })
            .fail(function(err) {
                throw err;
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.article !== this.props.article) {
            //render only if there was a new ny times API call
            // let url = `http://api.linkpreview.net/?key=5a8db23fda580b6952e403e52ff901127c4701a2a3852&q=${
            //     this.props.article.web_url
            // }`;

            let url =
                "http://api.linkpreview.net/?key=123456&q=https://www.google.com";

            $.ajax({
                url: url,
                method: "GET"
            })
                .done(results => {
                    this.setState({ snipet: results });
                })
                .fail(function(err) {
                    throw err;
                });
        }
    }

    render() {
        const snipet = this.state.snipet;
        if (snipet) {
            return (
                <li className="thumbnail">
                    <img src={snipet.image} alt={snipet.title} width="200px" />
                    <a href={snipet.url}>
                        <h3>{snipet.title}</h3>
                    </a>
                    <p>{snipet.description}</p>
                </li>
            );
        }
        return null;
    }
}

export default Thumbnail;
