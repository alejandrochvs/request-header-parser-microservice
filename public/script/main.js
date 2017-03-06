$('#Go').on('click',function(){
    var href = window.location.href;
    var url = href + "whoami";
    window.location.href = url;
});