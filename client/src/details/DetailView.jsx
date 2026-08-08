import { Box } from '@mui/material';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

const DetailView = () => {

  const [post, setPost] = useState({})
  const {id}= useParams()
  const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

  useEffect(()=>{
    const fetchData= async()=>{
      const response= await fetch(`${BASE_URL}/post`,{
        method: 'GET',
        headers: {
          headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        }
      })
    }
    fetchData()
  },[])

  const BASE_URL = import.meta.env.VITE_API_URL;
  return (
    <>
    <Box>
      <img src={url} alt="Blog" />
    </Box>
    </>
  )
}

export default DetailView