const initialstate={
    loading:false
}
// alertslice=loadreducer....
const loadingreducer=(state=initialstate,action)=>{
switch(action.type){
    case "showLoader":
        console.log("spinner entered")
        return {...state,loading:true}
    case "hideLoader":
        return {...state,loading:false} 
    default:
        return state
}
}

export default loadingreducer;