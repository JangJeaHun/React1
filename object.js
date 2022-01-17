// var tv = {
//     model: 'samson',
//     width: 150,
//     height: 80,
//     color: 'black',
//     weight: 40,
//     tv_on: function(){
//         console.log("전원이 연결 되었습니다");
//     }
// };

// var tv = new Object();
// tv.model = 'samson';
// tv.width = 150;
// tv.height = 80;
// tv.color = 'black';
// tv.weight = 40;


// var my_tv = new Object();
// my_tv.model = "LG v3000";
// my_tv.color = "black";
// my_tv.born = 2021;
// my_tv.firmware = "EAAS3234EA32";
// my_tv.price = 1000000;
// my_tv.info = function(){
//     console.log("===========tv : 정보=============")
//     console.log("모델명 : " + this.model)
//     console.log("제작년도 : "  +this.bron)
//     console.log("모델번호 : "  +this.firmware)
// }

// my_tv.info();

var car = {
    model : "super2022",
    type : "coupe",
    wheelbase: 5400,
    color: "black",
    drive: function(gear){
        if(gear == "D"){
            console.log("전진합니다")
        }else if(gear == "B"){
            console.log("후진합니다")
        }else if(gear == "p"){
            console.log("주차 합니다.")
        }else{
            console.log("수동모드 입니다")
            
        }
    }

};

console.log(car['type']);
