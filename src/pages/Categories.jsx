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

function Categories() {

    const [post, setPost] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
        loadPostCategoryWise(categoryId).then((data)=>{
                setPost([...data])
        }).catch(error => {
            console.log(error)
            toast.error("error in loading posts")
        })
    })

  return (
    <Base>
    <Container className="mt-3">
     <Row>
       <Col md={2} className="pt-5">
       <CategorySideMenu/>
       </Col>
       <Col md={10}>
        {
            post && post.map((post, index) => {
                return(
                    <Post key={index} post={post}/>
                )
            })
        }
       </Col>  
     </Row>
    </Container>
     </Base>
  )
}

export default Categories