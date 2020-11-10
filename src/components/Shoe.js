import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { shoes } from "../Shoes"
import NotFound from './NotFound'

import "./component.css"


import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardMedia, Typography } from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "1634px",
        height: "771px",
        margin: "105px auto",
        display: "flex",
        paddingLeft: 0,
        paddingRight: 0,
    },
    productDetail: {
        width: "50%"
        
    },
    titleContainer: {
        width: "601px",
        height: "505px",
    },
    title: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: "115px",
        lineHeight: "172px",
        letterSpacing: "0.03em",
        
        color: "#9B4343",
    },
    titleRes: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: "80px",
        lineHeight: "172px",
        letterSpacing: "0.03em",
        
        color: "#9B4343",
        marginLeft: "15px"
    },
    titleFooter: {
        display: "flex",
    },
    price: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: "72px",
        lineHeight: "108px",
        letterSpacing: "0.03em",
        
        color: "#000000",
        marginTop: "146px"
    },
    priceRes: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: "40px",
        lineHeight: "108px",
        letterSpacing: "0.03em",
        
        color: "#000000",
        marginTop: "100px",
        marginLeft: "15px"
    },
    btn: {
        width: "326px",
        height: "104px",
        marginTop: "146px",
        border: "3px solid #9B4343",
        boxSizing: "border-box",
        borderRadius: "18px",
        marginLeft: "283px"
    },
    btnRes: {
        width: "250px",
        height: "100px",
        marginTop: "100px",
        border: "3px solid #9B4343",
        boxSizing: "border-box",
        borderRadius: "18px",
        marginLeft: "283px"
    },
    buy: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: "48px",
        lineHeight: "72px",
        letterSpacing: "0.03em",
        
        color: "#C3746F"
    },
    buyRes: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: "30px",
        lineHeight: "72px",
        letterSpacing: "0.03em",
        
        color: "#C3746F"
    },
    productImg: {
        width: "50%"
    },
    card: {
        width: "685px",
        height: "771px",
        marginLeft: "134px"
    },
    cardRes: {
        width: "500px",
        height: "771px",
        marginLeft: "134px"
    },
    cardMedia: {
        width: "100%",
        height: "100%"
    },
    link: {
        textDecoration: "none"
    }
}))




const Shoe = () => {
    const classes = useStyles();

    const shoesData = Object.entries(shoes)
    const { id } = useParams()
    let correct = false
    shoesData.forEach((shoe) => {
        if (shoe[0] === id) {
            correct = true
        }
    })

    const matches = useMediaQuery('(max-width:1695px)');

    if (correct) {
        return (
            <Container maxWidth={false} className={classes.root}>
                <section className="productDetail">
                    <div className={classes.titleContainer}>
                        <Typography variant="h4" className={matches ? classes.titleRes : classes.title}>
                            {shoes[id].name}
                        </Typography>
                    </div>
                    <div className={classes.titleFooter}>
                        <Typography variant="h4" className={matches ? classes.priceRes : classes.price}>
                            {shoes[id].price}
                        </Typography>
                        <Link to="/purchased" className={classes.link}>
                            <Button variant="outlined" className={matches ? classes.btnRes : classes.btn}>
                                <Typography variant="h5" className={matches ? classes.buyRes : classes.buy}>
                                    BUY NOW
                                </Typography>
                            </Button>
                        </Link>
                    </div>
                </section>

                <section className={classes.productImg}>
                    <Card className={matches ? classes.cardRes : classes.card}>
                        <CardMedia 
                            className={classes.cardMedia}
                            image={shoes[id].img}
                            title={shoes[id].name}
                        />
                    </Card>
                </section>
            </Container>
        )
    }
    return (
        <NotFound />
    )
}

export default Shoe