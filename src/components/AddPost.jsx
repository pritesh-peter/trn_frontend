import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label, Placeholder } from 'reactstrap'
import { loadAllCategories } from '../services/category-service'
import JoditEditor from "jodit-react";
import { createPost, uploadPostImage } from '../services/post-service';
import { getCurrentUserDetail } from '../auth';
import { toast } from 'react-toastify';

const AddPost = () =>{

    const editor = useRef(null)
    // const [content,setContent]= useState('')

    const [categories,setCategories] = useState([])

    const [user,setUser] = useState(undefined)

    const [post,setPost]=useState({
        title:'',
        content:'',
        categoryId:''
    })

    const [image,setImage] =useState(null)

    // const config = {
    //     placeholder:"Start typing..."
    // }
    useEffect( 
        ()=>{
            setUser(getCurrentUserDetail())
            loadAllCategories().then((data)=>{
                // console.log(data)
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
const clearPost =() => {
    setPost({
        title:'',
        content:'',
        categoryId:[0]
    })
}

const contentFieldChanged = (data) => {
    setPost({...post,'content':data})
}

//create post function
const submitPost =(event) =>{
    event.preventDefault();
    if(post.title.trim()===''){
        toast.error("post title is required!!")
        return;
    }
    if(post.content.trim()===''){
        toast.error("post content is required!!")
        return;
    }
    if(post.categoryId.trim()===''){
        toast.error("select some category !!")
        return;
    }

    //submit the form to server
    post['userId'] = user.id
    createPost(post).then(data=>{

        uploadPostImage(image,data.postId).then(data=>{
            toast.success("Image Uploaded !!");
        }).catch((error)=>{
            toast.error("Error uploading Image");
        })
        
        toast.success("Post Created")
        clearPost();
    }).catch((error)=>{
        toast.error("We are having some error !!")
    })
}

const handleFileChange = (event) =>{
    console.log(event.target.files[0])
    setImage(event.target.files[0])
}
  return (
    <div className="wrapper">



        <Card className='shadow-sm border-0 mt-2'>

            <CardBody>
                {/* {JSON.stringify(post)} */}
                <h3>What going in you mind ?</h3>
                <Form onSubmit={submitPost}>

                    <div className='my-3'>
                        <Label for="title">Post Title</Label>
                        <Input
                         type="text"
                          id="title"
                          placeholder="Enter here"
                          className='rounded-0'
                          name="title"
                          value={post.title}
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

                    {/* file Field */}
                    <div className="mt-3">
                        <Label for="image">Select Post Banner</Label>
                        <Input id="image" type='file' onChange={handleFileChange}/>
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
                          onChange={fieldChanged}
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
                        <Button color='primary' className='rounded-0'>Create Post</Button>
                        <Button onClick={clearPost} color='danger' className='rounded-0 ms-2'>Reset Content</Button>
                    </Container>
                </Form>
            </CardBody>
        </Card>
    </div>
  )
}

export default AddPost