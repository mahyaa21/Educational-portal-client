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
import { loginUser } from '../../redux/_actions/authentication';
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

class addUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            users: [],
            errors: {}
            
        }
    }

    handleInputChange = (e) => {
        console.log(e)
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { users } = this.state;
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.setState({ users: [...users, user] });
        this.props.loginUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        return (
            <div className='login-page'>
                <div className="content-center" >
                    <Row>
                        <Col md="4" sm="8" className=" m-auto">
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h5">ورود کاربر</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit}>

                                        <Row>
                                            <Col  md="12">
                                                <FormGroup>
                                                    <label>
                                                        آدرس ایمیل
                                                    </label>
                                                    <Input name="email" placeholder="ایمیل" type="email" defaultValue={this.state.email} onChange={this.handleInputChange} />
                                                    {this.state.errors.email && (<div className="validation-text">{this.state.errors.email}</div>)}
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                        <Row>
                                        <Col  md="12">
                                                <FormGroup>
                                                    <label>
                                                        رمز عبور
                                                    </label>
                                                    <Input name="password" placeholder="رمز عبور" type="password" defaultValue={this.state.password} onChange={this.handleInputChange}/>
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
                                                   ورود
                        </Button>
                                            </div>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
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

export default connect(mapStateToProps, { loginUser })(withRouter(addUser))
