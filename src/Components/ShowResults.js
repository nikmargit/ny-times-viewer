import React from "react";
import Thumbnail from "./Thumbnail";

class ShowResults extends React.Component {
    render() {
        //const isFetching = this.props.isFetching;
        const articles = this.props.articles;

        // if (isFetching) {
        //     return <p>loading...</p>;
        // }
        if (articles) {
            const temp = [];

            articles.forEach((article, index) => {
                temp.push(
                    <Thumbnail
                        article={article}
                        articles={articles}
                        key={index}
                    />
                );
            });

            return <ul>{temp}</ul>;
        }
        return null;
    }
}

export default ShowResults;
