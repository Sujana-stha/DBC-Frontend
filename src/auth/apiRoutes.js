import axios from 'axios'
export const base_url = `http://localhost:3003`
import {getHeaders} from './axiosInstance'

//api to add new user
export function addUser(values) {
    console.log(values);
    return axios.post(`${base_url}/users`, values)
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

//api to get all users
export function allUsers() {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.get(`${base_url}/profile`, {headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

//api to login
export function login(values) {
    return axios.post(`${base_url}/users/login`, values)
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

// api to get matched users
export function matchedUsers() {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.get(`${base_url}/match`, {headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

// api to send request to meet
export function sendMeetRequest(values) {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.post(`${base_url}/meet`,values, {headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

//api to get authenticate users
export function loggedUser() {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.get(`${base_url}/users/authUser`, {headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

//api to get all matched users
export function allMeetUsers() {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.get(`${base_url}/meet/all`, {headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

//api to update status of meetUsers
export function updateMeetStatus(id, values) {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.put(`${base_url}/meet/`+ id, values,{headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

// api to create profile

export function createProfile(values) {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.post(`${base_url}/profile`, values, {headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

//api to get single user details
export function singleUserInfo(id) {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.get(`${base_url}/profile/${id}`, {headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

//--------------------------FEEDBACK------------------------------------
// api to post new feedback
export function postFeedbacks(values) {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.post(`${base_url}/feedbacks`,values, {headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

//--------------------------MEETINGS------------------------------------
// get all meeting lists
export function getMeetings() {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.get(`${base_url}/meetings`,{headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}
// api to post new meetings
export function addMeetings(values) {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.post(`${base_url}/meetings`,values, {headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

//edit meetings
export function editMeetings(id, values) {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.put(`${base_url}/meetings/`+id,values, {headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}
//delete meetings
export function deleteMeetings(meetId) {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.delete(`${base_url}/meetings/`+meetId,{headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

// api to get all objectives
export function getObjectives() {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.get(`${base_url}/objective`,{headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}

// api to get all interests
export function getInterests() {
    const access_token = window.localStorage.getItem('access_token')
    const headers = getHeaders(access_token)
    return axios.get(`${base_url}/interest`,{headers})
    .catch(error=> {
        console.log(error)
        return {
            errors: error
        }
    });
}