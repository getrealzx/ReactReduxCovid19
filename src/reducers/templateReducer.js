import {TESTCASE1, TESTCASE_ADD, TESTCASE_DELETE} from '../actions/actionTypes'

let templateReducer = (state, action) => {
    //initialize state
    if(state === undefined){
        state = {
            count: 0, 
            someArray: [{
                id: 1,
                name: "Austin",
                age: 21
            },
            {
                id: 2,
                name: "Jaye",
                age: 22,
            },
            {
                id: 3, 
                name: "Daniel",
                age: 23
            }
        ]   
        }
    }

    switch (action.type){
        case TESTCASE1:
            return{
                ...state, 
                count: state.count + action.count
            }
        case TESTCASE_ADD:
            return{
                ...state, 
                someArray: state.someArray.concat(action.data)
            }
        case TESTCASE_DELETE:
            console.log('redcuer delete')
            let filteredArray = state.someArray.filter(item =>{
                return item.id !=action.id
            })
            console.log('filtered array', filteredArray)
            return{
                ...state, 
                someArray: filteredArray
            }

        default:
            return state;
    }
}

export default templateReducer