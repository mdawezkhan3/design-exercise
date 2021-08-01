import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
      marginTop: '1em',
  },
  media: {
      height: 140,
  },
  title: {
  backgroundColor: '#f5f0b8'      
  }
});

const Products = ({ exchangeRates, currency }) => {
  const classes = useStyles();

  const products = [
    {
      id: 1,
      imageUrl: 'https://m.media-amazon.com/images/I/71FMlrA8TiL._SL1500_.jpg',
      name: 'Shampoo',
      price: 100
    },
    {
      id: 2,
      imageUrl: 'https://images.carandbike.com/bike-images/medium/ktm/rc-200/ktm-rc-200.webp?v=14',
      name: 'Bike',
      price: 100000
    },
    {
      id: 3,
      imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg',
      name: 'Car',
      price: 1500000
    }
  ];

  return (
    <Grid container spacing={2} className={classes.root}>
        {products.map(product => (
            <Grid key={product.id} xs={12} sm={6} md={4} lg={3} xl={2} item>
                <Card>
                    <CardMedia
                        image={product.imageUrl}
                        className={classes.media}
                    />
                    <CardContent className={classes.title}>
                        <Typography
                            variant="h5"
                            align="center"
                        >
                            {product.name}
                        </Typography>
                        <Typography
                            variant="h6"
                            align="center"
                        >
                          {exchangeRates ? (product.price * exchangeRates[currency]).toFixed(2) : ''}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
  )
}

export default Products;