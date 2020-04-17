import {TESTCASE1, TESTCASE_ADD, TESTCASE_DELETE} from './actionTypes'

export const testCase1 = (countValue) =>{
    return {
        type: TESTCASE1,
        count: countValue
    }
}

export const testCaseAdd = (dataObj) =>{
    return {
        type: TESTCASE_ADD,
        data: dataObj
    }
}

export const testCaseDelete = (id) =>{

    console.log('test case delete action called')
    return {
        type: TESTCASE_DELETE,
        id: id
    }
}