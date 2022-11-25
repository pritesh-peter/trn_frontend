import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label, Placeholder } from 'reactstrap'
import { loadAllCategories } from '../services/category-service'
import JoditEditor from "jodit-react";

const AddPost = () =>{

    const editor = useRef(null)
    // const [content,setContent]= useState('')

    const [categories,setCategories] = useState([])

    const [post,setPost]=useState({
        title:'',
        content:'',
        categoryId:''
    })

    // const config = {
    //     placeholder:"Start typing..."
    // }
    useEffect( 
        ()=>{

            loadAllCategories().then((data)=>{
                console.log(data)
                setCategories(data)
            }).catch(error=>{
                console.log(error)
            })
    },[])


//field changed function
const fieldChanged=(event)=>{
    // console.log(event)
    setPost({...post,[event.target.name]:event.target.value})

}

const contentFieldChanged = (data) => {
    setPost({...post,'content':data})
}

//create post function
const createPost =(event) =>{
    event.preventDefault();

}
  return (
    <div className="wrapper">



        <Card className='shadow-sm border-0 mt-2'>

            <CardBody>
                {JSON.stringify(post)}
                <h3>What going in you mind ?</h3>
                <Form onSubmit={createPost}>

                    <div className='my-3'>
                        <Label for="title">Post Title</Label>
                        <Input
                         type="text"
                          id="title"
                          placeholder="Enter here"
                          className='rounded-0'
                          name="title"
                          onChange={fieldChanged}
                          />
                    </div>
                    <div className='my-3'>
                        <Label for="content">Post Content</Label>
                         <JoditEditor
                         ref={editor}
                         value={post.content}
                        //  config={config}
                         onChange={newContent=>contentFieldChanged(newContent)}
                         />
                    </div>
                    <div className='my-3'>
                        <Label for="category">Post Category</Label>
                        <Input
                         type="select"
                          id="category"
                          placeholder="Enter here"
                          className='rounded-0'
                          name="categoryId"
                          onChange={fieldChanged}
                          >
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