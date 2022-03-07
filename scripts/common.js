var HeaderContent = '<img src="assests\images\logo.png" alt="logo" class="logo" />'+
'<a href="login.html" target="_self" class="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#login" style="margin-right: 2em;">'+Login+'</a>';

var FooterContent = '<div id="contact">'+
'<a href="contact.html" target="_self" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#contact-us">'+'<span>'+Contact_Us+'</span>'+'</a>'+
'</div>'+

'<div class="copyright">'+
'<span>'+'&copy; 2020 ROOM SEARCH PVT. LTD.'+'</span>'+
'</div>'+

'<div id="social-media">'+
'<a href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png" alt="facebook">'+'</a>'+
'<a href="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png" alt="instagram">'+'</a>'+
'<a href="https://twitter.com" target="_blank"><img src="assests/images/twitter.png" alt="twitter">'+'<br>'+'</a>'+
'</div>';

var refToHeader = document.getElementById("InsideHeader");
refToHeader.innerHTML = refToHeader.innerHTML + HeaderContent;

var refToFooter = document.getElementById("InsideFooter");
refToFooter.innerHTML = refToFooter.innerHTML + FooterContent;

var refToLoginButton = document.getElementById("button");
var refToLogincontent = '<button id="button" onclick="LoginToLocalStorage()" type="button" class="btn btn-primary">'+'LOGIN'+'</button>';
refToLoginButton.innerHTML = refToLogincontent;

function LoginToLocalStorage(){
    var refToUserName = document.getElementById("UserName").value;
    var refToPasswordName = document.getElementById("PasswordName").value;
    localStorage.setItem(refToUserName,refToPasswordName);
    
    var refToHeaderLogin = document.getElementById("HeaderLogin");

    if(refToHeaderLogin.innerText === "LOGIN"){
        refToHeaderLogin.innerText = "LOGOUT";
        alert("Succesfully loggedin");
        return;
    }
    else if(refToHeaderLogin.innerText === "LOGOUT"){
        refToHeaderLogin.innerText = "LOGIN";
    }
}
