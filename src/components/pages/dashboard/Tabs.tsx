import { BarChart, EditSquare, PostAdd, WorkspacePremium } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Post from './Post'

function Tabs() {
    const [tab,setTab]=useState(0)
    const [isOpen,setIsOpen] =useState(false)
    const closedText = ["Write your post here and mention your peers","Title of the Poll","Give praise from here"]
    const content = [<Post/>,<></>,<h2>hel</h2>]
  return (
    <Box
    sx={{
        border:"1px solid"
    }}
    >
        <Stack direction={"row"} >
            <Button onClick={()=>{
                setIsOpen(false)

                setTab(0)
            }}>
                <EditSquare sx={{margin:"0px 5px"}}/>
                <Typography sx={{color:"white"}}>
                    Post
                </Typography>
            </Button>
             <Button onClick={()=>{
                setIsOpen(false)

                setTab(1)
            }}>
                <BarChart sx={{margin:"0px 5px",color:"#5cbc6e"}}/>
                <Typography  sx={{color:"white"}}>
                    Poll
                </Typography>
            </Button>
             <Button sx={{color:"white"}} onClick={()=>{
                setIsOpen(false)
                setTab(2)
            }}>
                <WorkspacePremium sx={{margin:"0px 5px"}}/>
                <Typography>
                    Praise
                </Typography>
            </Button>
        </Stack>
        {
            !isOpen? 
                <Button 
                    onClick={()=>{
                        setIsOpen(true)
                    }} 
                    sx={{
                        color:"gray",
                        textTransform:"none",
                        cursor:"text"
                        }}>
                    {closedText[tab]}
                </Button>:content[tab]
        }
    </Box>
  )
}

export default Tabs