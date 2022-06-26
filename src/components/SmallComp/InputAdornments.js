import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Stack, TextField} from '@mui/material';
import { Grid } from '@mui/material';
import { auth } from '../..';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, NavLink } from 'react-router-dom';
import { CREATE_ROUTE } from '../utils/consts';


export default function InputAdornments() { 

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
	showPassword: false,
});

  const handleChange = (prop) => (event) => {
	  setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
	};

 	const handleMouseDownPassword = (event) => {
    	event.preventDefault();
	};
	

	const emailRef = React.useRef(null);
	const passwordRef = React.useRef(null);


	const [loginEmail, setLoginEmail] = React.useState("");
	const [loginPassword, setLoginPassword] = React.useState("");
	const [emailDirty, setEmailDirty] = React.useState(false);
	const [passwordDirty, setPasswordDirty] = React.useState(false);
	const [emailError, setEmailError] = React.useState("Email can't be empty");
	const [passwordError, setPasswordError] = React.useState("Password can't be empty");
	const [password, setPassword] = React.useState('')



	const emailHandler = (e) => {
		setEmailDirty(e.target.value)
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (!re.test(String(e.target.value).toLocaleLowerCase())) {
			setEmailError("Incorrect Email")
		} else {
			setEmailError("")
		}
	}

	const passwordHandler = (e) => {
		setPassword(e.target.value)
		if (e.target.value.length < 6 || e.target.value > 50) {
			setPasswordError("The password cannot be shorter than 6 characters")
			if (!e.target.value) {
				setPasswordError("Password can't be empty")
			}
		} else {
			setPasswordError('')
		}
	}


	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword);
			console.log(user)
		} catch (error) {
			console.log(error.message);
		}
	}

	const blurHandler = (e) => {
		switch (e.target.name) {
			case "email":
				setEmailDirty(true);
				break;
			case "password":
				setPasswordDirty(true);
				break;
			default:
		} 
	}


  return (
	<Grid container>
		<Grid item xs={12} textAlign="center">
			  <Stack spacing={6} marginTop={4}>
				  {(emailDirty && emailError) && <div style={{ color: 'red', textAlign: 'left'}}>{emailError}</div>}
				 	<TextField
						onBlur={e => blurHandler(e)}
						name='email' ref={emailRef}
						fullWidth id="outlined-basic"
					  	label="E-mail"
					  	style={{marginTop: 5}}
						variant="outlined"
						onChange={(event) => {
							emailHandler(event)
							setLoginEmail(event.target.value);
				  }} />
				<Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
					  {(passwordDirty && passwordError) && <div style={{ color: 'red', marginBottom: 5 }}>{passwordError }</div>}
					<FormControl fullWidth variant="outlined" onChange={(event) => {
						  setLoginPassword(event.target.value);
					  }}>
					<InputLabel ref={passwordRef} htmlFor="outlined-adornment-password">Password</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password"
						type={values.showPassword ? 'text' : 'password'}
						value={password}
						onChange={(e) => {
							handleChange('password');
							passwordHandler(e)
						}}
						onBlur={e => blurHandler(e)} name='password' 
						endAdornment={
							<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
							>
							{values.showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
							</InputAdornment>
						}
						label="Password"
					/>
					</FormControl>
							
				</Box>
				<Button variant="contained" color="secondary" onClick={login} >
						Log In
				  </Button>
				  <h4 style={{ color: "#9c27b0" }}><span>I do not have an account. I want to </span> 
					  <NavLink to={CREATE_ROUTE}>create</NavLink>
					    <span> a new one or ...</span></h4>
			</Stack>
		</Grid>
	</Grid>
  );
}
