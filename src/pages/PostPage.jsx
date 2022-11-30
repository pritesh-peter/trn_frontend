import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'
import Base from '../components/Base'
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
  return (
    <Base>
    <Container className='mt-4'>

        <Link to="/">Home</Link>

        <Row>
            <Col md={{size:12}}>
            <Card>
                <CardBody>
                    <CardText>
                    </CardText>   
                </CardBody>
            </Card>
            </Col>
        </Row>
    </Container>
    </Base>
    )
}

export default PostPage