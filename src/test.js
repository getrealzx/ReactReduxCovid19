
//action
function loadCovidData(initialData){

    return {
        type: "LOADDATA",
        data: initialData
    }
}

function loadCovidData1(countries){

    return {
        type: "DATA1",
        data: countries
    }
}

let state = {}
function selectedReducer(state, action){

    console.log(action.firstName)

    switch(action.type){
        case "DATA1":
            return {
                ...state,
                data: action.data
            }

    }
}


selectedReducer(state, loadCovidData1())