const submit = document.getElementById("submit");
const username = document.getElementById("username");
const password = document.getElementById("password");
let result;
result=String(result);

submit.onclick=function(){
   result = username.value + password.value;
}

console.log(result);