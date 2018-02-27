import React from "react";
import $ from "jquery";
import DatePicker from "./DatePicker";
import ShowResults from "./ShowResults";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        //set initial state
        this.state = {
            date: null,
            articles: null,
            isFetching: false
        };

        this.grabArticles = this.grabArticles.bind(this);
        this.setYearMonth = this.setYearMonth.bind(this);
    }

    setYearMonth(date) {
        //set date state in proper format when user choose the month and the year
        const dateArr = date.target.value.split("-");

        dateArr[1] = Math.abs(dateArr[1]);

        this.setState({
            date: dateArr.join("/")
        });
    }

    grabArticles(event) {
        //grab articles from ny times api when user submit a form
        event.preventDefault();
        this.setState({ isFetching: true }, function() {
            //first set flag to true, then a callback to get data from api
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
                        const temp = result.response.docs.slice(0, 8);
                        this.setState(
                            //flag to false, then add articles to state
                            { isFetching: false },
                            this.setState({ articles: temp })
                        );
                    })
                    .fail(function(err) {
                        throw err;
                    });
            }
        });
    }

    render() {
        return (
            <div>
                <DatePicker
                    grabArticles={this.grabArticles}
                    setYearMonth={this.setYearMonth}
                />
                <ShowResults
                    snipets={this.state.snipets}
                    isFetching={this.state.isFetching}
                    articles={this.state.articles}
                />
            </div>
        );
    }
}

export default App;
