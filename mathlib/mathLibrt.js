function sum(a,b){
    return a+b;
}

function sub (a,b){
    if (a > b){
        return a-b;
    }
    else {
        return b-a;
    }
}
function mult(a,b){
    return a*b
}
function div(a,b){
    if (a > b){
        return a/b;
    }
    else{
        return b/a;
    }
}


module.exports = {
    sum , sub , mult , div
}