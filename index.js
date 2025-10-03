// local storage
let button=document.querySelector("button")

let head=document.querySelector("h1")

let count;

if(localStorage.getItem("count")==null){
    count=0;
}else{
    count=localStorage.getItem("count");
}

// localStorage.setItem("count",count)



head.innertext=count;


button.addEventListener("click",counter)




function counter(){

    count++;

    localStorage.setItem("count",count)
    console.log(count);
    head.innertext=count;
    
}