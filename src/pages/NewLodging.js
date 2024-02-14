import React, { useState } from "react";
import { Box, Stack, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function NewLodging() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        hostname: "",
        location: "",
        price: "",
        minimum_nights: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAdd = async () => {
        try {
            const priceInt = parseInt(formData.price);
            await axios.post('https://nodejs.sulla.hu/data', {
                ...formData,
                price: priceInt
            }, {
                headers: {
                    'access-control-allow-origin': '*'
                }
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            navigate('/');
        }
    };

    const handleClear = () => {
        setFormData({
            name: "",
            hostname: "",
            location: "",
            price: "",
            minimum_nights: ""
        });
    };

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
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    id="hostname"
                    name="hostname"
                    label="Hostname"
                    variant="outlined"
                    value={formData.hostname}
                    onChange={handleChange}
                />
                <TextField
                    id="location"
                    name="location"
                    label="Location"
                    variant="outlined"
                    value={formData.location}
                    onChange={handleChange}
                />
                <TextField
                    id="price"
                    name="price"
                    label="Price"
                    type="number"
                    variant="outlined"
                    value={formData.price}
                    onChange={handleChange}
                />
                <TextField
                    id="minimum_nights"
                    name="minimum_nights"
                    label="Minimum nights"
                    variant="outlined"
                    value={formData.minimum_nights}
                    onChange={handleChange}
                />
            </Stack>
            <Stack direction="row" spacing={2} m={3}>
                <Button variant="outlined" onClick={handleAdd} startIcon={<AddIcon />}>
                    Add new
                </Button>
                <Button variant="outlined" onClick={handleClear} startIcon={<DeleteIcon />} color="error">
                    Clear fields
                </Button>
            </Stack>
        </Box>
    );
}

export default NewLodging;
