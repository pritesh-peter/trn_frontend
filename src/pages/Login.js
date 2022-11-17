import { useState } from "react";
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label,Form, Button, Row, Col } from "reactstrap";

import Base from "../components/Base";

const Login = () => {

    const [loginDetail,setLoginDetail] = useState({
        username:'',
        password:''
    })

    const handleChange = (event, field) => {
        setLoginDetail({...loginDetail,[field]:event.target.value})
    }

    const handleFormSubmit = (event)=>{
        event.preventDefault();
    }

    return (
        <Base>
        <Container>
        <Row className="mt-4">
            <Col sm={{size:6,offset:3}}>
            <Card color="dark" inverse>
        <CardHeader>
         Login Here!!
        </CardHeader>
        <CardBody>
            {/* Creating Form */}
        <Form onSubmit={handleFormSubmit}>
            {/* Email Field */}
            <FormGroup>
                <Label for="email">Enter Email</Label>
                <Input
                type="text"
                placeholder="Enter here"
                id="email"
                value={loginDetail.username}
                onChange={(e)=> handleChange(e,'username')}
                />
            </FormGroup>
             {/* Password Field */}
              <FormGroup>
                <Label for="password">Enter Password</Label>
                <Input
                type="pasword"
                placeholder="Enter here"
                id="password"
                value={loginDetail.password}
                onChange={(e)=>handleChange(e,'password')}

                />
            </FormGroup>
            
            <Container className="text-center">

                <Button color="light" outline>Login</Button>
                <Button color="secondary" outline type="reset" className="ms-2">Reset</Button>
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

export default Login; 