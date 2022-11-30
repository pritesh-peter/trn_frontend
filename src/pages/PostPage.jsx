import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'
import Base from '../components/Base'
import { BASE_URL } from '../services/helper'
import { loadPost } from '../services/post-service'

const PostPage = () => {

    const {postId} = useParams()
    const [post,setPost] = useState(null)

    useEffect(()=> {
        //load post of postId
        loadPost(postId).then(data=>{
            console.log(data)
            setPost(data)
        }).catch(error=>{
            toast.error("Error in loading post")
        })

    },[])

    const printDate = (numbers) => {
        return new Date(numbers).toLocaleString()
    }
  return (
    <Base>
    <Container className='mt-4'>

        <Link to="/">Home</Link>

        <Row>
            <Col md={{size:12}}>
            <Card className='mt-3'>
                {
                    (post) && (
                <CardBody>
                    <CardText>
                        Posted By <b>{post.user.name}</b> on <b>{printDate(post.addedDate)}</b>
                    </CardText>
                    <CardText className='mt-3'>
                        <h3>{post.title}</h3>    
                    </CardText>  
                    <div className="image-container mt-3 container text-center" style={{maxWidth:'50%'}}>
                    <img className="img-fluid" src={BASE_URL+'post/image/'+post.imageName} alt="" />   
                    </div> 
                </CardBody>
  )
}
            </Card>
            </Col>
        </Row>
    </Container>
    </Base>
    )
}

export default PostPage