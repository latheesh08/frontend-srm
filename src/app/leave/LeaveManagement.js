import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleReactCalendar from 'simple-react-calendar'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '98%',
        padding: '2%',

    },
    calendar: {
        width: 'inherit',
        border: 'none',
        borderRadius: '10px',
    }

}));

export default function LeaveManagement() {
    const classes = useStyles();
    const [value, setValue] = useState(new Date());

    const dateChange = (nextValue) => {
        console.log(nextValue)
        setValue(nextValue);
    }

    return (
        <div className={classes.container}>
            <Calendar
                className={classes.calendar}
                onChange={dateChange}
                value={value}
            />
        </div>
    );
}