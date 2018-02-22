import React from "react";

class ShowResults extends React.Component {
    render() {
        const snipets = this.props.snipets;
        if (snipets) {
            return <p>{snipets[0].description}</p>;
        }
        return <p>wtf</p>;
    }
}

export default ShowResults;
