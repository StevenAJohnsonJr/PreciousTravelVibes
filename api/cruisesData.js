import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// FIXME:  GET ALL AUTHORS
const getCruise = (uid) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/cruise.json?orderBy="uid"&equalTo="${uid}"`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(Object.values(data)))
        .catch(reject);
});

const getSingleCruise = (firebaseKey) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/cruise/${firebaseKey}.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(reject);
});

const createCruise = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/cruise.json?orderBy="uid"&equalTo="${uid}"`, {
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

const updateCruise = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/cruise/${payload.firebaseKey}.json`, {
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
const deleteSingleCruise = (firebaseKey) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/cruise/${firebaseKey}.json`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(reject);
});

const getCruiseProfile = (firebaseKey) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/trips.json?orderBy="profile_id"&equalTo="${firebaseKey}"`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(Object.values(data)))
        .catch(reject);
});

const getUserCruises = (uid) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/cruise.json?orderBy="uid"&equalTo="${uid}"`, {
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
    getCruise,
    getSingleCruise,
    createCruise,
    updateCruise,
    deleteSingleCruise,
    getCruiseProfile,
    getUserCruises,
};
