import { Box, Typography } from "@mui/material"
import { bgBannerPink } from "../../../assets"

function Banner() {
  return (
    <Box
        sx={{
            backgroundImage:`url("${bgBannerPink}")`,
             backgroundPosition:"center",
             backgroundSize:"cover",
             backgroundRepeat:"no-repeat",
             padding:"30px"
        }}
    >
       <Typography sx={{
        fontWeight:"bold",
        fontSize:"20px"
       }}>
         Welcome, Gary Chettiar
       </Typography>
    </Box>
  )
}

export default Banner