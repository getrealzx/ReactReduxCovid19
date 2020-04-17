

// loadCovidData to App.js dispatch
export const loadCovidData = (arrayOfInitialCovidData) => {


    // console.log("+++++++++++++++++++++++++++");
    // console.log(arrayOfInitialCovidData);

    return {
        type: 'LOADDATA',
        data: arrayOfInitialCovidData  //passed to reducer
    }
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