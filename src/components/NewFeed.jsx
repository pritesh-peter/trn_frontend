import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'
import { loadAllPosts } from '../services/post-service'
import Post from './Post'
import InfiniteScroll from 'react-infinite-scroll-component'

const NewFeed= () => {

    const [postContent, setPostContent] = useState({
        content:[],
        totalPages:'',
        totalElements:'',
        pageSize:'',
        lastPage:false,
        pageNumber:''
    })

    const [currentPage,setCurrentPage] = useState(0)

    useEffect(()=>{
        //load all posts from server
       changePage(currentPage)
    },[currentPage])

    const changePage=(pageNumber=0,pageSize=5)=>{

        if(pageNumber>postContent.pageNumber && postContent.lastPage){
            return;
        }else if(pageNumber < postContent.pageNumber && postContent.pageNumber==0){
            return
        }
        loadAllPosts(pageNumber,pageSize).then(data=>{
            setPostContent({
                content:[...postContent.content,...data.content],
                totalPages:data.totalPages,
                totalElements:data.totalElements,
                pageSize:data.pageSize,
                lastPage:data.lastPage,
                pageNumber:data.pageNumber
            })
            // setPostContent(data)
            // window.scroll(0,0)
        }).catch(error=>{
            toast.error("Error in loading post")
        })
    }

    const changePageInfinite = () => {
        console.log("Page changed")
        setCurrentPage(currentPage+1)
    }

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
            <InfiniteScroll
                dataLength={postContent.content.length}
                next={changePageInfinite}
                hasMore={!postContent.lastPage}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
          
            {
            postContent.content.map((post)=>(
                <Post post={post} key={post.postId}/>
            ))
          }

            </InfiniteScroll>

        
          {/* <Container className='mt-3'>
            <Pagination size='lg'>
                <PaginationItem onClick={()=>changePage(postContent.pageNumber-1)} disabled={postContent.pageNumber==0}>
                    <PaginationLink previous>
                    Previous
                    </PaginationLink>
                </PaginationItem>
               {
                [...Array(postContent.totalPages)].map((item, index)=>(

                   <PaginationItem onClick={()=>changePage(index)} active={index===postContent.pageNumber} key={index}>
                        <PaginationLink >
                            {index+1}
                        </PaginationLink>
                   </PaginationItem>
                    ))
               }


                <PaginationItem onClick={()=>changePage(postContent.pageNumber+1)} disabled={postContent.lastPage}>
                    <PaginationLink next>
                        Next
                    </PaginationLink>
                </PaginationItem>
                
            </Pagination>

          </Container> */}


            </Col>
            
        </Row>
        
        </div>
  )
}

export default NewFeed