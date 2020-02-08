import Axios from 'axios';

export const apiClient = {

    //Get all users
    getUsers() {
        return new Promise((resolve,reject) => {
            Axios.get('http://localhost:3000/api/users')
                .then(res => res)
                .then(resolve)
                .catch(err => err)
        })
    },

    //delete user
    deleteUser(id) {
        return new Promise((resolve,reject) => {
            Axios.get(`http://localhost:3000/api/users/delete/${id}`)
                .then(res => res)
                .then(resolve)
                .catch(err => err)
        })
    },

    //GET teacher list
    getTeachers() {
        return new Promise((resolve,reject) => {
            Axios.get('http://localhost:3000/api/users/teacher')
                .then(res => res.data)
                .then(resolve)
                .catch(err => err)

        })
    },

    //save course
    saveCourse(course) {
        return new Promise((resolve,reject) => {
            Axios('http://localhost:3000/api/users/courses/create',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(course)
            })
                .then(res => res)
                .then(resolve)
                .catch(err => err)
        })
    },

    //GET course list
    getCourses() {
        return new Promise((resolve,reject) => {
            Axios.get('http://localhost:3000/api/users/courses-user/get-courses')
                .then(res => res.data)
                .then(resolve)
                .catch(err => err)

        })
    },

    //finish cours 
    finishCourse(id) {
        return new Promise((resolve,reject) => {
            Axios.get(`http://localhost:3000/api/users/courses/finish/${id}`)
                .then(res => res.data)
                .then(resolve)
                .catch(err => err)

        })
    },
    //GET students of specific course
    getStudentCourse(courseId) {

        return new Promise((resolve,reject) => {
            Axios.get(`http://localhost:3000/api/users/courses-user/studentlist/${courseId}`)
                .then(res => res.data)
                .then(resolve)
                .catch(err => err)

        })
    },
    //get course teacher
    getCourseTeacher(courseId) {
        return new Promise((resolve,reject) => {
            Axios.get(`http://localhost:3000/api/users/courses/getteacher/${courseId}`)
                .then(res => res.data)
                .then(resolve)
                .catch(err => err)

        })
    },
    ////get student is not member of course
    getNotStudentCourse(courseId) {

        return new Promise((resolve,reject) => {
            Axios.get(`http://localhost:3000/api/users/courses-user/notstudentlist/${courseId}`)
                .then(res => res.data)
                .then(resolve)
                .catch(err => err)

        })
    },
    ////get homeworks
    GetHomeWorks(TeacherId) {

        return new Promise((resolve,reject) => {
            Axios.get(`http://localhost:3000/api/users/homeworks`)
                .then(res => res.data)
                .then(resolve)
                .catch(err => err)

        })
    },

    //rgister course user
    RegisterCourseUser(courseUser) {
        return new Promise((resolve,reject) => {
            Axios(`http://localhost:3000/api/users/courses-user/create`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(courseUser)
            })
                .then(res => res)
                .then(resolve)
                .catch(err => err)

        })
    },

    //upload home work 
    UploadHomeWork(homework) {
        console.log('pppp')
        return new Promise((resolve,reject) => {

            Axios(`http://localhost:3000/api/users/upload`,{
                method: 'POST',
                headers: {
                    // fileName: homework.name,
                    // user: id,
                    // course: course
                    'Content-Type': 'application/json'
                },
                data: homework
            })
                .then(res => { return res })
                .then(resolve)
                .catch(err => err)
        })

    },

    ///get teacher course   
    getTeacherCourses(teacherId) {
        return new Promise((resolve,reject) => {
            Axios(`http://localhost:3000/api/users/courses/teacher/courses/${teacherId}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',

                },

            })
                .then(res => res)
                .then(resolve)
                .catch(err => err)

        })
    },
    //GetHomeWorksCourse
    GetHomeWorksCourse(coursename,teacherId) {

        return new Promise((resolve,reject) => {

            Axios(`http://localhost:3000/api/users/homeworks/gethomeworks/${teacherId}`,{
                method: 'GET',
                headers: {
                    // 'Content-Type': 'application/json',
                    course: coursename
                },

            })
                .then(res => res)
                .then(resolve)
                .catch(err => err)

        })
    }


}   