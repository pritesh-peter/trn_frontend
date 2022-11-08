
import { useState } from "react";
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label,Form, Button, Row, Col } from "reactstrap";
import Base from "../components/Base";

const Signup = () => {

    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
        about:'',
    })
    
    const [error,setError] = useState({
        errors:{},
        isError:false
    })

    //handles a change
    const handleChange =(event,field) =>{
        setData({...data,[field]:event.target.value})
    }

    const resetData =() =>{
        setData({
            name:'',
            email:'',
            password:'',
            about:'',
        })
    }

    const submitForm=(event)=>{
        console.log(data);
        event.preventDefault();
      
        //data validation

        //call server api for sending data


    }

    return (
        <Base>
      <Container>
        <Row className="mt-4">
            <Col sm={{size:6,offset:3}}>
            <Card color="dark" inverse>
        <CardHeader>
         Fill your information to register!!
        </CardHeader>
        <CardBody>
            {/* Creating Form */}
        <Form onSubmit={submitForm}>
            {/* Name Field */}
            <FormGroup>
                <Label for="name">Enter Name</Label>
                <Input
                type="text"
                placeholder="Enter here"
                id="name"
                onChange={(e)=>handleChange(e,'name')}
                value={data.name}
                />
            </FormGroup>
             {/* Email Field */}
              <FormGroup>
                <Label for="email">Enter Email</Label>
                <Input
                type="email"
                placeholder="Enter here"
                id="email"
                onChange={(e)=>handleChange(e,'email')}
                value={data.email}
                />
            </FormGroup>
             {/* Password Field */}
             <FormGroup>
                <Label for="password">Enter Password</Label>
                <Input
                type="password"
                placeholder="Enter here"
                id="password"
                onChange={(e)=>handleChange(e,'password')}
                value={data.password}
                />
            </FormGroup>
            {/* About Field */}
            <FormGroup>
                <Label for="about">Enter About yourself</Label>
                <Input
                type="textarea"
                placeholder="Enter here"
                id="about"
                onChange={(e)=>handleChange(e,'about')}
                value={data.about}
                style={{height:"250px"}}
                />
            </FormGroup>
            <Container className="text-center">

                <Button color="light" outline>Register</Button>
                <Button onClick={resetData} color="secondary" outline type="reset" className="ms-2">Reset</Button>
            </Container>
        </Form>

        </CardBody>
        </Card>
            </Col>
        </Row>
      </Container>
        </Base>
    )
};

export default Signup; 