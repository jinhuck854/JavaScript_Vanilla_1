const title = document.querySelector("div.hello:first-child h1");
console.dir(title);
console.log(title);

title.style.color = "Red"; // title > style > color : Red로 변경

function handleTitleClick(){
    title.innerText = "Title was clicked !";
    //console.log("Title was clicked !");
}

function handleMouseEnter(){
    title.innerText = "Mouse is here !";
    //console.log("Mouse is here !");
}

function handleMouseLeave(){
    title.innerText = "Mouse is leave !";
   // console.log("Mouse is leave !");
}

//title.addEventListener("click", handleTitleClick()); // handleTitleClick() : 실행했을 때, 함수 호출
title.addEventListener("click", handleTitleClick); // handleTitleClick : 클릭했을 때, 함수 호출
title.addEventListener("mouseenter", handleMouseEnter); // mouseenter : 마우스를 물체 위에 올렸을 때
title.addEventListener("mouseleave", handleMouseLeave);