import React from "react";

class DatePicker extends React.Component {
    render() {
        return (
            <div>
                <h3>Enter a month and a year:</h3>
                <form onSubmit={this.props.grabArticles}>
                    <input
                        type="month"
                        name="month"
                        required
                        onChange={event => this.props.setYearMonth(event)}
                    />
                    <button type="submit">Find Articles</button>
                </form>
            </div>
        );
    }
}

export default DatePicker;
