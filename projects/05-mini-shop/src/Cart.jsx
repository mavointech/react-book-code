import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
  setQuantity,
} from './store/cartSlice.js';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) return <Typography>Your cart is empty.</Typography>;

  return (
    <>
      <List>
        {items.map((item) => (
          <ListItem key={item.id} divider>
            <ListItemText
              primary={item.name}
              secondary={`${item.price.toFixed(2)} € each`}
            />
            <IconButton
              aria-label="decrease"
              onClick={() =>
                dispatch(
                  setQuantity({ id: item.id, quantity: item.quantity - 1 }),
                )
              }
            >
              -
            </IconButton>
            <span>{item.quantity}</span>
            <IconButton
              aria-label="increase"
              onClick={() =>
                dispatch(
                  setQuantity({ id: item.id, quantity: item.quantity + 1 }),
                )
              }
            >
              +
            </IconButton>
            <Button
              color="error"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Total: {total.toFixed(2)} €</Typography>
      <Button onClick={() => dispatch(clearCart())}>Clear cart</Button>
    </>
  );
}
