import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Container, Stack, TextField} from '@mui/material';
import { Grid } from '@mui/material';
import { auth } from '../';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Context } from '../';
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from 'react';

import hero from "./hero.jpg";

const AccRegister = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);


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


	const [registerEmail, setRegisterEmail] = React.useState("");
	const [registerPassword, setRegisterPassword] = React.useState("");
	const [emailDirty, setEmailDirty] = React.useState(false);
	const [passwordDirty, setPasswordDirty] = React.useState(false);
	const [emailError, setEmailError] = React.useState("Email can't be empty");
	const [passwordError, setPasswordError] = React.useState("Password can't be empty");
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [firstNameError, setFirstNameError] = React.useState("First name can`t be empty");
    const [firstNameDirty, setFirstNameDirty] = React.useState(false);
    const [lastNameDirty, setLastNameDirty] = React.useState(false);
    const [lastNameError, setLastNameError] = React.useState("Last name can`t be empty");
    
    
    






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
    
    const firstNameHandler = (e) => {
		setFirstName(e.target.value)
		if (e.target.value.length < 2 || e.target.value > 20) {
			setFirstNameError("The First name cannot be shorter than 2 characters")
			if (!e.target.value) {
				setFirstNameError("First name can't be empty")
			}
		} else {
			setFirstNameError('')
		}
    }
    
    const lastNameHandler = (e) => {
		setLastName(e.target.value)
		if (e.target.value.length < 2 || e.target.value > 20) {
			setLastNameError("The First name cannot be shorter than 2 characters")
			if (!e.target.value) {
				setLastNameError("First name can't be empty")
			}
		} else {
			setLastNameError('')
		}
	}


	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
                registerPassword,
                firstName,
                lastName);
            user.user.displayName = firstName + " " + lastName
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
            case "First name":
				setFirstNameDirty(true);
                break;
            case "Last name":
				setLastNameDirty(true);
				break;
			default:
		} 
	}
    const vector = require('./Vector.png') 
    return (
        <>
            <Box
                height="100vh"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
            >
                <img src={hero} alt="" width="50%" style={{ height: "100%", width: "50%" }} />
                    
                <Container maxWidth="sm">
                    <Grid container>
                        <Grid item xs={12} textAlign="center">
                            <img src={vector} alt="" />
                            <Stack spacing={6} marginTop={4}>
                                <Grid container>
                                    <Grid item xs={12} textAlign="center">
                                        <Stack spacing={6} marginTop={4}>
                                            {(firstNameDirty && firstNameError) && <div style={{ color: 'red', textAlign: 'left'}}>{firstNameError }</div>}
                                            <TextField
                                                onBlur={e => blurHandler(e)}
                                                name='First name'
                                                fullWidth id="outlined-basic1"
                                                label="First name"
                                                style={{marginTop: 15}}
                                                variant="outlined"
                                                onChange={(event) => {
                                                    firstNameHandler(event)
                                            }} />
                                            {(lastNameDirty && lastNameError) && <div style={{ color: 'red', textAlign: 'left', marginTop: 10}}>{lastNameError }</div>}
                                            <TextField
                                                onBlur={e => blurHandler(e)}
                                                name='Last name'
                                                fullWidth id="outlined-basic2"
                                                label="Last name"
                                                style={{marginTop: 15}}
                                                variant="outlined"
                                                onChange={(event) => {
                                                    lastNameHandler(event)
                                            }} />
                                            {(emailDirty && emailError) && <div style={{ color: 'red', textAlign: 'left', marginTop: 10}}>{emailError }</div>}
                                            <TextField
                                                onBlur={e => blurHandler(e)}
                                                name='email' ref={emailRef}
                                                fullWidth id="outlined-basic"
                                                label="E-mail"
                                                style={{marginTop: 15}}
                                                variant="outlined"
                                                onChange={(event) => {
                                                    emailHandler(event)
                                                    setRegisterEmail(event.target.value);
                                            }} />
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
                                                {(passwordDirty && passwordError) && <div style={{ color: 'red', marginBottom: 5, marginTop: 0 }}>{passwordError }</div>}
                                                <FormControl fullWidth variant="outlined" onChange={(event) => {
                                                    setRegisterPassword(event.target.value);
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
                                            <Button variant="contained" color="secondary"  onClick={register}>
                                                    Create user
                                            </Button>
                                        </Stack>
                                    </Grid>
                                </Grid>		
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>	
            </Box>
        </>       
    );
};

export default AccRegister;