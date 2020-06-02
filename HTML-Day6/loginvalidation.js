function myfunc() {
    var v1, v2, v3, v4;
    v1 = document.getElementById("a1").value;
    if (/^[A-Z][a-z]{3,9}$/.test(v1)) {
        window.alert("VALID")
    }
    else {
        window.alert("NOT VALID")
​
    }
    v2 = document.getElementById("a2").value;
    if (/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(v2)){
        window.alert("VALID")
    }
    else {
    window.alert("NOT VALID")
​
}
v3 = document.getElementById("a3").value;
if(/^[6-9][0-9]{9}$/.test(v3))
{
        window.alert("VALID")
    }
    else {
        window.alert("NOT VALID")
​
​
    }
    v4 = document.getElementById("a4").value;
    if (/^[2][2][1][7][1][0][3][0-9]{2}[0-9]{3}$/.test(v)) {
        window.alert("VALID ");
    }
    else {
        window.alert("INVALID");
    }
​
​
    
}