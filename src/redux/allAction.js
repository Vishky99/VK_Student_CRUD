export const studentAdd = (data) =>{
    return{
        type: 'ADD_STUDENT',
        payload: data
    }
}

export const studentDelete = (id) =>{
    return{
        type: 'DELETE_STUDENT',
        payload: id
    }
}

export const studentEdit = (data) =>{
    return{
        type: 'EDIT_STUDENT',
        payload: data
    }
}

export const studentShow = (id) =>{
    return{
        type: 'SHOW_STUDENT',
        payload: id
    }
}