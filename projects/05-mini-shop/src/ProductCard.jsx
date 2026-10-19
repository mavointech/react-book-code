import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice.js';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="text.secondary">{product.category}</Typography>
        <Typography variant="subtitle1">
          {product.price.toFixed(2)} €
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
