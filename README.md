ST UNITAS 에서 사용되는 BBS 라이브러리 JAVASCRIPT 입니다
================================================

>본 라이브러리는 IE7부터 실행이 가능하도록 제작되었습니다.


## 함수 설명
### 1.bbs.get ( offset, limit [,extra_option]);
저장된 게시글 목록을 가져옵니다.
<pre>
 offset        : 도쿠먼트를 가져올 시작 점을 설정 합니다.
 limit         : 게시글을 몇개 가져올 것인지 설정 합니다
 extra_option  : 추가적으로 파라메터를 넘기고 싶은 경우 이용합니다
</pre>
<pre> 
<code>
     bbs.get(0,1,{extra:'hi'});
     http://some-domain.com?offset=0&limit=15&extra=hi
</code>
</pre>


### 2. bbs.set (check, callback);
게시글을 저장하는 기능을 담당합니다.
<pre>
 check         : 함수내 에서 폼 검증을 실행 할 수 있습니다. 함수 종료시에는 반드시 boolen값을 리턴해야 합니다.
 callback      : 데이터가 등록 된 후에, 리턴받은 데이터를 처리 하는 함수 입니다.
</pre>
<pre>
<code>
     bbs.set (function($form){
         if( $form.title.value == '' ) {
            alert("제목을 반드시 입력해주세요.);
            return false;
         } else {
            return true;
         }
     },function(document){
        //do something...
     });
</code>
</pre>

