
import { USER_LOGIN_REQUIRES, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR,
    USER_CREATE_REQUIRES, USER_CREATE_SUCCESS, USER_CREATE_ERROR,
    USER_DELETE_REQUIRES, USER_DELETE_SUCCESS, USER_DELETE_ERROR} from '../actions/types';

const INITIAL_STATE = {

    listUser: [],
    isLoading: false,
    isError: false,
    isLoadingCreate: false,
    isErrorCreate: false,
    isLoadingDelete: false,
    isErrorDelete: false,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case USER_LOGIN_REQUIRES:
           return {
             ...state,
             isLoading: true,
             isError: false

           };

        case USER_LOGIN_SUCCESS:

           return {
              ...state, listUser: action.payload,
              isLoading: false,
              isError: false

           };

        case USER_LOGIN_ERROR:

        return {
            ...state,
            isLoading: false,
            isError: true

        };

        case USER_CREATE_REQUIRES:

        return {
            ...state,
            isLoadingCreate: true,
            isErrorCreate: false

        };

        case USER_CREATE_SUCCESS:

        return {
            ...state,
            isLoadingCreate: false,
            isErrorCreate: false

        };

        case USER_CREATE_ERROR:

        return {
            ...state,
            isLoadingCreate: false,
            isErrorCreate: true

        };
       
        case USER_DELETE_REQUIRES:
        console.log('check action', action)

        return {
            ...state,
            isLoadingDelete: true,
            isErrorDelete: false,
        };

        case USER_DELETE_SUCCESS:
        console.log('check action', action)

        return {
            ...state,
            isLoadingDelete: false,
            isErrorDelete: false,

        };

        case USER_DELETE_ERROR:
        console.log('check action', action)

        return {
            ...state,
            isLoadingDelete: false,
            isErrorDelete: true,

        };


         default: return state;

    }

};

export default reducer;