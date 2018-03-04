import React from "react";
import Thumbnail from "./Thumbnail";
import loading from "./loading.gif";
import { currentMonthName, currentYear } from "./countDate";

class ShowResults extends React.Component {
    render() {
        const isFetching = this.props.isFetching;
        const articles = this.props.articles;

        if (isFetching) {
            return (
                <div className="main">
                    <img
                        src={loading}
                        alt=""
                        width="200"
                        className="loadingImg"
                    />
                </div>
            );
        }

        if (articles) {
            const temp = [];
            articles.forEach((article, index) => {
                temp.push(<Thumbnail article={article} key={index} />);
            });

            return (
                <div className="main">
                    <ul className="galery">{temp}</ul>
                </div>
            );
        }
        return (
            <div className="main">
                <p className="instructions">
                    This is the New York Times archive viewer. Please select the
                    month and grab articles. You can select any month between
                    January 1981 and {currentMonthName()} {currentYear()}.
                </p>
            </div>
        );
    }
}

export default ShowResults;
