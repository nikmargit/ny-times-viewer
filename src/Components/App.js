import React from "react";
import $ from "jquery";
import DatePicker from "./DatePicker";
import ShowResults from "./ShowResults";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: null,
            articles: null,
            snipets: null,
            loading: false
        };

        this.grabArticles = this.grabArticles.bind(this);
        this.setYearMonth = this.setYearMonth.bind(this);
    }

    getUrls() {}

    setYearMonth(date) {
        const dateArr = date.target.value.split("-");

        dateArr[1] = Math.abs(dateArr[1]);

        this.setState({
            date: dateArr.join("/")
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            this.state.articles &&
            JSON.stringify(prevState.articles) !==
                JSON.stringify(this.state.articles)
        ) {
            const articles = this.state.articles;
            const urls = articles.map(article => article.web_url).slice(0, 1);
            const link = urls[0];

            //let url = `http://api.linkpreview.net/?key=5a8db23fda580b6952e403e52ff901127c4701a2a3852&q=${link}`;
            //console.log(url);

            let url =
                "http://api.linkpreview.net/?key=123456&q=https://www.google.com";

            $.ajax({
                url: url,
                method: "GET"
            })
                .done(results => {
                    console.log(results);
                    this.setState({ snipets: [results] });
                })
                .fail(function(err) {
                    throw err;
                });
        }
    }

    grabArticles(event) {
        event.preventDefault();
        this.setState({ loading: true }, function() {
            if (this.state.date) {
                let url = `https://api.nytimes.com/svc/archive/v1/${
                    this.state.date
                }.json`;
                url +=
                    "?" +
                    $.param({
                        "api-key": "e1a8d3d68e2c42bfa77fd09ee7c30797"
                    });
                $.ajax({
                    url: url,
                    method: "GET"
                })
                    .done(result => {
                        this.setState(
                            { articles: result.response.docs },
                            function() {
                                this.setState({ loading: false });
                            }
                        );
                    })
                    .fail(function(err) {
                        throw err;
                    });
            }
        });
        // console.log(this.state.loading);
    }

    render() {
        return (
            <div>
                <DatePicker
                    grabArticles={this.grabArticles}
                    setYearMonth={this.setYearMonth}
                />
                <ShowResults snipets={this.state.snipets} />
            </div>
        );
    }
}

export default App;
