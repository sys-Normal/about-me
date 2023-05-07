function Log(value){
    console.log(value);
}

function IsValid(target){
    if(target !== undefined && target !== null){
        // Log(`is true`);
        return true;
    }else{
        // Log(`is false`);
        return false;
    }
}

