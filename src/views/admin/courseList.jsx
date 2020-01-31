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
import { withApiClient } from '../../services/withApiCLient';
import { withRouter } from 'react-router-dom';
import CourseInfo from './courseInfo';
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    Button
} from "reactstrap";

class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: '',
            course:{},
            courses: [],
            courseMembers: [],
            NotMember:[]
        }
    }
    componentDidMount() {

        this.props.apiClient.getCourses()
            .then(res => {
                this.setState({
                    courses: [...res]
                })
            })
            .catch(err => {
                console.log(err)
            })

    }
    showMembers = (course) => {
        this.setState({
            date: course.date,
            course: course
        })
        this.props.apiClient.getNotStudentCourse(course._id)
            .then(res => {
                this.setState({
                    NotMember: res
                })
            })
            .catch(err => {
            console.log(err)
        })
        this.props.apiClient.getCourseTeacher(course._id)
            .then(res => {
                this.setState({
                    teacher: res
                })
            })
            .catch(err => {
                console.log(err)
            })
        this.props.apiClient.getStudentCourse(course._id)
            .then(res => {
                this.setState({
                    courseMembers: [...res]
            })
            })
            .catch(err => {
            console.log(err)
        })
   }


    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col><CourseInfo members={this.state.courseMembers} NotMember={this.state.NotMember} teacher={this.state.teacher} date={this.state.date} course={this.state.course}/></Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">لیست دوره ها</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary">
                                            <tr>
                                                <th>نام دوره</th>
                                                <th>وضعیت</th>
                                                <th>تاریخ شروع برگزاری</th>
                                                <th>نمایش اعضا</th>
                                                <th>ویرایش</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {this.state.courses.map(course => {
                                                return <tr>
                                                    <td>{course.name}</td>
                                                    <td>{(course.status == 'I') ? "درحال برگزاری" : "به پایان رسیده"}</td>
                                                    <td>{course.date}</td>
                                                    <td><Button color="primary" onClick={()=>{ this.showMembers(course) }}>اعضا</Button></td>
                                                    <td><Button color="warning">ویرایش</Button></td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default withApiClient(withRouter(CourseList));