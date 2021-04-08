// 抓到按鈕
var btn = document.getElementById('submit');
// 創建xml物件
var xhr = new XMLHttpRequest();
// 要回傳的網址
var url = "https://hexschool-tutorial.herokuapp.com/api/signup";
function retrunData(){
    // post打開網址
    xhr.open('post',url,true);
    // 文件格式為"application/x-www-form-urlencoded";
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    xhr.send('email='+email+'&password='+password);
    console.log(xhr)
    // 等到伺服器回應才做動作!!
    xhr.onload = function(){
        var str = JSON.parse(xhr.responseText);
            alert(str.message)
    }    
}
// 監聽sumbit
btn.addEventListener('click',retrunData,false);
// 登入用
// 創建xml物件
var xhl = new XMLHttpRequest();
// 要回傳的網址
var url2 = "https://hexschool-tutorial.herokuapp.com/api/signin";
// 抓到按鈕
var btn_login = document.getElementById('submit_login');
function loginRetrunData(){
    // post打開網址
    xhl.open('post',url2,true);
    // 文件格式為"application/x-www-form-urlencoded";
    xhl.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    var email_login = document.getElementById('email_login').value;
    var password_login = document.getElementById('password_login').value;
    xhl.send('email='+email_login+'&password='+password_login);
    console.log(xhl)
    // 等到伺服器回應才做動作!!
    xhl.onload = function(){
        var str = JSON.parse(xhl.responseText);
        console.log(xhl)
        alert(str.message)
    }    
}
// 監聽sumbit
btn_login.addEventListener('click',loginRetrunData,false);
