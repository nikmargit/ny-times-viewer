import React from "react";
import { currentMonthNumber, currentYear } from "./countDate";

class DatePicker extends React.Component {
    render() {
        const max = `${currentYear()}-${currentMonthNumber()}`;

        return (
            <div className="input-form">
                <form onSubmit={this.props.grabArticles}>
                    <input
                        type="month"
                        name="month"
                        required
                        onChange={event => this.props.setDate(event)}
                        min="1981-01"
                        max={max}
                    />
                    <button type="submit">Find Articles</button>
                </form>
            </div>
        );
    }
}

export default DatePicker;
