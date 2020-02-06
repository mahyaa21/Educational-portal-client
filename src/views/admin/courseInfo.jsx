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
    onChangeHandler = (e,member) => {
        e.preventDefault()
        
        console.log(e)
        console.log(member);
        if (e.target.name === 'unregisterMembers') {
            // const { register } = this.state;
            // e.target.checked = true;
            // this.setState({
            //     register: [...register,member]
            // })
        } else if (e.target.name === 'registerMembers') {
            // const { unregister } = this.state;
            // e.target.checked = false;
            // this.setState({
            //     unregister: [...unregister,member]
            // })
        }
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
                                        <li><Button color="danger">اتمام دوره</Button></li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
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
                                                <th>City</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.members.map(member => {
                                                return <tr>
                                                    <td>{member.name}</td>
                                                    <td>{member.email}</td>
                                                    <td><input type="checkbox" name="registerMembers" onChange={(e) => this.onChangeHandler(e,member)}  checked={member.enrolledClass== 'name'} /></td>
                                                </tr>
                                            })}
                                            {this.props.NotMember.map(member => {
                                                return <tr>
                                                <td>{member.name}</td>
                                                <td>{member.email}</td>
                                                <td><input type="checkbox" name="unregisterMembers" onChange={(e)=>this.onChangeHandler(e,member)}  /></td>
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

export default courseInfo;
