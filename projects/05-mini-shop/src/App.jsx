import { useEffect, useState } from 'react';
import {
  AppBar,
  Badge,
  Container,
  Grid,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './store/productsSlice.js';
import { selectCartCount } from './store/cartSlice.js';
import ProductCard from './ProductCard.jsx';
import Cart from './Cart.jsx';

export default function App() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((s) => s.products);
  const count = useSelector(selectCartCount);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts());
  }, [status, dispatch]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mini Shop
          </Typography>
          <Button color="inherit" onClick={() => setShowCart(!showCart)}>
            <Badge badgeContent={count} color="secondary">
              {showCart ? 'Products' : 'Cart'}
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 3 }}>
        {status === 'loading' && <Typography>Loading...</Typography>}
        {status === 'failed' && <Typography color="error">{error}</Typography>}
        {showCart ? (
          <Cart />
        ) : (
          <Grid container spacing={2}>
            {items.map((p) => (
              <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProductCard product={p} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
