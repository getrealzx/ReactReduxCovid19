// import { LOADDATA } from '../actions/actionTypes'

let dataReducer = (state, action) => {
    //initialize state
    if (state === undefined) {
        state = {
            selected: [
                {
                    "Country": "Bangladesh",
                    "CountryCode": "BD",
                    "Slug": "bangladesh",
                    "NewConfirmed": 219,
                    "TotalConfirmed": 1231,
                    "NewDeaths": 4,
                    "TotalDeaths": 50,
                    "NewRecovered": 7,
                    "TotalRecovered": 49,
                    "Date": "2020-04-16T14:09:46Z"
                },
                {
                    "Country": "Barbados",
                    "CountryCode": "BB",
                    "Slug": "barbados",
                    "NewConfirmed": 1,
                    "TotalConfirmed": 73,
                    "NewDeaths": 1,
                    "TotalDeaths": 5,
                    "NewRecovered": 2,
                    "TotalRecovered": 15,
                    "Date": "2020-04-16T14:09:46Z"
                }
            ]
        }
    }

    switch (action.type) {


        case "LOADDATA":
            return{
                ...state,
                data:action.data
            }


        case "ADD":
            return{
                ...state,
                selected: state.selected.conact(action.selected)
            }


        case "DELETE":
            let updatedList = state.selected.filter(countryObj => {
                return countryObj.Country !== action.selected.Country

            })

            return{
                ...state,
                selected: updatedList
            }



        default:
            return state;
    }
}

export default dataReducer