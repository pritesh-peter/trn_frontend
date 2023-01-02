import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Container } from "reactstrap";
import { getCurrentUserDetail } from "../../auth";
import AddPost from "../../components/AddPost";
import Base from "../../components/Base";
import { loadPostUserWise } from "../../services/post-service";

const UserDashboard = () => {
    const [user, setUser] = useState({})

    const [post, setPost] = useState([])

    useEffect(()=>{
        setUser(getCurrentUserDetail())
        console.log(user)
        loadPostUserWise(getCurrentUserDetail().id).then(data =>{
            setPost([...data])
            console.log(data)
        }).catch(error=>{
            console.log(error)
            toast.error("error in loading user post")
        })
        

    },[])
    return (
        <Base>
        <Container>
            <AddPost/>
        </Container>
        </Base>
    )
}

export default UserDashboard;
