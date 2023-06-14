import { deleteSingleCruise, getSingleCruise } from "./cruisesData";
import { deleteSingleTrip, getSingleTrip } from "./tripsData";


const viewTripDetails = (tripFirebaseKey) => new Promise((resolve, reject) => {
    getSingleTrip(tripFirebaseKey)
        .then((tripObject) => {
            getSingleCruise(tripObject.profile_id)
                .then((cruiseObject) => {
                    resolve({ cruiseObject, ...tripObject });
                });
        }).catch((error) => reject(error));
});

const viewCruiseDetails = (cruiseFirebaseKey) => new Promise((resolve, reject) => {
    Promise.all([getSingleCruise(cruiseFirebaseKey), getCruiseProfile(cruiseFirebaseKey)])
        .then(([cruiseObject, cruiseTripsArray]) => {
            resolve({ ...cruiseObject, trips: cruiseTripsArray });
        }).catch((error) => reject(error));
});

const deleteCruiseTrips = (profile_id) => new Promise((resolve, reject) => {
    getCruiseProfile(profile_id).then((tripsArray) => {
        console.warn(tripsArray, 'cruise trips');
        const deleteTripPromises = tripsArray.map((trips) => deleteSingleTrip(trips.firebaseKey));

        Promise.all(deleteTripPromises).then(() => {
            deleteSingleCruise(profile_id).then(resolve);
        });
    }).catch((error) => reject(error));
});

export { viewCruiseDetails, viewTripDetails, deleteCruiseTrips };
