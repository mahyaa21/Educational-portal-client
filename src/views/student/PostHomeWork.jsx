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
Col,
  Table
} from "reactstrap";
import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withApiClient } from '../../services/withApiCLient';
import moment from 'jalali-moment';
// import './teacher.scss';

class PostHomeWork extends Component {
constructor(props) {
  super(props);
  this.state = {
    selectedFile: null,
    homeworks: [],
    studentCourse: {}
  }

}

onChangeHandler = event => {
  
  console.log(event.target.files[0])
  this.setState({
    selectedFile: event.target.files[0],
    loaded: 0,
  })

}



  onClickHandler = () => {

    const { selectedFile } = this.state;
    let homework = {};
      // debugger
      const data = new FormData();
      data.append('file',this.state.selectedFile);
      homework = {
        teacherId: this.props.auth.user.id,
        course: this.props.auth.user.course,  
        name: this.state.selectedFile.name,
    }
          console.log('homework',homework);
    
            this.props.apiClient.UploadHomeWork(homework,data)
                .then(res => {
                  alert('با موفقیت آپلود شد')
                  this.setState({
                    homeworks: [...this.state.homeworks,homework]
                  })
                })
                .then(err => {
                console.log(err)
            })

  }
componentDidMount() {
  if (this.props.auth.isAuthenticated) {
    // this.props.history.push('/');
  } else {
    this.props.history.push('/');
    alert('not authenticated')

  }

}

componentWillMount(){

  console.log('id:' + this.props.auth.user.id)
  const course = {
    course: this.props.auth.user.course
  }
  axios.get('http://localhost:3000/api/users/homeworks/student',
     {
      headers: {
         id: this.props.auth.user.id,
        
       },
    }
  ).then(res => {
    console.log('homeworkssss:' + res)
      this.setState({homeworks: [...res.data]})
  }).catch(err=>{
    console.log("homeworks request is not res bcz"+ err)
  })
   console.log('homeworks:' + this.state.homeworks)
      
    axios.get(`http://localhost:3000/api/users/courses/getcourse/name/${course.course}`)
      .then(res => {
        this.setState({
          studentCourse: res.data
        })
      })
      .catch(err => {
        console.log(err);
  })
  
}

showHomeworks = () =>{
  const {homeworks} = this.state;
return <><Row style={{ textAlign: 'right' }}>
                <Col md="6" className="m-auto">
    <Card>
      <CardHeader>
        <CardTitle tag="h5">تکالیف آپلود شده</CardTitle>
      </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
              <th>نام</th>
              <th>تاریخ</th>
                    </tr>
                  </thead>
                  <tbody>
                  {homeworks.map(homework=>{
                  return <tr key={homework.id}>
                    <td>{homework.name}</td>
                    <td>{homework.date && moment(homework.date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</td>
                  </tr>
              })}              
                  </tbody>
                </Table>
              </CardBody>
            </Card>
  </Col>
  </Row>

  </>
}



render() {

  return <div className='content'>

    <Row>
      <Col sm="6" className="m-auto">
        <Card>
          <CardHeader style={{ textAlign: 'right' }}>
            <CardTitle tag="h5">{this.state.studentCourse.name}</CardTitle>
            <CardTitle tag="p">.تکالیف خود را آپلود کنید</CardTitle>
            </CardHeader>
          <CardBody>
            <input type="file" style={{ width: '50%', }} name="file" onChange={this.onChangeHandler} />
            <button type="button" style={{ width: '50%',}} className="btn btn-success btn-block" onClick={this.onClickHandler}>آپلود</button>
            </CardBody>
          </Card>
    </Col>
    </Row>
    {this.state.homeworks && this.showHomeworks()}

  </div>
}
}




PostHomeWork.propTypes = {
auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
errors: state.errors,
auth: state.auth
});

export default connect(mapStateToProps)(withApiClient(withRouter(PostHomeWork)));