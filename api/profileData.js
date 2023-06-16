import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// FIXME:  GET ALL AUTHORS
const getProfile = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/profile.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(Object.values(data)))
        .catch(reject);
});

const getSingleProfile = (firebaseKey) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/profile/${firebaseKey}.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(reject);
});

const createProfile = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/profile.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(reject);
});

const updateProfile = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/profile/${payload.firebaseKey}.json`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then((data) => resolve(Object.values(data)))
        .catch(reject);
});

// FIXME: DELETE AUTHOR
const deleteSingleProfile = (firebaseKey) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/profile/${firebaseKey}.json`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(reject);
});

const getAgentProfile = (firebaseKey) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/profile.json?orderBy="isAgent"&equalTo="${firebaseKey}"`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(Object.values(data)))
        .catch(reject);
});

const getUserProfile = (uid) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/profile.json?orderBy="uid"&equalTo="${uid}"`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(Object.values(data)))
        .catch(reject);
});

export {
    getProfile,
    getSingleProfile,
    createProfile,
    updateProfile,
    deleteSingleProfile,
    getAgentProfile,
    getUserProfile,
};
