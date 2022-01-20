var prevBTN = document.querySelector("#prev");//버튼이전
        var nextBTN = document.querySelector("#next");//버튼다음
        var thumb = document.querySelector("#thumb");   //썸네일 이미지
        var PAGING = document.querySelector(".paging");
        var cin = 1;

        prevBTN.addEventListener("click",function(){
            console.log("이전 버튼을 눌렀습니다.");
            if(cin <= 1){
                cin =8;
            }else{
                cin--;
            }
            gallerySet(cin);
        });


        nextBTN.addEventListener("click",function(){
            console.log("다음 버튼을 눌렀습니다.");
            if(cin >=8){
                cin =1;
            }else{
                cin++;
            }
            gallerySet(cin);
        });


        function gallerySet(cin){
            var imgURL = "images/"+ cin +".jpg";
            thumb.setAttribute("src",imgURL);
            PAGING.innerText = cin + " /8";
        }