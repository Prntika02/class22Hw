// counter======================

let dec = document.querySelector(".dec");
let result = document.querySelector(".result");
let inc = document.querySelector(".inc");

dec.addEventListener("click", ()=>{
  if (result.value >1){
    result.value = Number(result.value)-1;
    console.log(result);
  }else{
    inc.style.cursor =`not-allowed`;
  }
 
})

inc.addEventListener("click", function(){
  
  if(result.value <5){
    result.value = Number(result.value)+1;
    console.log(result);
  }else{
    
    dec.style.cursor =`not-allowed`;
    
  }

});

// range===================

let range = document.querySelector(`.range`);
let contain = document.querySelector(`.contain`);
contain.classList.add("active");

range.addEventListener("input", function(){
  
  let rslt = Number(range.value);
  contain.innerHTML = rslt;

});



