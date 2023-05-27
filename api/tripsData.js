import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// FIXME:  GET ALL AUTHORS
const getTrip = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/trips.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(Object.values(data)))
        .catch(reject);
});

const getSingleTrip = (firebaseKey) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/trips/${firebaseKey}.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(reject);
});

const createTrip = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/trips.json`, {
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

const updateTrip = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/trips/${payload.firebaseKey}.json`, {
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
const deleteSingleTrip = (firebaseKey) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/trips/${firebaseKey}.json`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(reject);
});

const getTripsCruise = (firebaseKey) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/cruise.json?orderBy="profile_id"&equalTo="${firebaseKey}"`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(Object.values(data)))
        .catch(reject);
});

const getUserTrips = (uid) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/trips.json?orderBy="uid"&equalTo="${uid}"`, {
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
    getTrip,
    getSingleTrip,
    createTrip,
    updateTrip,
    deleteSingleTrip,
    getTripsCruise,
    getUserTrips,
};
