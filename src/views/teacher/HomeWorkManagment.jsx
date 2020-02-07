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
import { connect } from 'react-redux';
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
import AddHomeWork from './AddHomeWork';
import PostedHomeWork from './PostedHomeWork';
class HomeWorkManagment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeworks: [],
            AddHomework: false,
            showPostedHomework: false,
            
        }
    }
    componentWillMount() {
        this.props.apiClient.GetHomeWorks(this.props.auth.user.id)
            .then(res => {
                this.setState({
                    homeworks:[...res.data]
                    })
            })
            .catch(err => {
                console.log(err)
        })
    }

    DownloadHomWork = (id)=>{
        //request to download home work
    }
    UploadTeacherHomeWork = (homework) => {
      debugger
        this.props.apiClient.UploadHomeWork(homework,this.props.auth.user.id)
            .then(res => {
                alert('تکلیف با موفقیت ثبت شد');
            })
            .catch(err => {
            console.log(err)
        })
    }
    AddHomeWorkToggle = (e) => {
        e.preventDefault();
        this.setState({
            AddHomework:!this.state.AddHomework
        })
    }
    PostedHomeWorkToggle = (e) => {
        e.preventDefault();
        this.setState({
            showPostedHomework: !this.state.showPostedHomework,
           
        })
    }

  render() {
    return (
      <>
        <div className="content">
                {this.state.homeworks.map((homework) => {
            return<Row>
            <Col md="8" className='m-auto'>
              <Card className="card-user p-2">
                <CardHeader>
                            <CardTitle tag="h5">{homework.name}</CardTitle>
                </CardHeader>
                <CardBody className="homwork-card-body">
                    <Row><Button onClick={()=>this.DownloadHomWork(homework.id)}>دانلود</Button></Row>
                    <Row>{(this.state.showPostedHomework )? <PostedHomeWork/> :<Button onClick={this.PostedHomeWorkToggle}> لیست  تکالیف ارسالی</Button>}</Row>
                </CardBody>
              </Card>
            </Col>
                    </Row>
                })}
                <Row>
                    <Col md="3">{(this.state.AddHomework) ? <AddHomeWork AddHomeWorkToggle={this.AddHomeWorkToggle} modal={this.state.AddHomework} UploadTeacherHomeWork={this.UploadTeacherHomeWork}/> : <Button onClick={this.AddHomeWorkToggle}> <span className='mr-1'>اضافه کردن تکلیف جدید</span><i className="nc-icon nc-simple-add" id="exitTooltip" /></Button>}</Col>
                </Row>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth,
    courseStatus: state.courseStatus
});

export default connect(mapStateToProps)(withApiClient(withRouter(HomeWorkManagment)));
