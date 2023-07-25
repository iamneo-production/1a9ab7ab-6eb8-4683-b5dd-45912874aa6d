import React, { useState } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Radio, RadioGroup} from '@mui/material';
import './BookingForm.css'; 
import { NavLink } from 'react-router-dom';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    chefName: '',
    eventOrganizerName: '',
    dateOfEvent: '',
    eventType: '',
    numberOfGuests: '',
    bookingType: '',
    location: '',
    menu: '',
    vegNonVeg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform your booking submission logic here
  };

  return (
    <div classname="hel">
    <div className="booking-form-container">
      <h2>Book a Chef</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Chef Name"
          variant="outlined"
          name="chefName"
          value={formData.chefName}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Event Organizer Name"
          variant="outlined"
          name="eventOrganizerName"
          value={formData.eventOrganizerName}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
        //   label="Date of Event"
          variant="outlined"
          name="dateOfEvent"
          type="date"
          value={formData.dateOfEvent}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Number of Guests"
          variant="outlined"
          name="numberOfGuests"
          value={formData.numberOfGuests}
          onChange={handleChange}
          type="number"
          required
          fullWidth
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="booking-type">Booking Type</InputLabel>
          <Select
            label="Booking Type"
            name="bookingType"
            value={formData.bookingType}
            onChange={handleChange}
            required
          >
            <MenuItem value="Private">Party</MenuItem>
            <MenuItem value="Corporate">One meal</MenuItem>
            <MenuItem value="Wedding">For a week</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Location"
          variant="outlined"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          fullWidth
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="menu">Menu</InputLabel>
          <Select
            label="Menu"
            name="menu"
            value={formData.menu}
            onChange={handleChange}
            required
          >
            <MenuItem value="Italian">Indian</MenuItem>
            <MenuItem value="Japanese">Italian</MenuItem>
            <MenuItem value="Vegan">Mexican</MenuItem>
          </Select>
        </FormControl>
        <RadioGroup name="vegNonVeg" value={formData.vegNonVeg} onChange={handleChange}>
          <FormControlLabel value="veg" control={<Radio />} label="Veg" />
          <FormControlLabel value="nonVeg" control={<Radio />} label="Non-Veg" />
        </RadioGroup>

        <Button LinkComponent={NavLink} to='/Booking' type="submit" variant="contained" color="primary" fullWidth>
          Book Now
        </Button>
      </form>
    </div>
    </div>
  );
};

export default BookingForm;
