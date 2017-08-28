ST UNITAS 에서 사용되는 BBS 라이브러리 JAVASCRIPT 입니다
================================================

>본 라이브러리는 IE7부터 실행이 가능하도록 제작되었습니다.


## 함수 설명
### 1.bbs.get ( offset , limit [,extra_option]);
 offset        : 도쿠먼트를 가져올 시작 점을 설정 합니다.
 limit         : 게시글을 몇개 가져올 것인지 설정 합니다
 extra_option  : 추가적으로 파라메터를 넘기고 싶은 경우 이용합니다
 
 bbs.get(0,1,{extra:'hi'});
 http://some-domain.com?offset=0&limit=15&extra=hi
 
   

