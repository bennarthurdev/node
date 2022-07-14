const Math = {
    sum: (a,b)=>{
        return( a + b);
    },
    mult:(a,b)=>{
        return(a*b);
    },
    div:(a,b)=>{
        return ( a/b );
    },
    sub:(a,b)=>{
        if(a>b){
            return a -b ; 
        }
        else{
            return b-a;
        }
    }
        
}

module.exports = Math;

exports.sum = (a,b) => a+b;
