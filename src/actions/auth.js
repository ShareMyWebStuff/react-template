import axios from 'axios';
import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    RESET_AUTH_ERRORS
} from './types';
import setAuthToken from '../components/utils/setAuthToken';

export const resetAuthErrors = () => {
    return { type: RESET_AUTH_ERRORS };
}

// Load User
export const loadUser = () => async dispatch => {

    if (localStorage.token) {
        setAuthToken(localStorage.token);

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            validateStatus: function (status) {
                return ( ( status >= 200 && status < 300 ) || status === 403 || status === 405 )
            },
            crossDomain: true
        }
    
        try {
            const res = await axios.get('https://izxp2deu20.execute-api.eu-west-2.amazonaws.com/dev/tutor', config);

            dispatch ({
                type: USER_LOADED,
                payload: res.data
            });
    
        } catch (err) {

            dispatch ({
                type: AUTH_ERROR
            });

        }
    }
}


// Register User
export const register = (username, email, password, password2, type) => async dispatch => {

    let res;
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        validateStatus: function (status) {
            return ( ( status >= 200 && status < 300 ) || status === 403 || status === 405 )
        },
        crossDomain: true
    }

    const body = JSON.stringify({username, email, password, password2, type});
    try {
        res = await axios.post('https://izxp2deu20.execute-api.eu-west-2.amazonaws.com/dev/tutor', body, config);

        if (res.status >= 200 && res.status < 300) {
            await dispatch ({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            
            dispatch ( loadUser() );
        } 
        else {

            dispatch ({
                type: REGISTER_FAIL,
                payload: res.data
            });  
        }

        console.log (res.data.error);

    } catch (err) {

        dispatch ({
            type: REGISTER_FAIL
        });  

    }
}

// Register User
export const login = (username, password) => async dispatch => {

    let res;

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        validateStatus: function (status) {
            return ( ( status >= 200 && status < 300 ) || status === 403 || status === 405 )
        },
        crossDomain: true
    }

    const body = JSON.stringify({username, password});

    try {
        res = await axios.post('https://izxp2deu20.execute-api.eu-west-2.amazonaws.com/dev/login', body, config);

        if (res.status >= 200 && res.status < 300 ) {
            await dispatch ({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

            dispatch ( loadUser() );
        } else {
            dispatch ({
                type: LOGIN_FAIL,
                payload: res.data
            });  
        }

    } catch (err) {
        const { response } = err;
        console.log ( response );

        dispatch ({
            type: LOGIN_FAIL
        });  
    }
}

// Logout and Clear profile
export const logout = () => dispatch => {

    try {
        
        dispatch( {type: LOGOUT });

    } catch (err) {
        console.log ('ERROR', err);
    }
}