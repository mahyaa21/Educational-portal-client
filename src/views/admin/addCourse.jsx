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
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import { getTeachers } from '../../services/apiClient';
import { withApiClient } from '../../services/withApiCLient';
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

class addCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: '',
            teacher: '',
            teachers: [],
            courses: [],
            errors: {}
        }
    }

    componentDidMount() {
        this.props.apiClient.getTeachers()
            .then(res => {
                console.log(res)
                this.setState({
                    teachers:[...res]
                })
            }).catch(err => {
                console.log(err)
            });
        
    }
    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    SubmiHandler = (e) => {
        e.preventDefault();
        let course = {
            name: this.state.name,
            teacher: this.state.teacher
        }
        console.log('cousre',course)
        this.props.apiClient.saveCourse(course)
            .then(res => {
                console.log(res)
            alert('دوره با موفقیت ثبت شد')
            })
            .catch(err => {
                console.log(err);
        })
    }
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="8" className=" m-auto">
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h5">ثبت دوره جدید</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.SubmiHandler}>
                                        <Row className="mt-2">
                                        <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label htmlfor="exampleSelect">مدرس دوره</label>
                                                    <Input type="select" name="teacher" id="exampleSelect" onChange={this.onChangeHandler}>
                                                        <option>نام مدرس را انتخاب کنید</option>
                                                        {this.state.teachers.map((teacher)=>{
                                                            return<option key={teacher.id} value={teacher._id}> {teacher.name} </option>
                                                        })}
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="6">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">
                                                        نام دوره
                                                    </label>
                                                    <Input placeholder="نام دوره" type="text" name="name" value={this.state.name} onChange={this.onChangeHandler}/>
                                                </FormGroup>
                                            </Col>
                                            

                                        </Row>
                                        <Row className="mt-2">
                                            <div className="update mr-auto ml-3">
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                   ثبت دوره
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

// RegisterCourse.propTypes = {
//     registerCourse: PropTypes.func.isRequired,
//    // resStatus: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     errors: state.errors,
//     courseStatus: state.courseStatus
// });

export default withApiClient(withRouter(addCourse))
