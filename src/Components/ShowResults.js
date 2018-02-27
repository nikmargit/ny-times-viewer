import React from "react";
import Thumbnail from "./Thumbnail";
import loading from "./loading.gif";

class ShowResults extends React.Component {
    render() {
        const isFetching = this.props.isFetching;
        const articles = this.props.articles;

        if (isFetching) {
            return <img src={loading} alt="" width="250" />;
        }

        if (articles) {
            const temp = [];
            articles.forEach((article, index) => {
                temp.push(<Thumbnail article={article} key={index} />);
            });

            return <ul className="galery">{temp}</ul>;
        }
        return null;
    }
}

export default ShowResults;
