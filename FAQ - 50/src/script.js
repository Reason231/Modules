// const faqItems=document.querySelectorAll(".faq-item")

// faqItems.forEach(item => {

//     // yesle chai kun item ko question lai nikalcha
//     const question = item.querySelector('.faqQ');
    
//     question.addEventListener('click', () => {

//         // yesle chai tyo question ko answer lai active garcha css ma
//         item.classList.toggle('active'); 
//     });
// });


const faqItems=document.querySelectorAll(".faq-item")

faqItems.forEach(item=>{

    const question=item.querySelector(".faqQ")
    
    question.addEventListener("click",()=>{
        item.classList.toggle("active")
    })
}
)