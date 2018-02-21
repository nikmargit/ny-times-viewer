import React from "react";
import $ from "jquery";

class ShowResults extends React.Component {
    constructor(props) {
        super(props);

        this.linkPreview = this.linkPreview.bind(this);
    }

    linkPreview(link) {
        let url = `http://api.linkpreview.net/?key=5a8db23fda580b6952e403e52ff901127c4701a2a3852&q=${link}`;
        $.ajax({
            url: url,
            method: "GET"
        })
            .done(result => {
                console.log(result);
                return result;
            })
            .fail(function(err) {
                throw err;
            });
    }

    render() {
        const articles = this.props.articles;
        if (articles) {
            const urls = articles.map(article => article.web_url).slice(0, 2);
            const lis = urls.map(url => this.linkPreview(url));
            const test = lis.map(li => JSON.parse(li));
            console.log(test);

            return <ul>ok</ul>;
        }
        return <p />;
    }
}

export default ShowResults;
