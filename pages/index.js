import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core"
import Layout from "../components/Layout"
import data from "../utils/data"
import useStyles from "../utils/styles"
import NextLink from "next/link"

export default function Home() {
  const classes = useStyles()
  return (
    <Layout title="Amazone">
      <div>
        <h1>Product</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid key={product.name} item md={4}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    />
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>

                <CardActions className={classes.productsCardAction}>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="primary" variant="contained">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}
