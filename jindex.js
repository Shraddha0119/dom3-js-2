let first=document.getElementById("1st")
let second=document.getElementById("2nd")

let arr=[];
function subData(){
    let a=first.value;
    let b=second.value ;

let obj={
    first:a,
    second:b,
}

arr.push(obj)

console.log(arr);

}