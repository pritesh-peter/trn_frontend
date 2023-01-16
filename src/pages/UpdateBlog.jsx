import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Base from '../components/Base'
import userContext from '../context/userContext'
import { loadPost } from '../services/post-service'


function UpdateBlog() {

    const {blogId} = useParams()
    const object = useContext(userContext)
    const navigate=useNavigate()
    const [post,setPost] = useState(null)
        useEffect(()=>{

            //load the blog from database
        loadPost(blogId).then(data=>{
            setPost({...data})
        })
        
        },[])

        useEffect(()=>{
            if(!post){
                if(post.user.id!=object.data.user.id){
                    toast.error("This is not your blog")
                    navigate("/")
                }
            }
        })
    
  return (
    <Base>
    {blogId}
    </Base>
  )
}

export default UpdateBlog