import React from "react";

class DatePicker extends React.Component {
    render() {
        return (
            <div className="input-form">
                <form onSubmit={this.props.grabArticles}>
                    <label htmlFor="Month">Enter date:</label>
                    <div className="month">
                        <select
                            name="Month"
                            onChange={event => this.props.setMonth(event)}
                        >
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>

                    {/* <input
                        type="month"
                        name="month"
                        required
                        onChange={event => this.props.setYearMonth(event)}
                    /> */}
                    <button type="submit">Find Articles</button>
                </form>
            </div>
        );
    }
}

export default DatePicker;
