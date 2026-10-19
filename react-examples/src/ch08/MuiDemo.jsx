import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Stack,
  Chip,
  Alert,
} from '@mui/material';

// Material UI gives you ready-made, good-looking components.
// The `sx` prop is a shortcut for styles that understands the theme.
export default function MuiDemo() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const invalid = email !== '' && !email.includes('@');

  return (
    <Stack spacing={2}>
      <AppBar position="static" sx={{ borderRadius: 2 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Shop
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Join our newsletter
          </Typography>
          <Chip label="Free" color="success" size="small" sx={{ mb: 2 }} />
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSent(false);
            }}
            error={invalid}
            helperText={invalid ? 'Please enter a valid email' : ' '}
          />
        </CardContent>
        <CardActions sx={{ px: 2, pb: 2 }}>
          <Button
            variant="contained"
            disabled={email === '' || invalid}
            onClick={() => setSent(true)}
          >
            Subscribe
          </Button>
        </CardActions>
      </Card>

      {sent && <Alert severity="success">Thank you for subscribing!</Alert>}
    </Stack>
  );
}
