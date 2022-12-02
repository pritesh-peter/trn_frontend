import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardText, Col, Container, Input, Row } from 'reactstrap'
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
            <Card className='mt-3 ps-2 border-0 shadow-sm'>
                {
                    (post) && (
                <CardBody>
                    <CardText>
                        Posted By <b>{post.user.name}</b> on <b>{printDate(post.addedDate)}</b>
                    </CardText>
                    <CardText>
                        <span className='text-muted'>{post.category.categoryTitle}</span>
                    </CardText>
                    <div className='divider' style={{
                        width:'100%',
                        height:'1px',
                        background:'#e2e2e2'
                    }}></div>
                    <CardText className='mt-3'>
                        <h1>{post.title}</h1>    
                    </CardText>  
                    <div className="image-container mt-4 shadow" style={{maxWidth:'50%'}}>
                    <img className="img-fluid" src={BASE_URL+'post/image/'+post.imageName} alt="" />   
                    </div>
                    <CardText className='mt-5' dangerouslySetInnerHTML={{__html:post.content}}></CardText>
                </CardBody>
  )
}
            </Card>
            </Col>
        </Row>
        <Row className='my-4'>
            <Col md={{
                size:9,
                offset:1
            }}>
                <h3>Comments ({post ? post.comments.length : 0})</h3>
                {
                    post && post.comments.map((c,index)=>(
                       <Card className='mt-4 border-0'>
                        <CardBody>
                            <CardText>
                                {c.content}
                            </CardText>
                        </CardBody>
                       </Card>
                    ))
                }

            <Card className='mt-4 border-0'>
                        <CardBody>
                        <Input type="textarea" placeholder='Enter comment here'/>
                        </CardBody>
                       </Card>  
            </Col>
        </Row>
    </Container>
    </Base>
    )
}

export default PostPage