
var dropbtn = document.getElementsByClassName("dropbtn");            //dropdown메뉴
    dropbtn[0].addEventListener('click',function(){                   //dropbtn클래스의 태그를 클릭하면 함수실행
    document.getElementById('myDropdown').classList.toggle("show");   //myDropdown id를 갖는 태그의 클래스에 'show'를 추가
    dropbtn[0].classList.toggle("change");                            //dropbtn의 0번째 태그의 클래스에 'change'를 추가
});

//사진슬라이드
var dot = document.getElementsByClassName('dot');   //하단 이미지인 점들을 dot라는 객체로 설정
var image = document.getElementById('image'); //이미지 슬라이드 사진
var imageArray = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];  //슬라이드이미지
var imageIndex = 0;   //슬라이드 인덱스

function slide(){                                  //슬라이드를 실행할 함수
  for(var i=0; i<imageArray.length; i++){          //하단 이미지들 색 설정
    dot[i].style.backgroundColor = '#bbb';
  }
  image.src = imageArray[imageIndex];                //이미지 변경을 위해 이미지의 src값 새로 설정 
  dot[imageIndex].style.backgroundColor = '#717171';  
  imageIndex++;  //슬라이드 인덱스 중가
  if(imageIndex>=imageArray.length){
    imageIndex=0;                              //cycle을 위해서 이미지의 개수가 넘어가면 인덱스를 0으로 설정
  }
}
setInterval(slide, 5000);   //slide함수 5초마다 실행

//화살표
var prev = document.getElementById('prev');  //이전 화살표
var next = document.getElementById('next');  //이후 화살표
prev.addEventListener('click', function(){       //이전 화살표 클릭시 실행
  imageIndex--;
  if(imageIndex<0){
    imageIndex=5;
  }
  for(var i=0; i<imageArray.length; i++){
    dot[i].style.backgroundColor = '#bbb';
  }
  image.src = imageArray[imageIndex];           //이미지 변경
  dot[imageIndex].style.backgroundColor = '#717171';
})
next.addEventListener('click', function(){   //이후 화살표 클릭시 실행
  imageIndex++;
  if(imageIndex>=imageArray.length){
    imageIndex=0;
  }
  for(var i=0; i<imageArray.length; i++){
    dot[i].style.backgroundColor = '#bbb';
  }
  image.src = imageArray[imageIndex];           //이미지 변경
  dot[imageIndex].style.backgroundColor = '#717171';
});

//dot    

dot[0].addEventListener('click', function(){                //하단이미지에 해당하는 각 점을 클릭시 실행
  for(var i=0; i<imageArray.length; i++){
    dot[i].style.backgroundColor = '#bbb';
  }
  imageIndex = 0;
  image.src = imageArray[imageIndex];
  dot[imageIndex].style.backgroundColor = '#717171';
})
dot[1].addEventListener('click', function(){
  for(var i=0; i<imageArray.length; i++){
    dot[i].style.backgroundColor = '#bbb';
  }
  imageIndex=1;
  image.src = imageArray[imageIndex];
  dot[imageIndex].style.backgroundColor = '#717171';
})
dot[2].addEventListener('click', function(){
  for(var i=0; i<imageArray.length; i++){
    dot[i].style.backgroundColor = '#bbb';
  }
  imageIndex =2;
  image.src = imageArray[imageIndex];
  dot[imageIndex].style.backgroundColor = '#717171';
})
dot[3].addEventListener('click', function(){
  for(var i=0; i<imageArray.length; i++){
    dot[i].style.backgroundColor = '#bbb';
  }
  imageIndex =3;
  image.src = imageArray[imageIndex];
  dot[imageIndex].style.backgroundColor = '#717171';
})
dot[4].addEventListener('click', function(){
  for(var i=0; i<imageArray.length; i++){
    dot[i].style.backgroundColor = '#bbb';
  }
  imageIndex=4;
  image.src = imageArray[imageIndex];
  dot[imageIndex].style.backgroundColor = '#717171';
})
dot[5].addEventListener('click', function(){
  for(var i=0; i<imageArray.length; i++){
    dot[i].style.backgroundColor = '#bbb';
  }
  imageIndex=5;
  image.src = imageArray[imageIndex];
  dot[imageIndex].style.backgroundColor = '#717171';
})

//introduce

//gallery
var close = document.getElementsByClassName('close-icon');      //x버튼 
var partyimg = document.getElementsByClassName('partyimg');   //정당 이미지 갤러리 이미지 

close[0].addEventListener('click', function(){            //x버튼 클릭시 이미지를 삭제하는 메소드
  close[0].style.visibility = 'hidden';                   //x버튼의 visibility값을 hidden으로 하여 화면에서 안보이게 한다.
  partyimg[0].style.visibility = 'hidden';                //해당 이미지의 visibility값을 hidden으로 하여 화면에서 안보이게 한다.
  sessionStorage.setItem(0, 'hidden');                     //storage에 값을 저장 
});                                                                     
                                                          //5개의 이미지에 대해 같은 함수 실행
close[1].addEventListener('click', function(){
  close[1].style.visibility = 'hidden';
  partyimg[1].style.visibility = 'hidden';
  sessionStorage.setItem(1, 'hidden');
});


close[2].addEventListener('click', function(){
  close[2].style.visibility = 'hidden';
  partyimg[2].style.visibility = 'hidden';
  sessionStorage.setItem(2, 'hidden');
});


close[3].addEventListener('click', function(){
  close[3].style.visibility = 'hidden';
  partyimg[3].style.visibility = 'hidden';
  sessionStorage.setItem(3, 'hidden');
});


close[4].addEventListener('click', function(){
  close[4].style.visibility = 'hidden';
  partyimg[4].style.visibility = 'hidden';
  sessionStorage.setItem(4, 'hidden');
});

function reload(){                                             //새로고침시에 삭제한 이미지를 안나오게 하기 위한 함수
  var close = document.getElementsByClassName('close-icon');   //x버튼과 이미지에 대한 객체 설정
  var partyimg = document.getElementsByClassName('partyimg'); 
  for(var i=0; i<close.length; i++){                           //그림의 개수만 만큼 for문을 돌린다
    if(sessionStorage.getItem(i)=="hidden"){                   //storage의 값을 hidden인지 확인
      close[i].style.visibility = sessionStorage.getItem(i);   //hidden이면 해당인덱스의 x버튼과 이미지의 visibility값을 hidden으로 설정
      partyimg[i].style.visibility = sessionStorage.getItem(i); 
    }
  }
}
var party = document.getElementsByClassName('party');       //정당사진 
var explain = document.getElementsByClassName('explain');   //마우스 오버시 정당 설명

party[0].addEventListener('mouseover', function(){           //마우스 오버시 효과
  party[0].style.opacity = '0.5';
  if(partyimg[0].style.visibility != 'hidden'){
  explain[0].style.display = 'inline-block';                //부연설명 출력
}
});

party[0].addEventListener('mouseout', function(){            //마우스 아웃시 효과
  party[0].style.opacity = '1';
  explain[0].style.display = 'none';                        //부연설명 삭제
})

party[1].addEventListener('mouseover', function(){          //5개의 이미지에 대해 같은 방식으로 함수 실행
  party[1].style.opacity = '0.5';
  if(partyimg[1].style.visibility != 'hidden'){
  explain[1].style.display = 'inline-block';
}
});

party[1].addEventListener('mouseout', function(){
  party[1].style.opacity = '1';
  explain[1].style.display = 'none';
});
party[2].addEventListener('mouseover', function(){
  party[2].style.opacity = '0.5';
  if(partyimg[2].style.visibility != 'hidden'){
  explain[2].style.display = 'inline-block';
}
});

party[2].addEventListener('mouseout', function(){
  party[2].style.opacity = '1';
  explain[2].style.display = 'none';
})
party[3].addEventListener('mouseover', function(){
  party[3].style.opacity = '0.5';
  if(partyimg[3].style.visibility != 'hidden'){
  explain[3].style.display = 'inline-block';
}
});

party[3].addEventListener('mouseout', function(){
  party[3].style.opacity = '1';
  explain[3].style.display = 'none';
})
party[4].addEventListener('mouseover', function(){
  party[4].style.opacity = '0.5';
  if(partyimg[4].style.visibility != 'hidden'){
  explain[4].style.display = 'inline-block';
}
})

party[4].addEventListener('mouseout', function(){
  party[4].style.opacity = '1';
  explain[4].style.display = 'none';
})

//popimage

var popimageArray = ["더불어민주당.png", "자유한국당.png", "국민의당.png", "바른정당.png", "정의당.png"];  //pop이미지
var popimage = document.getElementById('popimage');                                         //정당 사진
var popimageIndex = 0;                                                                      //팝업창 인덱스 전역변수
var popprev = document.getElementById('popprev');                                           //팝업창 이전 
var popnext = document.getElementById('popnext');                                           //팝업창 다음
var party = document.getElementsByClassName('party');                                       //정당 사진 디브 
var popup = document.getElementById('popup');                                               //전체 화면

partyimg[0].addEventListener('click', function(){                                           //클릭시에 팝업창이 나오게 하는 함수
  popimageIndex = 0;
  popup.style.display = 'block';
  popimage.src = popimageArray[popimageIndex];
});

partyimg[1].addEventListener('click', function(){
  popimageIndex = 1;
  popup.style.display = 'block';
  popimage.src = popimageArray[popimageIndex];
});

partyimg[2].addEventListener('click', function(){
  popimageIndex = 2;
  popup.style.display = 'block';
  popimage.src = popimageArray[popimageIndex];
});

partyimg[3].addEventListener('click', function(){
  popimageIndex = 3;
  popup.style.display = 'block';
  popimage.src = popimageArray[popimageIndex];
});

partyimg[4].addEventListener('click', function(){
  popimageIndex = 4;
  popup.style.display = 'block';
  popimage.src = popimageArray[popimageIndex];
});

popimage.addEventListener('click', function(){    //팝업창 그림 클릭하면 다시 원상 복귀
  popup.style.display = 'none';
})

popprev.addEventListener('click', function(){     //이전버튼눌러서 그 전 이미지를 보이게 하는 함수
  popimageIndex--;
  if(popimageIndex<0){
      popimageIndex=4;
    }
   while(partyimg[popimageIndex].style.visibility=='hidden'){     //이미지가 삭제된 상황이면 건너 뛰게 하는 조건
    popimageIndex--;
    if(popimageIndex<0){
      popimageIndex=4;
    }
  }
  popimage.src = popimageArray[popimageIndex];                          //이미지 src를 그 전 이미지로 설정
  });

popnext.addEventListener('click', function(){     //다음버튼 눌러서 그 다음 이미지를 보이게 하는 함수
  popimageIndex++;
  if(popimageIndex>=popimageArray.length){         //이미지의 개수를 넘어가면 인덱스를 0으로 설정해서 cycle이 가능하게함
      popimageIndex=0;
    }
  while(partyimg[popimageIndex].style.visibility=='hidden'){        //이미지가 삭제된 상황이면 건너 뛰게 하는 조건
    popimageIndex++;                                              
    if(popimageIndex>=popimageArray.length){                        //이미지의 개수가 넘어가면 인덱스를 0으로 설정해서 cycle이 가능하게함    
      popimageIndex=0;
    }
  }
  popimage.src = popimageArray[popimageIndex];                          //이미지 src를 그 다음 이미지로 설정
});

//table
var register = document.getElementById('register');    //등록하기 버튼
var set = document.getElementById('guestTable');        //방명록테이블과 작성자와 내용에 해당하는 객체를 가져옴
var writertext = document.getElementById('text1');
var storytext = document.getElementById('text2');
var reviewnum = 0;  //답글 개수

register.addEventListener('click', function(){       //클릭시에 방명록 기록하는 메소드
  var table = document.createElement('table');       //작성한 내용을 출력할 테이블 태그 새로 생성
  table.className = 'newguest';             
  
  //첫줄
  var tr1 = document.createElement('tr');             //첫번째 tr생성
  var td1_1 = document.createElement('td');           //첫째 줄에 첫번째 td태그 생성
  td1_1.className = 'writer';                         //첫번째 td의 클래스이름과 작성자란에 입력한 내용을 innerHTML을 통해 td태그에 입력
  td1_1.innerHTML = "작성자 : "+writertext.value;
  var td1_2 = document.createElement('td');           //첫번째 줄에 두번째 td태그 생성
  td1_2.className = 'story';                          //두번째 td의 클래스이름과 내용란에 입력한 내용을 innrHTML을 통해 td태그에 입력
  td1_2.innerHTML = storytext.value;
  tr1.appendChild(td1_1);                             //appendChild함수를 통해서 tr태그에 td1_1과 td1_2를 추가한다
  tr1.appendChild(td1_2);

  //두번째줄
  var tr2 = document.createElement('tr');              //두번째 tr생성
  var td2 = document.createElement('td');              //두번째 줄에 철번째 td태그 생성
  td2.setAttribute('colspan', '2');                    //td의 속성에 colspan과 align 추가
  td2.setAttribute('align', 'right');
  var input = document.createElement('input');         //답글등록하기 버튼을 만들기 위한 input태그 추가하고 id, class, type, value속성을 추가 
  input.setAttribute('id', 'reaction'+reviewnum);
  input.setAttribute('class', 'reaction');
  input.setAttribute('type', 'button');
  input.setAttribute('value', '답글 등록하기');
  tr2.appendChild(td2);                                //tr에 td와 input태그 추가
  td2.appendChild(input);                                    

  table.appendChild(tr1);                               //마지막으로 전체 테이블에 tr1태그와 tr2태그를 추가한다
  table.appendChild(tr2);

  set.appendChild(table);

  if(reviewnum<=0){                                                  //작성자 내용란에 입력을 통해 생성된 테이블마다 답글을 달기를 하기위해서 if문에 인덱스를 넣어 구분을 해준다.
  var review0 = document.getElementById('reaction0');                //해당 답글달기 버튼을 눌렀을 때 prompt함수를 통해 답글을 입력받고 답글란 속성과 클래스이름을 설정한다.
  review0.addEventListener('click', function(){                      //입력받은 내용을 interview에 저장하고 innerHTML을 통해서 review의 부모노드인 td태그에 내용을 추가한다.
    var interview = prompt("답글을 입력하세요.");                         //그리고 답글달기 버튼을 삭제한다.
    review0.parentNode.setAttribute('align', 'left');
    review0.parentNode.className = 'reviewcolor';
    review0.parentNode.innerHTML = "답변 : "+interview; 
    review0.remove();
  });
}
  else if(reviewnum<=1){
    var review1 = document.getElementById('reaction1');
    review1.addEventListener('click', function(){
    var interview = prompt("답글을 입력하세요.");
    review1.parentNode.setAttribute('align', 'left');
    review1.parentNode.className = 'reviewcolor';
    review1.parentNode.innerHTML = "답변 : "+interview; 
    review1.remove();  
  });  
  }
  
  else if(reviewnum<=2){
    var review2 = document.getElementById('reaction2');
    review2.addEventListener('click', function(){
    var interview = prompt("답글을 입력하세요.");
    review2.parentNode.setAttribute('align', 'left');
    review2.parentNode.className = 'reviewcolor';
    review2.parentNode.innerHTML = "답변 : "+interview; 
    review2.remove();  
  });
  }

  else if(reviewnum<=3){
    var review3 = document.getElementById('reaction3');
    review3.addEventListener('click', function(){
    var interview = prompt("답글을 입력하세요.");
    review3.parentNode.setAttribute('align', 'left');
    review3.parentNode.className = 'reviewcolor';
    review3.parentNode.innerHTML = "답변 : "+interview; 
    review3.remove();  
  });
  }
  
  else if(reviewnum<=4){
    var review4 = document.getElementById('reaction4');
    review4.addEventListener('click', function(){
    var interview = prompt("답글을 입력하세요.");
    review4.parentNode.setAttribute('align', 'left');
    review4.parentNode.className = 'reviewcolor';
    review4.parentNode.innerHTML = "답변 : "+interview; 
    review4.remove();  
  });
  }
  reviewnum++;
});

 //차트
var ctx = document.getElementById("myChart");                          //Chart.js 라이브러리를 실행하는 부분
var myChart = new Chart(ctx, {                                         //차트를 새로 생성
    type: 'bar',                                                       //타입을 bar로 설정
    data: {
        labels: ["문재인", "홍준표", "안철수", "유승민", "심상정"],              //차트에 필요한 후보자들 이름과 나타내는 내용인 지지율을 설정하고 데이터들을 입력
        datasets: [{
            label: '지지율',
            data: [40.2, 22.7, 21.8, 5.0, 7.3],
            backgroundColor: [                                         //해당 후보자에 대한 그래프 색 설정
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 3                                           //너비 설정
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});