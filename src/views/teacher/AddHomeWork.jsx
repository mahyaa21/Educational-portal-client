import React from "react";
// reactstrap components
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Row,
  Col,
  Input
} from "reactstrap";

class AddHomeWork extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      selectedFile: null,
    }
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
    //  this.props.AddHomeWorkToggle();
  };
  handlesubmite = (e) => {
    e.preventDefault();
    let homeWork = {
      name: this.state.name,
      data: this.state.data
    }

    this.props.UploadTeacherHomeWork(homeWork);
    
  }
  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  FileonChangeHandler = event => {
    event.preventDefault();
    console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })

  }

  UploadClockHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', this.state.selectedFile)

    this.setState({
      name: this.state.name,
      data: data
    })
      
    
  }

  render() {
    return (

      <Modal isOpen={this.props.modal}>
        <ModalHeader>ثبت تکلیف جدید</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handlesubmite}>
            <Row>
              <Col md="12">
                <FormGroup>
                  <label>  نام تکلیف</label>
                  <Input name="name" placeholder="نام تکلیف" type="text" onChange={this.handleInputChange} />
                  {/* {this.state.errors.email && (<div className="validation-text">{this.state.errors.email}</div>)} */}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <label> آپلود فایل</label>
                  {/* {this.state.errors.email && (<div className="validation-text">{this.state.errors.email}</div>)} */}
                  <Input type="file" name="file" onChange={this.FileonChangeHandler} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <button type='button' className="btn btn-success btn-block" onClick={this.UploadClockHandler }>آپلود</button>
                </FormGroup>
              </Col>
            </Row>
            <Button  type='submit' color='success'>ثبت</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button type='button'  onClick={this.props.AddHomeWorkToggle}>بستن</Button>
        </ModalFooter>
      </Modal>

    );
  }


}

export default AddHomeWork;