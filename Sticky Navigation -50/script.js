const nav=document.getElementsByClassName("nav")[0]

window.addEventListener("scroll",()=>{

    // offsetHeight returns the height of an element in pixels, including the height of its padding, border, and horizontal scrollbar (if visible)
    // windows.scrollY
    if(window.scrollY >  nav.offsetHeight + 340 ){
        nav.classList.add("active")
    }
    else{
        nav.classList.remove("active")
    }
})
console.log(window.scrollY)


