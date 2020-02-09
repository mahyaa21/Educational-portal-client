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
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withApiClient } from '../../services/withApiCLient';
import { connect } from 'react-redux';

import HomeWorkManagment from './HomeWorkManagment';
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";

class SearchDownloadCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TeacherCourses: [],
            selectedCourse: ''
        }
    }

    handleInputChange = (e) => {
        console.log(e.target)
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {

        this.props.apiClient.getTeacherCourses(this.props.auth.user.id)
            .then(res => {
                this.setState({
                    TeacherCourses: [...res.data]
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
         
                <div className="content" >
                     <Row className='m-0'>
                    <Col md="4" sm="8" className=" m-auto">
                        <Form onSubmit={this.props.getHomeworks}>
                            <FormGroup>
                                <label>انتخاب نام دوره</label>
                                <Input type="select" name="course" id="course" onChange={this.props.chooseCourse}>

                                    <option>--انتخاب دوره--</option>
                                    {this.state.TeacherCourses.map(course => {
                                        return <option value={course.id}>{course.name}</option>
                                    })}
                                </Input>
                            </FormGroup>
                            <Button type='submit'>جستجو</Button>
                            </Form>
                        </Col>
                    </Row>
                
                </div>
           
        );
    }
}

SearchDownloadCourse.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth,
    courseStatus: state.courseStatus
});

export default connect(mapStateToProps)(withApiClient(withRouter(SearchDownloadCourse)));
