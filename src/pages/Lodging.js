import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
    };



function Lodging() {
    const { id } = useParams();
    const [lodgingData, setLodgingData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        axios.delete(`https://nodejs.sulla.hu/data/${id}`)
        .then(response => {
            navigate('/');
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    useEffect(() => {
        axios.get(`https://nodejs.sulla.hu/data/${id}`)
            .then(response => {
                setLodgingData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
        }, [id]);

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <div>
            {
                isLoading ? (
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        justifyContent="center"
                        alignItems="center"
                        m={3}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent={"center"}
                        m={3}
                    >
                        <List sx={style}>
                            <ListItem>
                                <ListItemText primary={lodgingData.name} secondary="Name" />
                            </ListItem>
                            <Divider component="li" />
                            <ListItem>
                                <ListItemText primary={lodgingData.hostname} secondary="Hostname" />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemText primary={lodgingData.location} secondary="Location" />
                            </ListItem>
                            <Divider variant="middle" component="li" />
                            <ListItem>
                                <ListItemText primary={lodgingData.price + " Ft"} secondary="Price" />
                            </ListItem>
                            <Divider variant="middle" component="li" />
                            <ListItem>
                                <ListItemText primary={lodgingData.minimum_nights} secondary="Minimum nights" />
                            </ListItem>
                        </List>
                        <Stack direction="row" spacing={2} m={3}>
                            <Button variant="contained" onClick={() => handleDelete(id)} startIcon={<DeleteIcon />} color="error" disabled={!isLoggedIn}>
                                Delete
                            </Button>
                                <Button variant="contained" component={Link} to={`/lodging/edit/${id}`} startIcon={<EditIcon />} disabled={!isLoggedIn}>
                                    Edit
                                </Button>
                        </Stack>
                    </Box>
                )
            }
        </div>
    );
}

export default Lodging;
