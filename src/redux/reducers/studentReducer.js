const studentReducer = (state = '', action) => {

    switch (action.type) {
        case "ADD_STUDENT":
            console.log("Add Student working")
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        
        case "DELETE_STUDENT":
            console.log("Delete Student working")
            return {
                ...state,
                items: state.items.filter((stud)=> stud.id !== action.payload)
            }

        case "SHOW_STUDENT":
            console.log("Show Student working")
            let studentDetail = state.items.filter((stud)=> stud.id === action.payload)
            return {
                ...state,
                stud: (studentDetail.length>0) ? studentDetail[0]:{}
            }

        case "EDIT_STUDENT":
            console.log("Edit Student working")
            return {
                ...state,
                items: state.items.filter((stud)=> stud.id !== action.payload.id ? action.payload : stud)
            }

        default:
            return state
    }
}

export default studentReducer