ST UNITAS 에서 사용되는 BBS 라이브러리 JAVASCRIPT 입니다
================================================

>본 라이브러리는 IE7부터 실행이 가능하도록 제작되었습니다.


## 함수 설명
### 1.bbs.get ( offset , limit [,extra_option]);
<pre>
 offset        : 도쿠먼트를 가져올 시작 점을 설정 합니다.
 limit         : 게시글을 몇개 가져올 것인지 설정 합니다
 extra_option  : 추가적으로 파라메터를 넘기고 싶은 경우 이용합니다
</pre> 
<code>

     bbs.get(0,1,{extra:'hi'});
     http://some-domain.com?offset=0&limit=15&extra=hi
</code>
위와 같이 호출하며, 호출된 데이터를 가공하여, 데이터를 뿌릴 수 있습니다

### 2. bbs.set (check,callback);
<pre>
 check         : 함수내에서 폼 검증을 실행 할 수 있습니다. 함수 종료시에는 반드시 boolen값을 리턴해야 합니다.
 callback      : 데이터가 등록 된 후에, 리턴받은 데이터를 처리 하는 함수 입니다.
</pre>
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
본 함수는 document 정보를 저장하여 입력하고, 저장된 결과값으로 컨트롤 하는 기능을 가지고 있습니다.
 
 
 
   

