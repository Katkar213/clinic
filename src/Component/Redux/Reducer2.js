const initialState={
    user:"No User"
}

const setUser=(state=initialState,action)=>{
    switch(action.type){
        case "success":
            // console.log(action.payload)
        //    return state.user=action.payload;
           return {...state,user:action.payload}

        default:
            return state;
    }
  

}
export default setUser