
(function () {


    function getIP(json) {

        document.write(json.ip); //json.ip는 내 아이피 주소 알아내기

    }

    


             function resp() {
              //   var banIP1 = ['58.142.78.51'];  // 차단할 아이피 입력
                 var json = JSON.parse(this.responseText);

                 
                 if (json.ip == '00.142.78.51' |
                     json.ip == '588.142.78.51' |
                     json.ip == '00.123.45.67') {
 
                     // 차단할 아이피 접속 시 보여줄 메시지(특정 주소로만 보내려면 아래 줄 삭제)
                     alert("당신은 접속이 차단되었습니다.")
                     // 다른 곳으로 보낼 URL주소 입력
                     window.location.replace("http://green.bu.to");
 
                 }
                 


             }

             var request = new XMLHttpRequest();
             request.addEventListener("load", resp);
             request.open("GET", 'https://api.ipify.org?format=json');
             request.send();

}());