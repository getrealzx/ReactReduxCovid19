
import axios from "axios";

// loadCovidData to App.js dispatch
// export const loadCovidData = (arrayOfInitialCovidData) => {

// console.log("+++++++++++++++++++++++++++");
// console.log(arrayOfInitialCovidData);

// return {
//     type: 'LOADDATA',
//     data: arrayOfInitialCovidData  //passed to reducer
// }
//};


export const loadCovidData = () => (dispatch) => {

    // - axios request goes here
    // - do something with the response you receive in the promise
    // - put data from response into dispatch
    dispatch({ type: "LOADDATA" })
    axios.get("https://api.covid19api.com/summary")
        .then(res => {
            dispatch({
                type: "LOADDATA",
                payload: res.data
            })
                .catch(err => {
                    dispatch({
                        type: "LOADDATA",
                        payload: []
                    })
                })
        })


};


export const addCountry = (selectedCountries) => {
    console.log("+++++++++++selectedCountries+++covidActions+++++++++++++");
    console.log(selectedCountries);

    return {
        type: "ADD",
        selected: selectedCountries

    }
}


export const deleteCountry = (selectedCountries) => {
    console.log("+++++++++++selectedCountries++++covidActions++++++++++++");
    console.log(selectedCountries);

    return {
        type: "DELETE",
        selected: selectedCountries

    }
}