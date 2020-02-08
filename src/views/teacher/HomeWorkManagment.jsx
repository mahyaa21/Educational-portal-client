// /*!

// =========================================================
// * Paper Dashboard React - v1.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/paper-dashboard-react
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)

// * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";
// import { withApiClient } from '../../services/withApiCLient';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// // reactstrap components
// import {
//     Button,
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     CardTitle,
//     FormGroup,
//     Form,
//     Input,
//     Row,
//     Col
// } from "reactstrap";
// import AddHomeWork from './AddHomeWork';
// import PostedHomeWork from './PostedHomeWork';
// class HomeWorkManagment extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             homeworks: [],
//             AddHomework: false,
//             showPostedHomework: false,
//             course: this.props.course
//         }
//     }
//     componentDidMount() {
//         this.props.apiClient.GetHomeWorksCourse(this.state.course,this.props.auth.user.id)
//             .then(res => {
//                 console.log('res',res)
//                 this.setState({
//                     homeworks: [...res.data]
//                 })
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     DownloadHomWork = (id) => {
//         //request to download home work
//     }
//     UploadTeacherHomeWork = (homework) => {
//         console.log('oooooo',this.props)
//         this.props.apiClient.UploadHomeWork(homework,this.props.auth.user.id,this.state.course)
//             .then(res => {
//                 console.log('in then', res)
//             })
//             .catch(err => {
//                 console.log('err', err)
//             })
//     }
//     AddHomeWorkToggle = (e) => {
//         e.preventDefault();
//         this.setState({
//             AddHomework: !this.state.AddHomework
//         })
//     }
//     PostedHomeWorkToggle = (e) => {
//         e.preventDefault();
//         this.setState({
//             showPostedHomework: !this.state.showPostedHomework,

//         })
//     }

//     render() {
//         return (
//             <>
//                 <div className="content">
//                     {this.state.homeworks.map((homework) => {
//                         return <Row>
//                             <Col md="8" className='m-auto'>
//                                 <Card className="card-user p-2">
//                                     <CardHeader>
//                                         <CardTitle tag="h5">{homework.name}</CardTitle>
//                                     </CardHeader>
//                                     <CardBody className="homwork-card-body">
//                                         <Row><Button onClick={() => this.DownloadHomWork(homework.id)}>دانلود</Button></Row>
//                                         <Row>{(this.state.showPostedHomework) ? <PostedHomeWork /> : <Button onClick={this.PostedHomeWorkToggle}> لیست  تکالیف ارسالی</Button>}</Row>
//                                     </CardBody>
//                                 </Card>
//                             </Col>
//                         </Row>
//                     })}
//                     <Row>
//                         <Col md="3">{(this.state.AddHomework) ?
//                             <AddHomeWork AddHomeWorkToggle={this.AddHomeWorkToggle} modal={this.state.AddHomework} UploadTeacherHomeWork={this.UploadTeacherHomeWork} /> :
//                             <Button onClick={this.AddHomeWorkToggle}>
//                                 <span className='mr-1'>
//                                     اضافه کردن تکلیف جدید
//                                 </span>
//                                 <i className="nc-icon nc-simple-add" id="exitTooltip" />
//                             </Button>}
//                         </Col>
//                     </Row>
//                 </div>
//             </>
//         );
//     }
// }
// const mapStateToProps = state => ({
//     errors: state.errors,
//     auth: state.auth,
//     courseStatus: state.courseStatus
// });

// export default connect(mapStateToProps)(withApiClient(withRouter(HomeWorkManagment)));


import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withApiClient } from '../../services/withApiCLient';
// import './teacher.scss';

class HomeWorkManagment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      homeworks: []  
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
        // debugger
        const data = new FormData();
        data.append('file',this.state.selectedFile);
        let homework = {
            teacherId: this.props.auth.user.id,
            course: this.props.course,
            name: this.state.selectedFile.name,
            data: data
        }
        for (var key of data.entries()) {
			console.log(key[0] + ', ' + key[1])
		}
        this.props.apiClient.UploadHomeWork(homework)
            .then(res => {
                alert('با موفقیت آپلود شد')
            })
            .then(err => {
            console.log(err)
        })
        // axios.post("/api/users/upload", data , {
        //     // receive two    parameter endpoint url ,form data 
        //         headers: {
        //             fileName: selectedFile.name,
        //             user: this.props.auth.user.id
        //         }    
        // })
        //     .then(res => { // then print response status

        //         if (res.status === 'Ok'){
        //             this.setState({
        //                 result: true
        //             })
        //         }
        //         console.log(res.statusText)
        //         alert('upload successfully!');
        //     })

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

    axios.get('/api/users/homeworks',
       {
        headers: {
          id: this.props.auth.user.id,
        }
      }
    ).then(res => {
      console.log('homeworkssss:' + res)
        this.setState({homeworks: [...res.data]})
    }).catch(err=>{
      console.log("homeworks request is not res bcz"+ err)
    })
     console.log('homeworks:' + this.state.homeworks)
      
}

showHomeworks = () =>{
    const {homeworks} = this.state;
    return <>
         <table>
          <tbody>
                <tr>
                    <th>HomeWorks added</th>
                </tr>

                {homeworks.map(homework=>{
                    return <tr key={homework.id}>
                        <td>{homework.name}</td>
                    </tr>
                })}
                
          
          
          </tbody>
          </table>
    </>
}


 
  render() {
 
    return <div className='Home-work_container'>

      <input type="file" style={{ width: '70%', }} name="file" onChange={this.onChangeHandler} />
      <button type="button" style={{ width: '70%', }} className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>

      {/* {this.showHomeworks()} */}

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