import * as React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



import Logo from '../Logo.png';
import '../App.css';
const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
});

const MyAppBar = ( props:any ) => {
    const classes = useStyles();
    const userName= localStorage.getItem('userName');
    return (
        <AppBar {...props}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            <img src={Logo} className="App-logo" alt="logo" />
            <span className={classes.spacer} />
            <h5>{userName}</h5>
        </AppBar>
    );
};

export default MyAppBar;