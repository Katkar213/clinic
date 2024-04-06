const showloading=()=>{
    return {
      type:"showLoader"
    }
}

const hideloading=()=>{
    return {
      type:"hideLoader"
    }
}

const userName=(data)=>{
return{
  type:"success",
  payload:data
}
}



export {showloading,hideloading,userName};