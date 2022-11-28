import React, { useEffect, useState } from 'react'
import { Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'
import { loadAllPosts } from '../services/post-service'
import Post from './Post'

const NewFeed= () => {

    const [postContent, setPostContent] = useState({
        content:[],
        totalPages:'',
        totalElements:'',
        pageSize:'',
        lastPage:false,
        pageNumber:''
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
          <Container className='mt-3'>
            <Pagination>
                <PaginationItem disabled={postContent.pageNumber==0}>
                    <PaginationLink previous>

                    </PaginationLink>
                </PaginationItem>
               {
                [...Array(postContent.totalPages)].map((item, index)=>(

                   <PaginationItem  active={index===postContent.pageNumber} key={index}>
                        <PaginationLink>
                            {index+1}
                        </PaginationLink>
                   </PaginationItem>
                    ))
               }


                <PaginationItem disabled={postContent.lastPage}>
                    <PaginationLink next>

                    </PaginationLink>
                </PaginationItem>
                
            </Pagination>

          </Container>
            </Col>
            
        </Row>
        
        </div>
  )
}

export default NewFeed