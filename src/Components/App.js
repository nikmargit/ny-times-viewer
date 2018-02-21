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
            urls: {}
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

    grabArticles(event) {
        event.preventDefault();
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
                .done(result =>
                    this.setState({ articles: result.response.docs })
                )
                .fail(function(err) {
                    throw err;
                });
        }
    }

    render() {
        return (
            <div>
                <DatePicker
                    grabArticles={this.grabArticles}
                    setYearMonth={this.setYearMonth}
                />
                <ShowResults articles={this.state.articles} />
            </div>
        );
    }
}

export default App;
