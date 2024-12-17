const next=document.getElementById("next")
const prev=document.getElementById("prev")
const p=document.querySelector("p")

let value=1

next.addEventListener("click",()=>{
    value+=1
    p.innerText=`${value}`
})

prev.addEventListener("click",()=>{
    value-=1
    p.innerText=`${value}`
})