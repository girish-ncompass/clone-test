import { Box, Button, Container, IconButton, Typography } from '@mui/material'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { ArrowBack, ArrowBackIos, ArrowBackIosNew, ArrowBackIosNewRounded, ArrowForwardIos, ArrowForwardIosRounded } from '@mui/icons-material';
function Holidays() {
    const holidays = [
        { id: 1, name: "New Year", date: "2025-01-01", color: "#4A90E2" },      // blue
        { id: 2, name: "Pongal", date: "2025-01-14", color: "#4A90E2" },        // blue
        { id: 3, name: "Republic Day", date: "2025-01-26", color: "#4A90E2" },  // blue
        { id: 4, name: "Ramzan", date: "2025-03-31", color: "#4A90E2" },        // blue
        { id: 5, name: "Tamil New Year", date: "2025-04-14", color: "#4A90E2" },// blue
        { id: 6, name: "Good Friday", date: "2025-04-18", color: "#4A90E2" },   // blue
        { id: 7, name: "May Day", date: "2025-05-01", color: "#D4A017" },       // gold/yellow
        { id: 8, name: "Independence Day", date: "2025-08-15", color: "#A569BD" }, // violet
        { id: 9, name: "Krishna Jayanti", date: "2025-08-16", color: "#A569BD" },  // violet
        { id: 10, name: "Ganesh Chathurthi", date: "2025-08-27", color: "#A569BD" }, // violet
        { id: 11, name: "Ayutha Pooja", date: "2025-10-01", color: "#C0392B" },  // red tone
        { id: 12, name: "Gandhi Jayanti", date: "2025-10-02", color: "#C0392B" }, // red tone
        { id: 13, name: "Deepavali", date: "2025-10-20", color: "#C0392B" },     // red tone
        { id: 14, name: "Christmas", date: "2025-12-25", color: "#4A90E2" }      // blue
    ];

    const [currentIndex, setCurrentIndex] = useState(1)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        holidays.map((value) => {
            const date = new Date(value.date)
            if (currentIndex == value.id) {
                return <Box
                    sx={{ backgroundColor: value.color, }}
                    padding={"10px"}
                >
                    <Box
                        display={"flex"}
                        justifyItems={"stretch"}
                    >
                        <Typography fontWeight={"lighter"} color='black'>
                            Holidays
                        </Typography>
                        <Button sx={{
                            marginLeft: "auto",
                            textAlign: "left",
                            textTransform: "none",
                            color: "black"
                        }}>View All</Button>
                    </Box>

                    <Box
                        key={value.id}
                        sx={{
                            backgroundColor: value.color,
                            display: "flex",
                            width: "100%",
                            padding: "10px"
                        }}
                    >{
                            currentIndex != 1 ?
                                <IconButton onClick={() => {
                                    setCurrentIndex((prev) => prev - 1)
                                }}>
                                    <ArrowBackIosNewRounded />
                                </IconButton> : <></>
                        }

                        <Container>
                            <Typography sx={{fontSize:"28px"}}>
                                {value.name}

                            </Typography>
                            <Typography sx={{
                                fontSize:"14px"
                            }}>
                                {days[date.getDay()]},{date.getDate()} {months[date.getMonth()]}, {date.getFullYear()}
                            </Typography>
                        </Container>
                        {
                            currentIndex != holidays.length ?
                                <IconButton onClick={() => {
                                    setCurrentIndex((prev) => prev + 1)
                                }}>
                                    <ArrowForwardIosRounded />
                                </IconButton> : <></>
                        }
                    </Box>
                </Box>
            }
        })
    )
}

export default Holidays