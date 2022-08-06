import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import InputAdornments from "./SmallComp/InputAdornments";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Context } from "..";
import firebase from "firebase/compat/app";
import { useContext } from "react";
import hero from "./hero.jpg";
import "./WelcomePage.css";

const WelcomePage = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
        console.log(user);
    };

    // const hero = require('./hero.png')
    const vector = require("./Vector.png");

    return (
        <>
            <Box
                height="100vh"
                display="flex"
                flexDirection="row"
                alignItems="center"
            >
                <Grid
                    className="grid"
                    style={{
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        width: "50%",
                        height: "100%",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={hero}
                        alt=""
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Grid>

                <Grid xl={6} lg={6} md={12} xs={12} container>
                    <Box style={{ margin: "0 auto", padding: "0 20px" }}>
                        <Box textAlign="center">
                            <img src={vector} alt="" />
                        </Box>
                        <Typography
                            variant="h4"
                            component="h4"
                            marginBottom={3}
                            textAlign="center"
                        >
                            <b>Login</b>
                        </Typography>
                        <InputAdornments />
                        <Button
                            fullWidth
                            variant="outlined"
                            color="secondary"
                            onClick={login}
                        >
                            Continue with Google
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </>
    );
};

export default WelcomePage;
