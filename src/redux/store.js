import { createStore, combineReducers } from 'redux'
import studentReducer from './reducers/studentReducer'
import userReducer from './reducers/userReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const mainReducer = combineReducers({
    user: userReducer,
    student: studentReducer
})

const commonData ={
    student:{
        items:[
            {
                id:'1', rlno: 10, name:'Vishal Kumar', dept: 'CSE', year: '2021'
            },
            {
                id:'2', rlno: 16, name:'Prasad Dubey', dept: 'ECE', year: '2019'
            },
            {
                id:'3', rlno: 20, name:'Shivam Chauhan', dept: 'BCA', year: '2020'
            },
            {
                id:'4', rlno: 25, name:'Ratnesh Sinha', dept: 'MBA', year: '2022'
            },
            {
                id:'5', rlno: 28, name:'Shivam Kumar', dept: 'BCOM', year: '2020'
            }
        ]
    },
    user:{
        userId:52,
        name:'Random User',
        city:'noida'
    }
}

const store = createStore(mainReducer, commonData, composeWithDevTools())

export default store;