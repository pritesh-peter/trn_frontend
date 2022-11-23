import React, { useEffect } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label, Placeholder } from 'reactstrap'
import { loadAllCategories } from '../services/category-service'

const AddPost = () =>{

    useEffect( 
        ()=>{

            loadAllCategories().then((data)=>{
                console.log(data)
            }).catch(error=>{
                console.log(error)
            })
    },[])




  return (
    <div className="wrapper">



        <Card className='shadow-sm border-0 mt-2'>

            <CardBody>
                <h3>What going in you mind</h3>
                <Form>

                    <div className='my-3'>
                        <Label for="title">Post Title</Label>
                        <Input
                         type="text"
                          id="title"
                          Placeholder="Enter here"
                          className='rounded-0'
                          />
                    </div>
                    <div className='my-3'>
                        <Label for="content">Post Content</Label>
                        <Input
                         type="textarea"
                          id="content"
                          Placeholder="Enter here"
                          className='rounded-0'
                          style={{height:'300px'}}
                          />
                    </div>
                    <div className='my-3'>
                        <Label for="category">Post Category</Label>
                        <Input
                         type="select"
                          id="category"
                          Placeholder="Enter here"
                          className='rounded-0'
                          />
                    </div>

                    <Container className='text-center'>
                        <Button color='primary' className='rounded-0'>Create Post</Button>
                        <Button color='danger' className='rounded-0 ms-2'>Reset Content</Button>
                    </Container>
                </Form>
            </CardBody>
        </Card>
    </div>
  )
}

export default AddPost