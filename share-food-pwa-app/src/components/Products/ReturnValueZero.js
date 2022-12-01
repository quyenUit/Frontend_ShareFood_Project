export const ReturnValueZero = (value) => {
    if(value < 10){
        return "0" + value.toString();
    }else{
        return value;
    }
}