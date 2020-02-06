
import React from 'react';
import { Router,Route,Switch,Redirect,withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';

import AdminLayout from "layouts/Admin.jsx";
import StudentLayout from 'layouts/Student';
import TeacherLayout from 'layouts/Teacher';
import LoginPage from 'views/login/login';

const hist = createBrowserHistory();

function App() {
   
    return <>
        <Router history={hist}>
            <Switch>

                <Route path="/login" render={props => <LoginPage {...props} />} />
                    {/* <Redirect to="/login" /> */}
                <Route path="/admin" render={props => <AdminLayout {...props} />} />
                {/* <Redirect to="/admin/dashboard" /> */}

                <Route path="/student" render={props => <StudentLayout {...props} />} />
                {/* <Redirect to="/student/dashboard" /> */}

                <Route path="/teacher" render={props => <TeacherLayout {...props} />} />
                {/* <Redirect to="/teacher/dashboard" /> */}
            </Switch>
        </Router>
    </>

}
const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth,
    courseStatus: state.courseStatus
});
export default connect(mapStateToProps)(withRouter(App));

