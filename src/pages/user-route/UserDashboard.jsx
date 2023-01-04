import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Container } from "reactstrap";
import { getCurrentUserDetail } from "../../auth";
import AddPost from "../../components/AddPost";
import Base from "../../components/Base";
import Post from "../../components/Post";
import { deletePostService, loadPostUserWise } from "../../services/post-service";

const UserDashboard = () => {
    const [user, setUser] = useState({})

    const [post, setPost] = useState([])

    useEffect(()=>{
        setUser(getCurrentUserDetail())
        console.log(user)
        loadPostData()
    },[])

    function loadPostData(){
        loadPostUserWise(getCurrentUserDetail().id).then(data =>{
            setPost([...data])
            console.log(data)
        }).catch(error=>{
            console.log(error)
            toast.error("error in loading user post")
        })
    }

    //function to delete post
    function deletePost(post){

        deletePostService(post.postId).then(res=>{
            console.log(res)
            toast.success("post deleted successfully")
            loadPostData()
        }).catch(error=>{
            console.log(error)
            toast.error("Error in deleting post")
        })

    }

    return (
        <Base>
        <Container>
            <AddPost/>

            <h1 className="my-3">Posts Count : ({post.length})</h1>
            {post.map((post, index)=>{
                return(
                    <Post post={post} key={index} deletePost={deletePost}/>
                )
            })}
        </Container>
        </Base>
    )
}

export default UserDashboard;
