import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '1220px',
        height: "733px",
        marginTop: "143px"
    },
    title: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "96px",
        letterSpacing: "5%",
        
        color: "#9B4343",
    },
    row: {
        display: "flex"
    },
    thankContainer: {
        width: "665px",
        height: "604px"
    },
    thank: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "96px",
        letterSpacing: "5%",
        
        color: "#000000",
    },
    btn: {
        width: "472px",
        height: "176px",
        border: "4px solid #9B4343",
        boxSizing: "border-box",
        borderRadius: "40px",
        marginTop: "400px"
    },
    continue: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "45px",
        letterSpacing: "5%",
        
        color: "#9B4343",
    },
    link: {
        textDecoration: "none"
    }
}))

const Purchase = () => {
    const classes = useStyles();
    return (
        <Container maxWidth={false} className={classes.root}>
            <Typography variant="h6" className={classes.title}>
                PURCHASE SUCCESSFUL
            </Typography>
            <div className={classes.row}>
                <div className={classes.thankContainer}>
                    <Typography className={classes.thank}>
                        THANK YOU FOR CHOOSING US
                    </Typography>
                </div>
                <Link to="/" className={classes.link}>
                    <Button className={classes.btn}>
                        <Typography className={classes.continue}>
                            CONTINUE SHOPPING
                        </Typography>
                    </Button>
                </Link>
            </div>

        </Container>
    )
}

export default Purchase