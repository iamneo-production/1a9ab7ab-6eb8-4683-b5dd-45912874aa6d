import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ResetPassword = () => {
  const navigate = useNavigate()
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
    }
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById('password-reset-form').reset()
        setError({ status: true, msg: "Profile edited Successfully. Redirecting to User Profile...", type: 'success' })
        setTimeout(() => {
          navigate("/UserProfile")
        }, 3000)
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>
        <h1>Edit Profile</h1>
        <Box component='form' noValidate sx={{ mt: 1 }} id='password-reset-form' onSubmit={handleSubmit}>
          <TextField margin='normal' required fullWidth id='username' name='username' label='User Name' type='name' />
          <TextField margin='normal' required fullWidth id='email' name='email' label='Email' type='email' />
          <TextField margin='normal' required fullWidth id='location' name='location' label='Location' type='location' />
          <TextField margin='normal' required fullWidth id='mobile' name='mobile' label='Phone Number' type='phone' />
          <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Save</Button>
          </Box>
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        </Box>
      </Grid>
    </Grid>
  </>;
};

export default ResetPassword;
