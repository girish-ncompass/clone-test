import React, { useState } from 'react'
import {
  AlternateEmailOutlined,
  Image,
  InsertEmoticon,
} from '@mui/icons-material'
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  Typography,
  type SelectChangeEvent,
} from '@mui/material'
import EmojiPicker from 'emoji-picker-react'

function Post() {
  const [age, setAge] = useState("organization")
  const [content,setContent] = useState("")
  const [showPicker, setShowPicker] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    setAge(event.target.value as string )
  }
const handleContentChange  = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setContent(event.target.value)
}
  return (
    <Box
      sx={{
        p: 2,
        borderTop: '1px solid #ccc',
        // maxWidth: 400,
      }}
    >
      {/* Text area */}
      <TextareaAutosize
        value={content}
        aria-label="post content"
        minRows={3}
        placeholder="What's on your mind?"
        style={{
          width: '100%',
          padding: 8,
          borderRadius: 8,
        //   borderColor: '#ccc',
          resize: 'none',
          backgroundColor:'transparent',
          color:"white"
        }}
        onChange={handleContentChange}
      />

      {/* Icon buttons */}
      <Stack direction="row" spacing={1} mt={1}>
        <IconButton color="primary">
          <AlternateEmailOutlined />
        </IconButton>
        <IconButton color="primary">
          <Image />
        </IconButton>
        <IconButton
        color="primary"
        onClick={() => setShowPicker(prev => !prev)} // toggle picker
      >
        <InsertEmoticon />
      </IconButton>
      
      </Stack>
 {showPicker && (
        <EmojiPicker
          onEmojiClick={(event) => {
            setContent(prev => prev + event.emoji); // append emoji
            setShowPicker(false)
          }}
        />
      )}
      {/* Select dropdown */}
     <Box
  display={"flex"}
  alignItems="center"
        justifyItems={"stretch"}
  flexWrap="nowrap" // prevents wrapping
 
>
  <Typography whiteSpace="nowrap" paddingRight={"10px"}>
    Posting to
  </Typography>

  <FormControl size="small" sx={{ minWidth: 150 ,}}>
    <InputLabel id="age-select-label" color='primary'></InputLabel>
    <Select
  labelId="age-select-label"
  id="age-select"
  value={age}
  
  onChange={handleChange}
 MenuProps={{
    PaperProps: {
      sx: {
        bgcolor: '#0a1d2c', // background of the dropdown itself
        '& .MuiMenuItem-root': {
          // individual menu item defaults
          bgcolor: 'transparent', // inherit from parent or keep transparent
          color: 'white',
          '&:hover': { bgcolor: '#0a1d2c73' },
          '&.Mui-selected': { bgcolor: '#0a1d2cc0' },
        },
      },
    },
  }}
>
  <MenuItem
    value="organization"
  >
    Organization
  </MenuItem>
  
</Select>

  </FormControl>
  <Box  sx={{marginLeft :"auto"}}>
    
  <Button variant='outlined' >Cancel</Button>
  <Button variant='contained' sx={{marginLeft:"10px"}}>Post</Button>
  </Box>
</Box>

    </Box>
  )
}

export default Post
