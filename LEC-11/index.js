// acessing dom elemt
//id class tag query selector///\
let el1=document.getElementById("heading");
console.log(el1);
let el2=document.getElementsByClassName("item");
console.log(el2[0]);
let el3=document.getElementsByTagName("p");
console.log(el3);
let el14=document.querySelector("p");
let el15=document.querySelector(".item");
let el16=document.querySelectorAll(".item");
let container =document.querySelector("#conatiner");

console.log(el14);
console.log(el15);
console.log(el16);
// prpoerties
//innertxt
//innerhtml
//text content
let data = el1.innerText;
console.log(data);
el14.innerText="changed using js";
let data2=ul.innerHtml;
console.log(data2);
let data3=ul.innerText;
console.log(data3);
let data4=container.textContent;
console.log(data4);
ul.innerHtml=`<li class="item">item1</li>
        <li class="item">item2</li>
        <li class="item">item 3</li>`