
const decrimentBtn = document.getElementById("DecrimentBtn");
const incrementBtn = document.getElementById("IncrementBtn");
const zeroBtn = document.getElementById("zeroBtn");
const resetBtn = document.getElementById("resetBtn");

// click on decrentbtn
decrimentBtn.addEventListener("click", () => {
     const value = Number(displayValue.innerText);
     if(value > 0){
          displayValue.innerText = value -1 
     }
     else{
          alert("value is negative")
     }
});
// click on incriment

incrementBtn.addEventListener("click", () => {
     const value = Number(displayValue.innerText);
     if(value >= 10){
          alert("after 10 numbers not aliowed");
     }
     else{
          displayValue.innerText = value + 1;   
     }
});

resetBtn.addEventListener("click", () => {
     displayValue.innerText = 0;
})
