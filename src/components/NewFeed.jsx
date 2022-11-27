import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { loadAllPosts } from '../services/post-service'
import Post from './Post'

const NewFeed= () => {

    const [postContent, setPostContent] = useState({
        content:[]
    })

    useEffect(()=>{
        //load all posts from server
        loadAllPosts().then((data)=>{
            console.log(data);
            setPostContent(data)
        }).catch(error=>{
            console.log(error)
        })
    },[])

  return (
    <div className='container-fluid'>
        <Row>
            <Col md={
                {
                    size:10,
                    offset:1
                }
            }>
            <h1>Blogs Count ({postContent?.totalElements})</h1>
          {
            postContent.content.map((post)=>(
                <Post post={post} key={post.postId}/>
            ))
          }
            </Col>
            
        </Row>
        
        </div>
  )
}

export default NewFeed