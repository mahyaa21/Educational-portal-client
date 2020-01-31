import Axios from 'axios';

export const apiClient = {

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
    }

}   