import {
  Box,
  styled,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ImageUp } from "lucide-react";
import { useLocation ,useNavigate, useParams} from "react-router-dom";
import { useContext } from "react";
import { OnlyContext } from "../../context/Context";
import { getAccessToken } from "../../utils/common-utils";

const Image = styled("img")`
  height: 50vh;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
`;
const Container = styled(Box)`
  margin: 0 100px;
`;
const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;
const StyledInputBase = styled(InputBase)`
  flex: 1;
  font-size: 20px;
  margin: 0 30px;
`;
const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 20px;
  resize: none;
  padding: 3px;
  &:focus-visible {
    outline: none;
  }
`;
const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};

const Update = () => {
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState(null);
  const location = useLocation();
  const navigate= useNavigate()
  const { accountDetails,setAccountDetails } = useContext(OnlyContext);
  const {id}= useParams()

  const BASE_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
      const token = getAccessToken();
  
      const fetchData = async () => {
        try {
          const response = await fetch(`${BASE_URL}/post/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          });
  
          const data = await response.json();
  
          if (response.ok) {
            setPost(data);
          }
        } catch (error) {
          console.log("Error fetching post:", error);
        }
      };
  
      fetchData();
    }, [id]);

  useEffect(() => {
    if (!file) return;
    const getImage = async () => {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);

      // API CALL
      const response = await fetch(`${BASE_URL}/file/upload`, {
        method: "POST",
        body: data,
      });

      const resData = await response.json();
      setPost((prev) => ({
            ...prev,
            picture: resData.imgUrl,
        }));
    };
    getImage();
    
  }, [file]);

  useEffect(() => {
    // sessionStorage.setItem('username', accountDetails.username)
    setPost((prev) => ({
        ...prev,
        categories: location.search?.split("=")[1] || "All",
        username: accountDetails.username,
        
    }));
}, [location.search, accountDetails.username]);

  const handleFilechange=(e)=>{
    setFile(e.target.files[0])
  }
  const handleChange = (e) => {
    setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateBlogPost=async()=>{
    const token = getAccessToken();
    const payload = {
      title: post.title?.trim(),
      description: post.description?.trim(),
      picture: post.picture || "",
      username: accountDetails.username,
      categories: location.search?.split("=")[1] || "All",
    };

    const response= await fetch(`${BASE_URL}/update/${id}`,{
      method:"PUT ",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`
      },
      body: JSON.stringify(payload)
    })
    const data = await response.json();
    if(response.ok){
      navigate(`/details/${id}`)
    }else{
      console.error("Create post failed:", data);
    }
  }
  return (
    <>
      <Container>
        <Image
          src={
            post.picture
              ? post.picture
              : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          }
          alt="banner"
          title="Banner Image"
        />

        <StyledFormControl>
          <label htmlFor="upload_image" className="mt-1.5 ml-2">
            <ImageUp color="#363636" size={25}></ImageUp>
          </label>
          <input type="file" id="upload_image" onChange={handleFilechange} style={{ display: "none" }} />
          <StyledInputBase
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={post.title}
          />
          <Button variant="contained" onClick={updateBlogPost}>Update</Button>
        </StyledFormControl>
        <StyledTextareaAutosize
          onChange={handleChange}
          name="description"
          placeholder="Whats Up!..."
          minRows={5}
          value={post.description}
        />
      </Container>
    </>
  );
};

export default Update;
