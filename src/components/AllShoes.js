import React from 'react'

import { shoes } from "../Shoes"


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "77px",
    },
    card: {
        height: "758px",
        width: "491px",
        background: "#9B4343",
        borderRadius: "15px"
    },
    cardMedia: {
        width: "453px",
        height: "510px",
        display: "flex",
        justifyContent: "center",
        margin: "16px auto"
    },
    cardTitle: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "30px",
        color: "#FFFFFF",
        marginTop: '17px;'
    },
    price: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "64px",
        lineHeight: "96px",
        color: "#F3EBE8",
        marginTop: "4px"
    },
    cardFooter: {
        display: "flex"
    },
    btn: {
        width: "143px",
        height: "71px",
        
        border: "2px solid #F3EBE8",
        boxSizing: "border-box",
        borderRadius: "17px",
        marginTop: "22px",
        marginLeft: "96px"
    },
    buy: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "54px",
        color: "#F3EBE8",  
    },
    link:{
        textDecoration: "none"
    }
}));



const AllShoes = () => {
    const shoesData = Object.entries(shoes)

    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={1}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={8}>
                    {shoesData.map((value, i) => {
                        const url = `/product/${value[0]}`
                        return (<Grid key={i} item>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia}
                                    image={value[1].img}
                                    title={value[1].name}
                                />
                                <CardContent >
                                    <Typography variant="h5" className={classes.cardTitle}>
                                        {value[1].name}
                                    </Typography>
                                    <div className={classes.cardFooter}> 
                                        <Typography variant="h5" className={classes.price}>
                                            {value[1].price}
                                        </Typography>
                                        <Link to={url} className={classes.link}>
                                            <Button variant="outlined" className={classes.btn}>
                                                <Typography variant="h5" className={classes.buy}>
                                                    BUY
                                                </Typography>
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    )})}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AllShoes