import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner'
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

const Loader = () => {
    return (
			<Container>
				<Grid container
					style={{height: window.innerHeight}}
					alignItems={"center"}
					justify={"center"}>
				<Grid container
					alignItems={"center"}
					direction={"column"}
				>
					<ThreeDots color="#9c27b0" height={80} width={80} />
					</Grid>
				</Grid>
			</Container>
    );
};

export default Loader;