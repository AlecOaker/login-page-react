import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputAdornments from './SmallComp/InputAdornments';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Context } from '..';
import firebase from 'firebase/compat/app';
import { useContext } from 'react';
import hero from "./hero.jpg";



const WelcomePage = () => {

	const { auth } = useContext(Context)
	
	const login = async () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		const { user } = await auth.signInWithPopup(provider)
		console.log(user)
	}
	
	// const hero = require('./hero.png')
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
							<Typography variant="h4" component="h4" marginBottom={3} textAlign="center" >
									<b>Login</b>
							</Typography>
							<InputAdornments/>		
						</Stack>
						<Stack spacing={6} marginTop={3}></Stack>
							<Button fullWidth variant="outlined" color="secondary" onClick={login} >
									Continue with Google
							</Button>
						<Stack/>
           			 </Grid>
         		 </Grid>
        	</Container>	
		</Box>
    </>
  );
}

export default WelcomePage;