
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label,Form, Button } from "reactstrap";
import Base from "../components/Base";

const Signup = () => {
    return (
        <Base>
      <Container>
        <Card>
        <CardHeader>
         Fill your information to register!!
        </CardHeader>
        <CardBody>
            {/* Creating Form */}
        <Form>
            {/* Name Field */}
            <FormGroup>
                <Label for="name">Enter Name</Label>
                <Input
                type="text"
                placeholder="Enter here"
                id="name"
                />
            </FormGroup>
             {/* Email Field */}
              <FormGroup>
                <Label for="email">Enter Email</Label>
                <Input
                type="email"
                placeholder="Enter here"
                id="email"
                />
            </FormGroup>
             {/* Password Field */}
             <FormGroup>
                <Label for="password">Enter Password</Label>
                <Input
                type="password"
                placeholder="Enter here"
                id="password "
                />
            </FormGroup>
            {/* About Field */}
            <FormGroup>
                <Label for="about">Enter About yourself</Label>
                <Input
                type="textarea"
                placeholder="Enter here"
                id="about "
                style={{height:"250px"}}
                />
            </FormGroup>
            <Container className="text-center">

                <Button color="dark">Register</Button>
                <Button color="secondary" type="reset" className="ms-2">Reset</Button>
            </Container>
        </Form>

        </CardBody>
        </Card>
      </Container>
        </Base>
    )
};

export default Signup; 