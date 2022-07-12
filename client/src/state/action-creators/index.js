export const getBill=(bill)=>{
    return (dispatch)=>{
        dispatch({
            type: 'getBill',
            payload: bill
        })
    }
}



