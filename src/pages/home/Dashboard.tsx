import { Box, Container, Grid } from "@mui/material";
import Banner from "../../components/pages/dashboard/banner";
import Holidays from "../../components/pages/dashboard/Holidays";

function Dashboard() {
  return <Container
    sx={{
      padding:"10px 0px",
    }}
  >
      <Banner/>
      <Grid container spacing={1} sx={{padding:"10px 0px"}}>
        < Grid size={6}>
          <Holidays/> 
        </Grid>
         < Grid size={6}>
          <Holidays/>
        </Grid>
      </Grid>
    </Container>
  ;
}

export default Dashboard;
