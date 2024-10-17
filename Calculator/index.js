const result1=document.getElementById("result")
let operators=document.getElementsByClassName("operators")
let anaylzer=0



// It shows the clicked buttons in the result sections
function calculation(input){
    if(result1.value==0){
        result1.value=""
        result1.value=result1.value+input
    }
    
    // It helps to write the operators after the output
    // For example after gettting 14 ouput, if i write "+" then it shows 14+
    else if(input === "+" || input === "-" || input === "*" || input === "/"){
        result1.value=result1.value+input
        anaylzer=0
    }

    // It clears the given output result for the new numbers
    // For example after gettting 14 ouput, if i write 1 then it clear 14 and shows 1
    else if(anaylzer>=1){
        anaylzer=0
        reanalyzer()
        result1.value=result1.value+input
    }
    else {
        result1.value=result1.value+input
    } 
}

// It perform the calucations
function calculate(){
    try{
        result1.value=eval(result1.value)
        anaylzer+=1
        console.log(anaylzer)
        return anaylzer

    }
    catch(error){
        result1.value="Error"
    }
}

function clearDisplay(){
    result1.value="0";
}

// It is used to clear the output for the new number.
// For example after gettting 14 ouput, if i write 1 then it clear 14 and shows 1
function reanalyzer(){
    result1.value=""
}

// .addEventListener('click', function() { ... }) attaches an event listener to the button. This means that when the button is clicked, the function inside the addEventListener will execute.
document.getElementById('clearValue').addEventListener('click', function() {
    if(result1.value==""){
        result1.value=="0"
    }
    else{
        result1.value = result1.value.slice(0, -1);
    }
});
