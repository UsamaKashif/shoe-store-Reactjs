import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "white"
    },
    title: {
        // flexGrow: 1,
        marginLeft: '114px',
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "36px",
        lineHeight: "54px",
        letterSpacing: "0.05em",
        color: '#000000',
    },
    link: {
        textDecoration: "none"
    }
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Link to="/" className={classes.link}>
                        <Typography variant="h4" className={classes.title}>
                            The Shoe Store
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
