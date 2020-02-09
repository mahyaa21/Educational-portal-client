import React,{ Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import download from 'downloadjs';

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
class DownloadHomework extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //selectedFile: null,
            homeWorks: [],
        }

    }

    componentWillMount() {

        axios.get('http://localhost:3000/api/users/homeworks/course',
            {
                headers: {
                    id: this.props.auth.user.course,
                }
            }
        )
            .then(res => this.setState({ homeWorks: [...res.data] }))
            .catch(err => {
                console.log(err);
            })

    }

    GetImageFile = (address) => {
        const { images } = this.state;
        axios({
            url: `http://localhost:3000/api/users/showimage/${address}`,
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const image = { name: window.URL.createObjectURL(new Blob([response.data])),address: address };
            this.setState({
                images: [...images,image]
            })

        });

    }
    OnCLickDownloader = (address) => {
        axios.get(`http://localhost:3000/api/users/download/${address}`).then(res => {
            console.log('downloading');
        })
    }

    render() {
        const { homeWorks } = this.state;
        console.log(homeWorks);
        return <>
            <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                    <CardHeader>
                  <CardTitle tag="h4">دانلود تکالیف</CardTitle>
                </CardHeader>
                        <CardBody style={{ direction:'rtl', textAlign:'right' }}>
                            <Table responsive >
                                <thead>
                                    <tr>
                                        <th>تکالیف</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {homeWorks.map(homeWork => {
                                        return <tr key={homeWork.id}>

                                            <td>
                                                {homeWork.name}</td>
                                            <td><button
                                                type="button"
                                                onClick={async () => {
                                                    const res = await fetch('http://localhost:3000/api/users/download',{
                                                        headers: {
                                                            address: homeWork.name,
                                                        }
                                                    });
                                                    const blob = await res.blob();
                                                    download(blob,homeWork.name);
                                                    // filedownload(blob,'test.rar')
                                                }}
                                            >Download</button></td>

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
            }
          }
          
          
          
          
DownloadHomework.propTypes = {
                //TeacherUser: PropTypes.func.isRequired,
                auth: PropTypes.object.isRequired
          };
          
const mapStateToProps = state => ({
                errors: state.errors,
            auth: state.auth
          });
          
export default connect(mapStateToProps)(withRouter(DownloadHomework))