
import { useState } from "react";
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label,Form, Button, Row, Col, FormFeedback } from "reactstrap";
import Base from "../components/Base";
import {toast} from 'react-toastify';
import { sendSmsUrl } from "../services/user-service";
const SendSms = () => {

    const [data,setData] = useState({
        name: "pritesh",
        contactNum: [9802608807,9821483502,9812909635],
        eodMessage: "Good Evening Sir,\nToday's Day end operation has been completed successfully.\nGood Night & regards: "
    })
    
    const [error,setError] = useState({
        errors:{},
        isError:false,
    })

    //handles a change
    const handleChange =(event,field) =>{
        setData({...data,[field]:event.target.value})
    }

    const resetData =() =>{
        setData({
            name: "",
            contactNum: [],
            eodMessage: "",
        });
    };

    const submitForm=(event)=>{
        console.log(data);
        event.preventDefault();
        data.eodMessage=data.eodMessage+data.name;
        if(error.isError){
            toast.error("For data invalid");
            setError({...error,isError:false})
            return;
        }
        
        console.log(data);
        //data validation

        //call server api for sending data
        sendSmsUrl(data).then((resp)=>{
            console.log(resp);
            console.log("success")
            toast.success("EOD Sent successfully");
            resetData();

        }).catch((error)=>{
            console.log(error)
            console.log("Error log")
            //handle errors in proper way
            setError({
                errors:error,
                isError:true,
            });

        });

    };

    return (
        <Base>
      <Container>
        <Row className="mt-4">
        {/* { JSON.stringify(data) } */}
            <Col sm={{size:6,offset:3}}>
            <Card color="dark" inverse>
        <CardHeader>
         Send Sms EOD Notification!!
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
                invalid={error.errors?.response?.data?.name ? true: false}
                />
                <FormFeedback>
                {error.errors?.response?.data?.name}
                </FormFeedback>
            </FormGroup>

             {/* Email Field */}
                      {/* <FormGroup>
                <Label for="contactNum">Enter contactNum</Label>
                <Input
                type="text"
                placeholder="Enter here"
                id="contactNum"
                onChange={(e)=>handleChange(e,'contactNum')}
                value={data.contactNum}
                invalid={error.errors?.response?.data?.contactNum ? true: false}
                />
                <FormFeedback>
                {error.errors?.response?.data?.contactNum}
                </FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for="eodMessage">Enter Message</Label>
                <Input
                type="text"
                placeholder="Enter here"
                id="eodMessage"
                onChange={(e)=>handleChange(e,'eodMessage')}
                value={data.eodMessage}
                invalid={error.errors?.response?.data?.eodMessage ? true: false}
                />
                <FormFeedback>
                {error.errors?.response?.data?.eodMessage}
                </FormFeedback>
            </FormGroup>
            */}
            <Container className="text-center">

                <Button color="light" outline>Send SMS</Button>
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

export default SendSms; 