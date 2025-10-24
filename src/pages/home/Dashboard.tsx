import { Box, Container, Grid } from "@mui/material";
import Banner from "../../components/pages/dashboard/banner";
import Holidays from "../../components/pages/dashboard/Holidays";
import OnLeave from "../../components/pages/dashboard/OnLeave";
import WorkingRemotely from "../../components/pages/dashboard/WorkingRemotely";
import Post from "../../components/pages/dashboard/Post";
import Tabs from "../../components/pages/dashboard/Tabs";

function Dashboard() {
  return <Container
    sx={{
      padding:"10px 0px",
    }}
  >
      <Banner/>
      <Grid container spacing={2} sx={{padding:"10px 0px"}}>
        < Grid size={6}>
          <Holidays/> 
        </Grid>
        <Grid size={6}>
          <Tabs/>
        </Grid>
         < Grid size={6}>
          <OnLeave/>
        </Grid>
        <Grid size={6}>
          <WorkingRemotely/>
        </Grid>
      </Grid>
    </Container>
  ;
}

export default Dashboard;
