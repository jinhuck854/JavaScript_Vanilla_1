// Variables & const,let
const number = 5; // const : 상수, let : 가변 변수 // var : No Rule
const temp = 2; // 기본적으로 const 사용, 업데이트가 필요한 변수일 때는 let 사용, var 사용 금지
let myName = "jinhyeok"; 

console.log(number + temp);
console.log(number * temp);
console.log(number / temp);

console.log("Hello " + myName);

myName = "LeeJinHyeok"

//============================================================================================
console.log("Your name is " + myName);
// Boolean

const amIFat = null; // true, false, null, undefined
let something;
console.log(amIFat, something); // undefined : 변수 선언 후 초기화 X

//============================================================================================
// Arrays : 배열
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

    // Get Item From Array
console.log(daysOfWeek);

    // Add one more day to array : Array.Push();
daysOfWeek.push("sun");
console.log(daysOfWeek);
console.log("Today is " + daysOfWeek[4]);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("Kimbab");
console.log(toBuy);

//============================================================================================
// Objects : 구조체
const player = {
    name:"jinhyeok",
    age:24,
    points:10,
    fat:true,
};

console.log(player);
console.log(player.name);
player.fat = false; // 중간에 player Object를 수정할 수 있음
console.log(player); // const 값에 접근하여 수정할 수 있다는 의문 : player가 constant이며 그 안에 있는 값은 아님
player.lastname = "potato"; // Object에 새로운 값 추가
console.log(player); // 그대로 출력됨

//============================================================================================
// Function : 함수, 호출과 출력
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " , And age is " + age);
}

sayHello(player.name ,player.age);
sayHello("nico", 10);
sayHello("dal", 40);

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

function divide(firstNumber, secondNumber){
    console.log(firstNumber/secondNumber);
}
plus(10, 30);
divide(20, 2);

//============================================================================================
// Returns : Function 에서 Return 값을 사용하여 값 저장
const age = 24;
function calAge(changeAge){
    return changeAge + 2;
}

console.log("Foreigner Age is " + age);
const krAge = calAge(age);
console.log("Korean Age is " + krAge);

//============================================================================================
// Conditionals

const InputAge = parseInt(prompt("How old ard you?")); // prompt : 입력 받음, but CSS 적용 불가능 => 사용 안 함
if(isNaN(InputAge) || InputAge < 0){ // Nan이 들어갈 때 1값이 됨. 즉, 잘못 입력했을 때, 명령어 출력
    console.log("Please write a correct number !");
}
else if(InputAge > 18 && InputAge <= 50){
    console.log("You can drinks !");
}
else if(InputAge > 50 && InputAge <= 80){
    console.log("Sorry, You should exercise...");
}
else if(InputAge > 80){
    console.log("You can do whatever you want !");
}
else{
    console.log("Sorry, You can not drinks...");
}


//============================================================================================
// Document : HTML <-> JS 연결되어있음
const title = document.getElementById("title"); // getElementById : JS에서 HTML id를 통해 가져옴 : id 입력창은 String 형식으로
console.log(title.id); // title
console.log(title.className); // Empty
console.dir(title);
//title.innerText = "Got you"; // Js에 의해 바뀜

//============================================================================================
// Searching for Elements
// . : class name // # : id name

// const hellos = document.getElementById("hello"); // 아래와 결과 같음 // id를 통해서 찾음
// const hellos = document.querySelector("#hello"); // 위와 결과 같음 // # : id를 찾는 연산자
// const hellos = document.querySelector("#hello h1"); // query를 사용하면 상세하게 찾기 가능 // getElementById는 불가능

const hellos = document.querySelector(".hello h1"); // querySelector : CSS처럼 쓰이기 떄문에 "." 사용
console.log(hellos); // "querySelector : 첫 번째 class name만 가져옴

const hellos2 = document.querySelectorAll(".hello h1"); // "querySelectorAll : 모든 class name 가져옴 => 배열
console.log(hellos2);