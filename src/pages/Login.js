import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Stack, Button } from "@mui/material";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "admin" && password === "admin") {
            dispatch(login());
            navigate("/");
        }
    }

    return (
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        m={3}
        flexDirection="column"
        >
            <Stack direction="column" spacing={2}>
                <TextField
                        id="username"
                        name="username"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Stack>
            <Box mt={2}>
                <Button variant="contained" onClick={handleLogin}>Login</Button>
            </Box>
        </Box>
    );
}

export default Login;