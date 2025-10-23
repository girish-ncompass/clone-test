import { AccountCircle, Notifications,  Search } from "@mui/icons-material";
import { AppBar, Box,  TextField, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return<>
    <AppBar>
      <Toolbar>
       <Typography>
        NCompass
       </Typography>
       
        <Box 
        display={"flex"}
        alignItems={"center"}
        sx={{
           backgroundColor:'secondary.main',
           borderRadius:'50px',
           width: 500,
           margin: "5px",
          padding:"6px 6px"
            }}
        >
          <Search sx={{color:"black"}}/>
        <TextField
        fullWidth
          variant="standard"
          placeholder="Search employees or actions (Ex: Apply Leave)"
          // size="small"
          slotProps={{  input: {
            disableUnderline:true
          } }}
          
          sx={{  
            '.MuiInputBase-input': { 
          fontSize: '12px', // Adjust as needed
          color:"white",
          fontWeight:"extraLight"
        }, 
          }}
          
        />
        </Box>
          <Box
            sx={{
              marginLeft:"auto"
            }}
          >
            <Notifications fontSize="medium"/>
          <AccountCircle fontSize="medium"/>
          </Box>
       
      </Toolbar>
    </AppBar>;
    </>
}

export default Navbar;
