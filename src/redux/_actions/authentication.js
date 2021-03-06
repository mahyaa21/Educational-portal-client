import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER , SET_COURSE } from './type';
import setAuthToken from '../../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user,history,courseUser) => dispatch => {
    console.log(user)
    axios.post('http://localhost:3000/api/users/register', user)
        .then(res => {
            alert('کاربر با موفقیت ثبت نام شد');
            console.log(res.status);
            if (res.status === 200) {
                dispatch(setCourse('Ok'))
            } else {
                dispatch(setCourse('Nok'))
            }
            if (user.role === 'کاروند') {
                axios(`http://localhost:3000/api/users/courses-user/create`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify(courseUser)
                })
                    .then(res => res)
                    .catch(err => console.log(err))
            }
        })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}



export const loginUser = (user,history) => dispatch => {
    axios.post('http://localhost:3000/api/users/login', user)
            .then(res => {
                const { token,role } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));

                switch(role){
                    
                    case 'کاروند':
                        history.push('/student/dashboard');
                        break;
                    case 'استاد':
                        history.push('/teacher/dashboard');
                        break;
                    case 'مدیر':
                        history.push("/admin/dashboard");
                        break;
                    default:
                        alert('you are not registerd!')   
                        break;         
                }
            })
        .catch(err => {
                console.log(err)
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const setCourse = response => {
    return {
        type: SET_COURSE,
        payload:  response 
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    if(history){
        history.push('/login');
    }
    
}