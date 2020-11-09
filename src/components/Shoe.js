import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { shoes } from "../Shoes"
import NotFound from './NotFound'


import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "1634px",
        height: "771px",
        marginTop: "105px",
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
    btn: {
        width: "326px",
        height: "104px",
        marginTop: "146px",
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
    productImg: {
        width: "50%"
    },
    card: {
        width: "685px",
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
    if (correct) {
        return (
            <Container maxWidth={false} className={classes.root}>
                <section className={classes.productDetail}>
                    <div className={classes.titleContainer}>
                        <Typography variant="h4" className={classes.title}>
                            {shoes[id].name}
                        </Typography>
                    </div>
                    <div className={classes.titleFooter}>
                        <Typography variant="h4" className={classes.price}>
                            {shoes[id].price}
                        </Typography>
                        <Link to="/purchased" className={classes.link}>
                            <Button variant="outlined" className={classes.btn}>
                                <Typography variant="h5" className={classes.buy}>
                                    BUY NOW
                                </Typography>
                            </Button>
                        </Link>
                    </div>
                </section>

                <section className={classes.productImg}>
                    <Card className={classes.card}>
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