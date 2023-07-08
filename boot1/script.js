function removeAlerts() {
  document.getElementById("error").innerHTML = "";
  document.getElementById("erroruser").innerHTML = "";
  document.getElementById("errorpwd").innerHTML = "";
  document.getElementById("errorpwdchar").innerHTML = "";
}

function validateForm() {
  removeAlerts();

  var username = document.forms["myForm"]["user"].value;
  var pwd = document.forms["myForm"]["pass"].value;

  if (!username && !pwd) {
    document.getElementById("error").innerHTML = "Please input username and password";
    return false;
  } else if (username == null || username == "") {
    document.getElementById("erroruser").innerHTML = "Please input your username";
    return false;
  } else if (pwd == null || pwd == "") {
    document.getElementById("errorpwd").innerHTML = "Please input your password";
    return false;
  } else if (pwd.length < 6) {
    document.getElementById("errorpwdchar").innerHTML = "your password should be minimum 6 character";
    return false;
  }

}
// index page code
let varName1 = 10
let varName2 = "stringvar"
let varName3 = true
console.log(varName1);
console.log(varName2);
console.log(varName3);


let curryPowder = ["Salt", "Pepper", "Chilli", "Coriander", "Emali"];
console.log(curryPowder);
// let itemList = document.querySelector('.kitchen-items');
//these two lines will make no difference other than the usage syntax
let itemList = document.getElementById('kitchen-items');
for (let powder of curryPowder) {
  // console.log(powder);
  let listItem=document.createElement('li');
  listItem.innerText=powder;
  console.log(listItem.innerText);
  itemList.appendChild(listItem);
  

}
// document.getElementById(kitchen-items).style.paddingBottom ="100px";
//here we dispalyed an array elemnt in vew by creating li for ui from js 
curryPowder.forEach(function(powder)
{
  const liElement = document.createElement('li') ;
  liElement.innerText=powder;
  itemList.appendChild(liElement);
}
);
//here we are going to accept values from html and displays it back to html
let list2kitchen = document.querySelectorAll('.list2 li');
let itemsrray2=[];
list2kitchen.forEach(function(powder,index){
  console.log(`(${index}) ${powder.innerText}`);
  //we can push these elements to an empty array we makes here
  itemsrray2.push(powder.innerText);
});
console.log(itemsrray2);
