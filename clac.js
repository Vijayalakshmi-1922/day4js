function add(){
    let a=Number(document.getElementById("value1").value);
    let b=Number(document.getElementById("value2").value);
    let c=a+b;
    console.log("Result:",c);
    document.getElementById("Result").innerHTML="sum of"+a+"and"+b+"is"+c;
}
function sub(){
    let a=Number(document.getElementById("value1").value);
    let b=Number(document.getElementById("value2").value);
    let c=a-b;
    console.log("Result:",c);
    document.getElementById("Result").innerHTML="sub of"+a+"and"+b+"is"+c;
}
function mul(){
    let a=Number(document.getElementById("value1").value);
    let b=Number(document.getElementById("value2").value);
    let c=a*b;
    console.log("Result:",c);
    document.getElementById("Result").innerHTML="mul of"+a+"and"+b+"is"+c;
}
function div(){
    let a=Number(document.getElementById("value1").value);
    let b=Number(document.getElementById("value2").value);
    let c=a/b;
    console.log("Result:",c);
    document.getElementById("Result").innerHTML="div of"+a+"and"+b+"is"+c;
}
function exp(){
    let a=Number(document.getElementById("value1").value);
    let b=Number(document.getElementById("value2").value);
    let c=a**b;
    console.log("Result:",c);
    document.getElementById("Result").innerHTML="exp of"+a+"and"+b+"is"+c;
}