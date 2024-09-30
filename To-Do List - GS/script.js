const input=document.getElementById("input")
const output=document.getElementById("output")
const btn=document.getElementById("btn")
const btnc=document.getElementById("btnc")

var main=document.getElementById("main")

var img=`<img src="./download.png" alt="" id="img"`


btn.addEventListener("click",()=>{

    // #Start of label creating
    var label = document.createElement("label");
    
    // Set the 'for' attribute to associate with the input radio
    label.setAttribute("for", "output");
    
    // Set the label's inner text
    label.innerHTML = input.value;
    // #End of label creating


    // Insert the label before the radio button
    main.innerHTML=`<input type="radio" id="output"> ${img}>`
    var radio = document.getElementById("output");
    radio.parentNode.insertBefore(label, radio);
})

document.getElementById("main").addEventListener("click", (e) => {
    // 'e.target' is the element that was clicked
    if (e.target && e.target.id === "img") {
        console.log("Hello world");
        main.innerHTML=""
    }
});

btnc.addEventListener("click",()=>{
    console.log("djfd")
})