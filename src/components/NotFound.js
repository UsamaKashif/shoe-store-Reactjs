import React from 'react'
import { Container, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "597px",
        height: "720px",
        marginTop: '60px',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0
    },
    notFound: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "288px",
        letterSpacing: "0.05em",
        
        color: "#9B4343",
    },
    txt: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "64px",
        textAlign: "center",
        color: "#000000",
    },
    btn: {
        width: "519px",
        height: "170px",
        
        border: "4px solid #9B4343",
        boxSizing: "border-box",
        borderRadius: "28px",
        display: "flex",
        justifyContent: "centre",
        margin: "5px auto"
    },
    home: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "48px",
        textAlign: "center",
        color: "#9B4343",
        
    },
    link: {
        textDecoration: "none"
    }
}))

const NotFound = () => {
    const classes = useStyles();

    return (
        <Container maxWidth={false} className={classes.root}>
            <Typography className={classes.notFound}>
                404
            </Typography>
            <Typography className={classes.txt}>
                PAGE NOT FOUND
            </Typography>
            <Link to="/" className={classes.link}>
                <Button variant="outlined" className={classes.btn}>
                    <Typography className={classes.home}>
                        RETURN HOME
                    </Typography>
                </Button>
            </Link>
        </Container>
    )
}

export default NotFound