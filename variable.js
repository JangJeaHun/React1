function checkWeight(name, height, weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.minWeight;
    this.maxWeight;


    this.getInfo = function(){
        var str= "";
        str +="이름 :" + this.name +",";
        str +="키 :" + this.height +",";
        str +="몸무게 :" + this.weight +"<br>";
        return str;
    };


    this.getResult = function(){
        this.minWeight = (this.height - 100) * 0.9 - 5;
        this.maxWeight = (this.height - 100) * 0.9 + 5;

        if(this.weight >= this.minWeight && this.weight<=this.maxWeight){
            return "정상 몸무게입니다"
        }else if(this.weight<this.minWeight){
            return "정상 몸무게보다 미달입니다."
        }else{
            return "정상 몸무게보다 초과입니다."
        }

    };

}
var jang = new checkWeight("장보리",168,62);
var park = new checkWeight("박달재",180,88);
console.log(jang);
console.log(jang.getInfo());
console.log(jang.getResult());


console.log(park);
console.log(park.getInfo());
console.log(park.getResult());
