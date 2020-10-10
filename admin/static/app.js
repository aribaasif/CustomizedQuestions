function checkadmin(){
    uname=document.getElementById('uname');
    pass=document.getElementById('pass');
    if (uname.value== "admin@gmail.com" && pass.value=="12345")
    {
        document.getElementById("login").setAttribute("href","questions.html")
    }
    else{
        alert("Please enter correct information.")
    }
}
document.getElementById("fields").style.display= "none";
function show(){
    document.getElementById("fields").style.display= "block";
}