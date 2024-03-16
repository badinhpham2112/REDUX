

import { USER_LOGIN_REQUIRES, USER_LOGIN_SUCCESS,  USER_LOGIN_ERROR, 
    USER_CREATE_REQUIRES, USER_CREATE_SUCCESS, USER_CREATE_ERROR, 
    USER_DELETE_REQUIRES, USER_DELETE_SUCCESS, USER_DELETE_ERROR} from './types';
import axios from 'axios'


    export const handleGetAllUser = () => {
        return async (dispatch, getState) => {
             dispatch(fetAllUserRequires())
             try {
                const res = await axios.get('http://localhost:8080/users/all');
                const data = res && res.data ? res.data : []
                dispatch(fetAllUserSuccess(data))
             } catch (error) {
                dispatch(fetAllUserError())
              
                
             }
        }
    }

    export const fetAllUserRequires = () => {
        return {
            type: USER_LOGIN_REQUIRES,
        };
    };

    export const fetAllUserSuccess = payload => {
        return {
           type: USER_LOGIN_SUCCESS,
           payload
           

        };
    };

    export const fetAllUserError = () => {
        return {
           type: USER_LOGIN_ERROR,

        };
    };

    export const handleCreateRedux = ({email, password, username}) => {
        return async (dispatch, getState) => {
            dispatch(fetCreateUserRequires())
            try {
                let res = await axios.post('http://localhost:8080/users/create', {email, password, username})
                console.log("res", res) 
                dispatch(fetCreateUserSuccess())               
            } catch (error) {
                dispatch(fetCreateUserError())
                console.log(error)
                
            }
        }
    }

    export const fetCreateUserRequires = () => {
        return {
            type: USER_CREATE_REQUIRES,
        };

    }

    export const fetCreateUserSuccess = () => {
        return {
            type: USER_CREATE_SUCCESS
        };

    }

    export const fetCreateUserError = () => {
        return {
            type: USER_CREATE_ERROR
        };

    }


    export const handleDeleteRedux = (id) => {
        return async (dispatch, getState) => {
        dispatch(fetUserDeleteRequires())
        try {
            let res = await axios.post(`http://localhost:8080/users/delete/${id}`)
            dispatch(fetUserDeleteSuccess())
            dispatch(handleGetAllUser())
        } catch (error) {     
            dispatch(fetUserDeleteError())
        }
    }  
    }

    export const fetUserDeleteRequires = () => {
        return {
            type: USER_DELETE_REQUIRES
        }
    }

    export const fetUserDeleteSuccess = () => {
        return {
            type: USER_DELETE_SUCCESS
        }
    }

    export const fetUserDeleteError = () => {
        return{
            type: USER_DELETE_ERROR
        }
    }