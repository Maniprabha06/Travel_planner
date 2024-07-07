import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Paper } from '@mui/material';
import axios from 'axios'; // Add axios for making API requests
import './BookingPage.css'; // Import CSS for additional styling

const BookingPage = () => {
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [specialRequests, setSpecialRequests] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Simulate form submission (replace with actual logic)
        console.log("Booking submitted:", {
            destination,
            startDate,
            endDate,
            adults,
            children,
            specialRequests
        });

        try {
            const response = await axios.post('http://localhost:5000/api/bookings', {
                destination,
                startDate,
                endDate,
                adults,
                children,
                specialRequests
            });
            console.log(response.data);
            alert('Booking successful');
        } catch (error) {
            console.error('There was an error booking the trip!', error);
            alert('Booking failed. Please try again.');
        }

        // Reset form fields after submission (optional)
        setDestination('');
        setStartDate('');
        setEndDate('');
        setAdults(1);
        setChildren(0);
        setSpecialRequests('');
    };

    return (
        <Container component="main" maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography component="h1" variant="h5" align="center" gutterBottom>
                    Book Your Trip
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="destination"
                                label="Destination"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="startDate"
                                label="Start Date"
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="endDate"
                                label="End Date"
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="adults"
                                label="Adults"
                                type="number"
                                value={adults}
                                onChange={(e) => setAdults(e.target.value)}
                                InputProps={{ inputProps: { min: 1 } }}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="children"
                                label="Children"
                                type="number"
                                value={children}
                                onChange={(e) => setChildren(e.target.value)}
                                InputProps={{ inputProps: { min: 0 } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="specialRequests"
                                label="Special Requests"
                                value={specialRequests}
                                onChange={(e) => setSpecialRequests(e.target.value)}
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Book Now
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default BookingPage;
