import React from "react";
// reactstrap components
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,

  } from "reactstrap";

class PostedHomeWork extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal:false
        }
    }
    // const {
    //   buttonLabel,
    //   className
    // } = props;
  

    render() {
        return (

            <Modal>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" >Do Something</Button>{' '}
                <Button color="secondary" >Cancel</Button>
              </ModalFooter>
            </Modal>
    
        );
    }
  
  
  }
  
  export default PostedHomeWork;