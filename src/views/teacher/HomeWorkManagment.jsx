
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
import SearchCourse from './SearchCourse';
// import './teacher.scss';

class HomeWorkManagment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      homeworks: [],
      courseId: '',
      selectedCourse: ''
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
      const { course } = this.props;
        // debugger
        const data = new FormData();
        data.append('file',this.state.selectedFile);
      

      let courseId = '';
      let homework = {};
    

    homework = {
      teacherId: this.props.auth.user.id,
      course: this.state.courseId,
      name: this.state.selectedFile.name,
}
      console.log('homework',homework);

      this.props.apiClient.UploadHomeWork(homework,data)
          .then(res => {
            this.getHomewoks();
              alert('با موفقیت آپلود شد');

            })
            .then(err => {
            console.log(err)
        })
        

  }
  
  setSelectedCourse = (course) => {
    this.setState({
      selectedCourse: course
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

      submitCourse = (e) => {
        e.preventDefault()
          this.getHomewoks()
          let selectedCourse = {
              course: this.state.selectedCourse
          }
                axios.post('http://localhost:3000/api/users/courses/getcourse/id',selectedCourse
                ).then(res => {
                  this.setState({
                   courseId: res.data
                 })
                }).catch(err=>{
                  console.log("homeworks request is not res bcz"+ err)
                })
        
  }
  
  getHomewoks = () => {
    const course = {
        course: this.state.selectedCourse
      }
      axios.post('http://localhost:3000/api/users/homeworks',course,
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
}
 

  componentWillMount(){

    // this.getHomewoks();
 
      
}

  // getHomewoks = () => {
   
  // }

showHomeworks = () =>{
    const {homeworks} = this.state;
  return <>
    <Row style={{ textAlign: 'right' }}>
                  <Col md="12">
      <Card>
        <CardHeader><CardTitle tag="h5">
          تکالیف آپلود شده</CardTitle></CardHeader>
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
      <SearchCourse setSelectedcourse={this.setSelectedCourse} submitCourse={this.submitCourse}/>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardBody>
      <input type="file"  name="file" onChange={this.onChangeHandler} />
      <button type="button"  className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
      </CardBody>
      </Card>
        </Col>
      </Row>
   
      {this.state.homeworks && this.showHomeworks()}
     
    </div>
  }
}




HomeWorkManagment.propTypes = {
  //TeacherUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(mapStateToProps)(withApiClient(withRouter(HomeWorkManagment)));