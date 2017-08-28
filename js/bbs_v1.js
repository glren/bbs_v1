var bbs = function(opt)
{
    this.options = {
        apis : {
            $documents_wrap   : {},    //출력된 데이터를 뿌려주기 위한 부모 태그
            get               : '',    //bbs 데이터를 가져올 주소를 입력 합니다.
            insert            : '',    //bbs 데이터를 등록할 주소를 입력 합니다.
            delete            : '',    //bbs 게시글을 삭제할 주소를 입력 합니다.
            update            : ''     //bbs 게시글을 수정할 주소를 입력 합니다.
        }
    }
    $.extend(this.options,opt);
}

bbs.prototype = {
    get : function(offset, limit, extra_param1, extra_param2, extra_param3)
    {
        var _server_data = {};
        _server_data.offset = 0 | offset;
        _server_data.limit = 15 | limit;
        if( extra_param1 ) {
            _server_data.extra_param1 = extra_param1;
        }
        if( extra_param2 ) {
            _server_data.extra_param1 = extra_param2;
        }
        if( extra_param3 ) {
            _server_data.extra_param1 = extra_param3;
        }
        return $.getJSON(this.options.get,_server_data,function(documents){});
    }
    ,insert : function(){}
}

// 게시글 입니다
var document = function()
{
    this.document_srl = '';
    this.title        = '';
    this.content      = '';


}
document.prototype = {

}
var comment = function()
{

}
document.prototype = {}
