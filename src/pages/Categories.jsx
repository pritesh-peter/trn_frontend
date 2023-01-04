import React from 'react'
import { Col, Container, Row } from "reactstrap";
import { useParams } from 'react-router-dom'
import Base from '../components/Base'
import CategorySideMenu from '../components/CategorySideMenu';
import { useEffect } from 'react';
import { loadPostCategoryWise } from '../services/category-service';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Post from '../components/Post';
import { deletePostService } from '../services/post-service';

function Categories() {

    const [posts, setPosts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
        console.log(categoryId)
        loadPostCategoryWise(categoryId).then((data)=>{
                setPosts([...data])
        }).catch(error => {
            console.log(error)
            toast.error("error in loading posts")
        })
    }, [categoryId])

    function deletePost(post){

        deletePostService(post.postId).then(res=>{
            console.log(res)
            toast.success("post deleted successfully")
            let newPostContents = posts.filter(p=>p.postId !=  post.postId)
            setPosts([...newPostContents])
        }).catch(error=>{
            console.log(error)
            toast.error("Error in deleting post")
        })

    }
  return (
    <Base>
    <Container className="mt-3">
     <Row>
       <Col md={2} className="pt-5">
       <CategorySideMenu/>
       </Col>
       <Col md={10}>
        <h1>Blogs Count ({posts.length})</h1>
        {
            posts.map((p1, index) => {
                return(
                    <Post deletePost={deletePost} key={index} post={p1}/>
                )
            })
        }
        {posts.length<=0 ?<h1>No post in this category</h1>:""}
       </Col>  
     </Row>
    </Container>
     </Base>
  )
}

export default Categories