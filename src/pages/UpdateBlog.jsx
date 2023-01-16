import JoditEditor from 'jodit-react'
import React, { useRef } from 'react'
import { useState } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label, Placeholder } from 'reactstrap'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Base from '../components/Base'
import userContext from '../context/userContext'
import { loadAllCategories } from '../services/category-service'
import { loadPost } from '../services/post-service'


function UpdateBlog() {

    const editor = useRef(null)
    const {blogId} = useParams()
    const [categories,setCategories] = useState([])
    const object = useContext(userContext)
    const navigate=useNavigate()
    const [post,setPost] = useState(null)
        useEffect(()=>{
            loadAllCategories().then((data)=>{
                // console.log(data)
                setCategories(data)
            }).catch(error=>{
                console.log(error)
            })
            //load the blog from database
        loadPost(blogId).then(data=>{
            setPost({...data})
        })
        
        },[])

        useEffect(()=>{

                      if(post){
                        console.log(post.user.id);
                        console.log(object.user.data.id);
            
                if(post.user.id != object.user.data.id){
                    toast.error("This is not your blog")
                    navigate("/")
                }
            }
        },[post])

        const updateHtml =() => {
            return(
                <div className="wrapper">



                <Card className='shadow-sm border-0 mt-2'>
        
                    <CardBody>
                        {/* {JSON.stringify(post)} */}
                        <h3>Update your post</h3>
                        <Form onSubmit={''}>
        
                            <div className='my-3'>
                                <Label for="title">Post Title</Label>
                                <Input
                                 type="text"
                                  id="title"
                                  placeholder="Enter here"
                                  className='rounded-0'
                                  name="title"
                                  value={post.title}
                                  onChange={''}
                                  />
                            </div>
                            <div className='my-3'>
                                <Label for="content">Post Content</Label>
                                 <JoditEditor
                                 ref={editor}
                                 value={post.content}
                                //  config={config}
                                 onChange={''}
                                 />
                            </div>
        
                            {/* file Field */}
                            <div className="mt-3">
                                <Label for="image">Select Post Banner</Label>
                                <Input id="image" type='file' onChange={''}/>
                            </div>
        
                            <div className='my-3'>
                                <Label for="category">Post Category</Label>
                                <Input
                                 type="select"
                                  id="category"
                                  placeholder="Enter here"
                                  className='rounded-0'
                                  name="categoryId"
                                  value={post.categoryId}
                                  onChange={''}
                                  selected={0}
                                  >
                                    <option disabled value={0}>--Select Category--</option>
                                    {
                                        categories.map((category)=>(
                                           <option value={category.categoryId} key={category.categoryId}>
                                            {category.categoryTitle}
                                            </option> 
                                        ))
                                    }
                                    </Input>
                            </div>
        
                            <Container className='text-center'>
                                <Button color='primary' className='rounded-0'>Update Post</Button>
                                <Button onClick={''} color='danger' className='rounded-0 ms-2'>Reset Content</Button>
                            </Container>
                        </Form>
                    </CardBody>
                </Card>
            </div>
            )
        }
    
  return (
    <Base>
    {blogId}
    </Base>
  )
}

export default UpdateBlog