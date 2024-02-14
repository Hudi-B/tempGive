import React from "react";
import { TextField, Box, Stack } from "@mui/material";

function Login() {
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
                    />
                <TextField
                    id="password"
                    name="password"
                    label="password"
                    variant="outlined"
                    type="password"
                />
            </Stack>
        </Box>
    );
}

export default Login;