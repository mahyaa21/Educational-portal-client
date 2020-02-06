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

class courseInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            register: [],
            unregister: [],
            RegcheckBoxStatus: true,
            unRegcheckBoxStatus:false
        }
    }

    finishCourse = (id) => {
        this.props.apiClient.finishCourse(id)
            .then(res => {
                alert('ویرایش انجام شد');
                this.props.getcourse()
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
                        <Col md="12">
                            <Card>
                                <CardBody>
                                    <ul className="course-info">
                                        <li>نام دوره : <span>{this.props.course.name}</span></li>
                                        <li>نام مدرس : <span>{this.props.teacher.name}</span></li>
                                        <li>تاریخ برگزاری : <span>{this.props.course.date}</span></li>
                                        <li><Button color="danger" onClick={()=>this.finishCourse(this.props.course._id)}>اتمام دوره</Button></li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" style={{ textAlign: 'right' }}>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">لیست کاروندان</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary">
                                            <tr>
                                                <th>نام</th>
                                                <th>ایمیل</th>   
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.members && this.props.members.map(member => {
                                                return <tr>
                                                    <td>{member.name}</td>
                                                    <td>{member.email}</td>
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

export default withApiClient(courseInfo);
