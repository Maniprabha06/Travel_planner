import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import custom CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Backend code would go here
    navigate('/');
    alert('Login successful');
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '16px' }}
            >
              Submit
            </Button>
            <Link href="#" variant="body2" style={{ display: 'block', marginTop: '16px' }}>
              Forgot Password?
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
