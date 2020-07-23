import React, {Component} from "react";
import {KeyboardDatePicker} from "@material-ui/pickers";
// import Calendar from "react-calendar";
import './Calendar.css';

class calendarComponent extends Component {
    myDateObject = {}

    handleDateChange = date => {
        this.setState({
            clicked: true
        });

        this.myDateObject = {
            date: date.date(),
            month: date.month(),
            year: date.year(),
        };

        this.props.parentCallBackDate({
            date: date.date(),
            month: date.month() + 1,
            year: date.year(),
            day: date.isoWeekday() + 1
        });
    };

    // Uses old calendar
    // //https://www.npmjs.com/package/react-calendar
    // render() {
    //     return (
    //         <div style={{marginTop:'2%',  marginBottom: '2%'}}>
    //             <div className={'container center'}>
    //                 <Calendar
    //                     calendarType={"US"}
    //                     onClickDay={this.onClickDay}
    //                 />
    //             </div>
    //         </div>
    //     )
    // }

    //Trying with new calendar
    // https://material-ui-pickers.dev/demo/datepicker
    //TODO Leave some visual that it is uncommon to book parties on a weekday
    render() {
        return (
            <div>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/DD/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker"
                    value={this.myDateObject}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </div>
        )
    }
}

export default calendarComponent;