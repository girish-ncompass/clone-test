import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'

function OnLeave() {
  return (
    <Box
        sx={{
            backgroundColor:"secondary",
            border:"1.5px solid #ffffff57",
            borderRadius:"5px",
            padding:"10px"
        }}
    >
        <Typography fontSize={"14px"}>
            On Leave Today
        </Typography>
        <Stack direction={"row"} padding={"20px 10px"} >
            <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            color="primary"
            sx={{margin:"0px 5px"}}
            >
            <Avatar>A</Avatar>
            </Badge><Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            color="primary"
            sx={{margin:"0px 5px"}}
            >
            <Avatar>A</Avatar>
            </Badge><Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            color="primary"
            sx={{margin:"0px 5px"}}
            >
            <Avatar>A</Avatar>
            </Badge><Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            color="primary"
            sx={{margin:"0px 5px"}}
            >
            <Avatar >A</Avatar>
            </Badge>
        </Stack>
    </Box>
  )
}

export default OnLeave