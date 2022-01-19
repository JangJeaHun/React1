var ranNum = Math.random()*10;
for(var i=0; i<10; i++){
    if(ranNum ==0){
        Math.random()*10;
    }
}



var result = sum_all(ranNum);



function sum_all(){
    var result=1;
    for(var i=0; i<arguments.length ;i++){
        result *= arguments[i];
    }
    return result;

}

   

console.log("1~10까지의 합 : " +result)