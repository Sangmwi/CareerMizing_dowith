    //유저가 로그인 했는지 안했는지 확인해주는 함수
    function userSessionCheck() {
        console.log(currentTime);
        //로그인이 되어있으면 - 유저가 있으면, user를 인자값으로 넘겨준다.
        firebaseEmailAuth.onAuthStateChanged(function (user) {
          
          if (user) {
            //조회 - 데이터 베이스에 저장된 닉네임을 현재 접속되어 있는 user의 pk key 값을 이용해서 가져오기
            firebaseDatabase.ref("users/" + user.uid).once('value').then(function (snapshot) {
              
              //자바스크립트 dom 선택자를 통해서 네비게이션 메뉴의 엘리먼트 변경해주기
              document.getElementById("loginmenu").innerHTML = "로그아웃";
              document.getElementById("loginmenu").href = "loginform.html";

              document.getElementById("username").innerHTML = snapshot.val().name + " 님"; //Span은 innerhtml로 a 는 textContent로
              document.getElementById("username").href = "#";
 
              document.getElementById("usermail").innerHTML = snapshot.val().email //텍스트 변경, 메일 변경
              document.getElementById("usermail").href = "#";

 
              document.getElementById("usertype").innerHTML = snapshot.val().unit //텍스트 변경, 유저타입

              


            try {
              // 오류가 발생할 가능성이 있는 코드
              document.getElementById("usernameindex").innerHTML = snapshot.val().name //텍스트 변경, 유저타입
          } catch (error) {
              console.error("An error occurred:", error); // 오류를 콘솔에 출력
              // 필요에 따라 오류 처리 코드를 여기에 작성
          }
          

              //alert("KiHOONOK v2 보안테스트 : 세션체크 로그인됌 - 테스트 메시지입니다")

              name = snapshot.val().name;   //유저 닉네임은 계속 쓸거기 때문에 전역변수로 할당
              loginUserKey = snapshot.key;  //로그인한 유저의 key도 계속 쓸 것이기 때문에 전역변수로 할당
              userInfo = snapshot.val(); //snapshot.val()에 user 테이블에 있는 해당 개체 정보가 넘어온다. userInfo에 대입!
 

              

                boardListFun();


              //이부분까지 index.html에 해당하는 로직 이후에 엘리멘트 id로 mypage인지 메인 페이지인지 구분
              //mypage에서 호출했다면
              if(document.getElementById("titleCheck").textContent=="mypage"){
                                //1.닉네임 변경하기
                                document.getElementById("nicname").textContent = name

                                //2.이미지가 존재하면, 이미지 url을 가져와서 img 태그에 넣어준다.
                                if (snapshot.val().imgURl) {
                                    document.getElementById("myimage").src = snapshot.val().imgURl
                                    console.log("이미지가 저장되어 있네요");
                                } else {
                                    //없으면 다른 이미지 대체
                                    document.getElementById("myimage").src = "https://www.w3schools.com/bootstrap/img_avatar3.png";
                                    console.log("이미지가 없네요");
                                }
                
                                //3.한줄글이 있으면 가져와서 넣어준다. 
                                if (snapshot.val().comment) {
                                    document.getElementById("statetxt").textContent = snapshot.val().comment;
                                    console.log("한줄글이 저장되어 있네요");
                                } else {
                                    //없으면 더미 데이터 넣어준다.
                                    document.getElementById("statetxt").textContent = "한줄 기분을 적고 프로필 사진을 선택해 주세요~";
                                    console.log("한줄글 없음");
                                }

                             
                               

              }else{
              //index.html에서 호출 했다면
              //alert(userInfo.userid);  //uid는 db에서 user 테이블의 각 개체들의 pk 인데, 이 값은 인증에서 생성된 아이디의 pk 값과 같다. *중요!
              //리스트 호출

 

              return true
              }

            });
  
          } else {
              boardList();
           // alert("로그인 해주세요.")
           // window.location = 'login.html'
           // return;
          }
        });
      }
