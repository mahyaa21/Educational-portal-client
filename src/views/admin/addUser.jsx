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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../redux/_actions/authentication';
import { withApiClient } from '../../services/withApiCLient';
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
    Col,
    Collapse,
    Table
} from "reactstrap";

class addUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password_confirm: '',
            role: '',
            course:'',
            users: [],
            courses:[],
            errors: {}

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
        this.getAllUser();
        this.props.apiClient.getCourses()
            .then(res => {
                this.setState({
                courses:[...res]
                })
                  
            })
            .catch(err => {
                console.log(err);
        })
    }

    getAllUser = () => {
        this.props.apiClient.getUsers()
        .then(res => {
            this.setState({
            users: [...res.data]
        })
        })
        .catch(err => {
            console.log(err);
    })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { users } = this.state;
        const user = {
            name: this.state.firstName + " " + this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
            role: this.state.role,
            course: this.state.course
        }
        const courseUser = {
            student: this.state.firstName + " " + this.state.lastName,
            course: this.state.course
        }
        
        this.props.registerUser(user,this.props.history);
        this.getAllUser()
        if (this.state.role === 'کاروند') {
            this.props.apiClient.RegisterCourseUser(courseUser)
                .then(res => {
                
            alert('کاربر بh موفقیت ثبت شد')
            })
        .catch (err=> {
            console.log(err)
        })
        }
       
        // this.setState({ users: [...users,user] });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    deleteUser = (id) => {
        this.props.apiClient.deleteUser(id)
            .then(res => {
                if (res.status === 200) {
                    console.log('کاربر با موفقیت حذف شد');
                    this.getAllUser();
            }
            })
            .catch(err => {
                console.log(err);
        })
    }

    Addedusers = () => {
        const { users } = this.state;
        return <><Col md="8" className='m-auto' style={{ textAlign: 'right' }}>
        <Card>
          <CardHeader>
            <CardTitle tag="h4">کاربران ثبت نام شده</CardTitle>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  <th>اسم</th>
                  <th>ایمیل</th>
                  <th>سمت</th>
                </tr>
              </thead>
              <tbody>
                  
                            {this.state.users.map(user => {
                                return <tr><td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td><Button color='danger' onClick={()=>this.deleteUser(user._id)}>حذف</Button></td>
                                </tr>
                            })}
                
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col></>
    }

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
                                    <Form onSubmit={this.handleSubmit}>

                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label>نام خانوادگی</label>
                                                    <Input
                                                        name="lastName"
                                                        placeholder="نام خانوادگی"
                                                        type="text"
                                                        defaultValue={this.state.lastName}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1 " md="6">
                                                <FormGroup>
                                                    <label>نام</label>
                                                    <Input
                                                        name="firstName"
                                                        placeholder="نام"
                                                        type="text"
                                                        defaultValue={this.state.firstName}
                                                        onChange={this.handleInputChange}
                                                    />
                                                    {this.state.errors.name && (<div className="validation-text">{this.state.errors.name}</div>)}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label>
                                                        آدرس ایمیل
                                                    </label>
                                                    <Input name="email" placeholder="ایمیل" type="email" defaultValue={this.state.email} onChange={this.handleInputChange} />
                                                    {this.state.errors.email && (<div className="validation-text">{this.state.errors.email}</div>)}
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="6">
                                                <FormGroup>
                                                    <label>نوع کاربر</label>
                                                    <Input type="select" name="role" id="role" defaultValue={this.state.role} onChange={this.handleInputChange}>

                                                        <option>--انتخاب سمت--</option>
                                                        <option>مدیر</option>
                                                        <option>استاد</option>
                                                        <option>کاروند</option>
                                                    </Input>

                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='12'>  {(this.state.role === 'کاروند') ?
                                                <Collapse isOpen={true}>
                                                    <FormGroup>
                                                        <label>انتخاب نام دوره</label>
                                                        <Input type="select" name="course" id="course" onChange={this.handleInputChange}>

                                                            <option>--انتخاب سمت--</option>
                                                            {this.state.courses.map(course => {
                                                                return <option value={course.id}>{course.name}</option>
                                                            })}
                                                        </Input>
                                                    </FormGroup>
                                                </Collapse> : ''}</Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label>
                                                        تکرار رمز عبور
                                                    </label>
                                                    <Input name="password_confirm" placeholder="تکرار رمز عبور" type="password" defaultValue={this.state.password_confirm} onChange={this.handleInputChange} />
                                                    {this.state.errors.password_confirm && (<div className="validation-text">{this.state.errors.password_confirm}</div>)}
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="6">
                                                <FormGroup>
                                                    <label>
                                                        رمز عبور
                                                    </label>
                                                    <Input name="password" placeholder="رمز عبور" type="password" defaultValue={this.state.password} onChange={this.handleInputChange} />
                                                    {this.state.errors.password && (<div className="validation-text">{this.state.errors.password}</div>)}
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
                    <Row>
                        {this.Addedusers()}
                    </Row>
                </div>
            </>
        );
    }
}

addUser.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth,
    courseStatus: state.courseStatus
});

export default connect(mapStateToProps,{ registerUser })(withApiClient(withRouter(addUser)));
