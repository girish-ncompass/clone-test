import { AccountCircle, Notifications, Search } from "@mui/icons-material";
import { AppBar, Box, Button, Slide, TextField, Toolbar, Typography } from "@mui/material";
import { useRef, useState } from "react";



const tabs = ["Dashboard", "Welcome"]
function Navbar() {
  const ButtonBoxRef = useRef(null)
  const [currentTab, setcurrentTab] = useState(tabs[0])
  return <>
    <AppBar elevation={0}>
      <Toolbar sx={{ minHeight: 'fit-content' }}>
        <Typography>
          NCompass
        </Typography>

        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: '50px',
            width: 500,
            margin: "5px",
            padding: "6px 6px",
            marginLeft:"100px"
          }}
        >
          <Search sx={{ color: "black" }} />
          <TextField
            fullWidth
            variant="standard"
            placeholder="Search employees or actions (Ex: Apply Leave)"
            // size="small"
            slotProps={{
              input: {
                disableUnderline: true
              }
            }}

            sx={{
              '.MuiInputBase-input': {
                fontSize: '12px', // Adjust as needed
                color: "white",
                fontWeight: "extraLight"
              },
            }}

          />
        </Box>
        <Box
          sx={{
            marginLeft: "auto"
          }}
        >
          <Notifications fontSize="medium" />
          <AccountCircle fontSize="medium" />
        </Box>

      </Toolbar>
      <Toolbar sx={{
        backgroundColor: "background.default"
      }}>
        {
          tabs.map((value, index) => {
            return <Box
             
              alignItems={"center"}
            >
              <Button
               ref={ButtonBoxRef}
                key={index}
                sx={{
                  color: currentTab == value ? "white" : "#a3b5c2"
                }}
                variant="text"
                disableRipple
                onClick={() => { setcurrentTab(value) }}>
                <Typography 
                  variant="h6"
                >
                  {value}
                </Typography>
                {currentTab == value ?

                  <Slide direction="right" in mountOnEnter unmountOnExit container={ButtonBoxRef.current}>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -10, // Adjust position relative to parent
                        // transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderBottom: '10px solid ', // Arrow color matching parent border
                        borderBottomColor: "primary.main"
                      }}
                    />
                  </Slide> : <></>}
              </Button>

            </Box>
          }

          )
        }
      </Toolbar>
    </AppBar>
  </>
}

export default Navbar;
