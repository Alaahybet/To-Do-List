/*let askEmail = prompt("please enter your email");
let askPassword = prompt("please enter your password");
let email = "alaahybet27@gmail.com";

if (askEmail.trim() == email || askPassword == "123456"){
    alert ("You are logged in");
    window.location.href = "https://www.google.com";

}else 
{
  alert ("invalid email or password");
}

let name = "alaa    hybet";
console.log (name.trim().length);*/

/*let num1 =prompt("please enter a number"); 
let num2 = prompt("please enter another number");

if (num1 >= num2 ){
  console.log (num1 + " is greater than or equal to " + num2);

}else{
  console.log (num1 + " is less than " + num2);
} */
  /*function  checknumber(){
    let number = prompt("please enter a number");
      
    number > 0 ?
    console.log (number + "is a positive number")
     : number < 0 ?
     console.log (number + "is a negative number")

     : console.log (number + "is zero"); 
  }*/
 /*function bigernumber (){
  let num1 = Number(prompt("please enter a number"));
  let num2 = Number(prompt("please enter another number"));
 
  let result = num1 > num2 ? num1 + " is greater than " + num2 
            
          : num1 < num2 ? num2 + " is greater than " + num1
           
          : num1 + " is equal to " + num2 ;

        console.log (result);
      
 }
 bigernumber();*/

 /*function checknumber(){
  let even = Number(prompt ("please enter a number"));

  even % 2 === 0 ? console.log (even + " is an even number")
  : console.log (even + " is an odd number");
 }
  checknumber();*/

  /*function grade(){
    let score  = Number(prompt("please enter your score"));

    score >= 90 ? console.log ("Excellent") : score >= 75 ? console.log ("Good") : score < 75 ? console.log ("Failed") : console.log ("Invalid score");
  }
  grade();*/
  
 /* let password = prompt("please enter your password : ");
  if (password.length >= 8 && password.length <= 16){
    console.log ("valid password");
  }else{
    console.log ("invalid password");
  }*/

   /* function age(){
      let userAge = prompt ("please enter your age : ");
      if (userAge < 12 ){
        console.log ("Ticket price is 5$");
      }else if (userAge >= 12 && userAge <=60){
        console.log ("Ticket parice is 10$");
      }else if (userAge > 60){
        console.log ("ticket price is 7$");
      }else{
        console.log ("invalid age");
      }

    }
    age();*/

    
   /*  let reaction = prompt ("what is the reaction? (love / like / haha / wow )");
    switch (reaction ){
    
    case  "love" :
      console.log ("you loved this post");
      break;
    case   "like":
      console.log ("you liked this post");
      break;
    case  "haha" :
      console.log ("you are haha this post");
      break;
    case  "wow" :
      console.log ("you are wow this post");
      break;
      default :
      console.log ("you have no reaction ");
      break;

    }*/
          
      /*for (let i = 1 ; i <= 5 ; i  += 2){
       document.write ("hello world <br>");
      }*/

      /* let name = ['alaa' , 'hybet' , 'mohamed ' , 'sara'  , 'ahmed'];
      for (let i =4; i > 0 ; i--){
        console.log (name[i]);
      }*/

        /*let car = ['bmw' , 'mercedes' , 'audi;'];
        let moudels = [2020,2021,2022];
        for(let i = 0 ; i < car.length ; i++){
          console.log (`Car: ${car[i]}`);
            for (let j = 0 ; j < moudels.length ; j++){
            console.log (`Model: ${moudels[j]}`);
          }
        }*/
    
/*let name = ["alaa", "hybet", "mohamed",123,456, "sara", "ahmed"]
 
for (let i = 0 ; i < name.length ; i++){
  if (typeof name[i] =='sara'){
    continue;
  }
  console.log (name[i]);
}*/
/*for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 4)
        break;
}*/
/*let x;
x == 20;
if (x == 20)
    console.log("true");
else
    console.log("false");

2 + 2 == 4 ? console.log("true") : console.log("false");

let sum = 21 * 21;
if (sum <= 21){
    console.log("you win ");}
else
    console.log("you lose ");
console.log("the prize");*/

 /* var number = function (){
    let x =20 ; 
      console.log (x );
  }*/

    /*console.log ( x());

    function x (){
      function y (){return 1}
      return y();
      function y(){return 0 }

    }*/
   /*function calc (...number){
    let result = 0;
    for (let i = 0 ; i <number.length ; i++){
          result += number[i];

    }
    console.log(result);
   }
   calc(1,2,3,5);*/

   /*let car = {
       title : "bmw",
        model : 2020,
        color : "black",
        start : function (){
          console.log ("the car is starting");
        }

        
   }

 console.log (car.title );*/

/* function findMax (...fingMax){
 
  let max = Math.max (...fingMax);

  console.log (max );
 }
 findMax(3,5,8,6,24,5);*/


/*function calculateAverage(...numbers ){
  
  let sum = 0 ;
  for (let i = 0 ; i < numbers.length ; i++){
    sum += numbers[i];
   
  }

   let average = sum / numbers.length;
    console.log (average);
}
calculateAverage(10,20,30);*/
 /*function reverseArray (...array){
 let reversed =[];
 for(let i = array.length -1 ; i>=0 ; i--){
  reversed.push (array[i]);
 }
 console.log (reversed);
 }
reverseArray(1,2,3,4,5);*/

/*function getEvenNumbers (... number){
 
 
   let num2 = number.filter(num => num %2 === 0);
   console.log (num2) 
   }
getEvenNumbers(1,2,3,4,5,6)*/

/*function capitalizeNames(str){
 
  let num = str.map(name => name.toUpperCase());
  console.log(num);
}
capitalizeNames(['alaa', 'ayman' , 'ahmed']);*/
/*
function removeDuplicates(...rem){
  let num3 = [...new Set(rem)];
    
  console.log(num3);

   }
removeDuplicates(1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,8,98,9); */

/*function containsWrod (num1 , num2){
  num3 = num1.includes(num2);
  console.log('pelase enter your secrch number :'+num3 );
}

let searchWrod = [1,2,5,0,5,0,5,6,5,0,65,4,57,54,23,54,5];

let userInput= prompt("Please enter your search number :");

let searchNumber = Number(userInput);

containsWrod(searchWrod , searchNumber);*/

/*let cart = [
{name : "shirt" , price : 20 , quantity: 2},
{name : "jense" , price : 30 , quantity: 1},
{name : "shoes" , price : 50 , quantity: 2}
];
function calculateTotal( cartArray ){
let total = 0 ;

for(let product of cartArray){
total += product.price *product.quantity; 
}
console.log('salary of product : ' +total + 'dollar' )


}
calculateTotal(cart);*/

/*let user ={
  firstName = "alaa hybet",
  lastname :


}*/

/*let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

//console.log(title,price, texas,ads,category,count,submit,discount,total);
 

function getTotal(){
if (price.value !='' ){
  let result = (+price.value +  +taxes.value +  +ads.value)-  +discount.value;
   total.innerHTML= result;
   total.style.background = "#040";
}
else {
  total.innerHTML = '';
  total.style.background="#800480";

}
}



//creat product 

/*let datapro =[];

submit.onclick = function(){
  let newPro = {
    title: title.value,
    price: price.value,
    count: count.value,
    ads: ads.value,
    taxes: taxes.value,
    discount: discount.value,
    total: total.innerHTML,
    category: category.value,
  }
  datapro.push(newPro);
  console.log(datapro);
}*/

/*function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    
    // Write a line of code that prints parameterVariable to stdout using console.log:
    
}
console.log(parameterVariable);*/

/*function reverss (text){
  let reversed = '';
  for(let i = text.length -1 ; i >= 0 ; i--){
    reversed += text[i];

  }
  return reversed;
}
console.log (reverss("hello world"));
console.log (reverss("alaa hybet"));
console.log (reverss("javascript"));
console.log(reverss("programming"));
console.log(reverss("web development"));*/

/*function evenNumbers (num){
  let even  =[];
  for (let i = 0 ; i <= num ; i++){
    if (i % 2 ===0){
      even.push(i);
    }

  }
  return even;

}
console.log (evenNumbers(10,20,20,4,6,8,7,2,65,54,5,2,55));*/

/*let a1 = {
  num1:"alaa"
}

let a2 = {
  num2:10
}
let a3 = {
  num3:5
}
let a4 = {
  num4:4
}
let a5 = {
  num5:7
}
let a6 = Object.assign(a1,a2,a3,a4,a5,{
  num6:4
});
console.log(a6);*/
/*let head = document.querySelectorAll('h1')[1];

head.style.color = "red";
console.log('head');*/

/*let img = document.getElementById('img');

img.src = "pro2.jfif";
img.className =  'image';
img.title = 'this is change attribute';
console.log(img.attributes);*/

/*let container = document.getElementById('div');


console.log(container.innerHTML);

console.log (container.innerText);*/

/*let contain  = document.getElementById('div');

contain.innerHTML = "hello my world";

contain.style.backgroundColor = `
background-color: #f0f0f0;
font-family: Arial, sans-serif;
padding: 20px;*/



/*let contain = document.createElement('div');
let head = document.createElement('h1');
let img = document.createElement('img');

let content = document.createTextNode('welcome to my website');
head.style.fontFamily = "Arial, sans-serif";
head.appendChild(content);

img.src = 'pro2.jfif';

img.style.width = "200px";
contain.style.backgroundColor = "#f0f0f0";



contain.appendChild(head);
contain.appendChild(img);
document.body.appendChild(contain);
console.log(head);

console.log(contain);*/

//creat 
/*let name = 
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';

function element(){
let card = document.createElement('div');
let title = document.createElement('h1');
let img = document.createElement('img');
let age = document.createElement('p');


let head = document.createTextNode('title');
let ageContent = document .createTextNode('age');
img.src = 'pro.jpg';

title.appendChild(head);
age.appendChild(ageContent);

card.style.width = '200px';
card.style.padding = '10px';
card.style.margin='2px';
card.style.backgroundColor = '#381717'; 
card.style.display = 'inline-block';  

img.style.width= '100% ';

card.appendChild(title);
card.appendChild(age);
card.appendChild(img);

container.appendChild(card);
document.body.appendChild(container);





}


for(i = 0 ; i < 100 ; i++){
  element();
}*/

/*let wet = document.getElementById('wel');
 
 
wet.addEventListener('click',function(){
  document.body.style.background='black';
})
wet.addEventListener('click' , function(){
  wet.style.background='blue';
})
wet.addEventListener('click',function(){
  wet.style.color='white';
})*/


/*let eve= document.getElementById('eve');
let i = 1;
eve.onfocus=function(){
  console.log('click' +i++);
  eve.style.border='6px solid #f00';
}
eve.onblur = function(){
  eve.style.border='none'
}*/

/*let usdd = document.getElementById('usd');
let egbb = document.getElementById('egb');


usdd.onkeyup = function(){
  egbb.value = usdd.value*50.6;
}

egbb.onkeyup = function(){
 usdd.value =egbb.value /50.6;
}*/

/*let after = document.getElementById('after');
let before = document.getElementById('before');
let append= document.getElementById('append');
let content = document.getElementById('content');
let container =document.getElementById('container');

container.style.backgroundColor='red';
container.style.height='50px';

after.onclick = function(){
 container.after(content);
}

before.onclick = function(){
 container.before(content);

}

append.onclick = function(){
 container.append(content);
}*/

/*let tes = document.getElementById('tes');

tes.onclick = function(){
  tes.classList.toggle("name");
}*/
/*let btopen = document.getElementById('op');
let btclose=document.getElementById('co');
let d = document.querySelector('.container');

btclose.onclick = function(){
    d.classList.add('hiden');
    this.classList.add('hiden');
    btopen.classList.remove('hiden')
}

btopen.onclick  = function(){
  this.classList.remove('hiden');
  btclose.classList.remove('hiden');
  d.classList.remove('hiden');

}*/
/*
let cli = document.getElementById('nop');
let inp = document.getElementById('bo')


window.onload = function(){
 cli.focus();
 
}
inp.onmousemove = function(){
  inp.style.background ="yellow" ;
}*/

/*let btn = document.getElementById('btn');



window.onscroll= function(){
  if (scrollY >= 400)
    {
      btn.style.display='block';
    
  }else{
      btn.style.display='none';
  }
}
btn.onclick = function(){
  scroll({
    left:0,
    top:0,
    behavior:"smooth"
    
  })
}
  console.log(screen.orientation);
  console.log(location.href)

  location.replace("https://www.google.com");
  location.assign("https://www.google.com");*/


 /*let hello =setTimeout(function(){
  console.log('hello');
},1000)

clearTimeout(hello);*/
/*let i =0;
let hello = setInterval(function(){
  console.log(i++)
  if (i==6){
    clearInterval(hello)
  }
},1000);*/

/*localStorage.setItem('name', 'alaa');
localStorage.setItem('age',JSON.stringify(25));
  
console.log(localStorage.name);
console.log(localStorage.age);

localStorage.user = JSON.stringify({
  name:'alaa',
  age:25,
})


localStorage.clear;*/

/*let txt = document.getElementById('txt');
  
if (localStorage.length > 0 ){
 txt.value = localStorage.getItem('txt');
}

txt.onkeyup = function(){
  localStorage.setItem('txt',txt.value);
}*/

/*if(localStorage.length>0)
{
    document.body.style.background=localStorage.color;

}

function setColor(color)
{
  localStorage.setItem('color',color)
  document.body.style.background=color;
}*/
/*function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

   console.log(parameterVariable);
    // Write a line of code that prints parameterVariable to stdout using console.log:
    
}



function main() {
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}*/

/*function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    







   console.log(firstInteger+Number(secondDecimal));
    // Write code that uses console.log to print the sum o

        console.log(firstInteger+Number(secondInteger));
    
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstInteger+Number(secondDecimal));
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString+secondString);
}*/

/*let language = ["Html","Css","Js","Java","Python","PhP","c++"];

function len(){
  for(let i =0; i<language.length;i++){
    if (language[i].length > 3){
      console.log(language[i]);
    }
  }
}
len();
*/

/*let backAccount  ={
  ownerName:"alaa",
  balance:1000,


withdraw:function(amount){
  if (this.balance >= amount){
   this.balance=this.balance -amount;
   console.log("your balance is taken-"+amount+'$');
  }else{
    console.log('sorry your balance is null')
  }
}
};

backAccount.withdraw(200);
backAccount.withdraw(900);*/

/*let btn = document.querySelectorAll('.con button'); // إمساك جميع الأزرار
let screen = document.querySelector('.na');        // إمساك شاشة العرض

btn.forEach(singleButton => {
  singleButton.addEventListener('click',() =>{
    let buttonText = singleButton.innerText;
    
    if(buttonText === '='){
 
      try{
        screen.value = eval (screen.value);
      }catch(error){
       screen.value = "Error";
      }
      return;
   }
   if(buttonText === "C"){
    screen.value = '0';
    return;
   }
   if(screen.value ==='0' || screen.value ==='Error'){
    screen.value = buttonText;

   }else{
    screen.value+=buttonText;
   }


  })
})*/

const input = document.getElementById("do-input");
const list = document.getElementById("do-list");

input.addEventListener("keypress",function(e){


  if(e.key ==="Enter" && input.value.trim()!==""){


   const li = document.createElement("li");


   const checkbox = document.createElement("input");
   checkbox.type="checkbox";



   const span = document.createElement("span");
   span.textContent=input.value;





   li.appendChild(checkbox);
   li.appendChild(span);



   list.appendChild(li);


   input.value="";
  }
});