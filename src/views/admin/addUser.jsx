/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";

class addUser extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="8" className=" m-auto">
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h5">ثبت کاربر جدید</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>

                                        <Row>
                                        <Col className="pr-1" md="4">
                                                <FormGroup>
                                                    <label>نام خانوادگی</label>
                                                    <Input
                                                        placeholder="نام خانوادگی"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1 pr-1" md="4">
                                                <FormGroup>
                                                    <label>نام</label>
                                                    <Input
                                                        placeholder="نام"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            
                                            <Col className="pl-1" md="4">
                                                <FormGroup>
                                                    <label>نام کاربری</label>
                                                    <Input
                                                        
                                                        placeholder="نام کاربری"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">
                                                        آدرس ایمیل
                                                    </label>
                                                    <Input placeholder="ایمیل" type="email" />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="6">
                                                <FormGroup>
                                                    <label htmlfor="exampleSelect">نوع کاربر</label>
                                                    <Input type="select" name="select" id="exampleSelect">
                                                        <option>مدیر</option>
                                                        <option>استاد</option>
                                                        <option>کاروند</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <div className="update ml-auto mr-auto">
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                   ثبت کاربر
                        </Button>
                                            </div>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default addUser;
