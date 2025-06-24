let count = 0
let value = document.getElementById('value')
let btnIncrease = document.getElementById("increase")
let btnDecrease = document.getElementById("decrease")
let btnReset = document.getElementById("reset")

btnIncrease.addEventListener("click", ()=>{
   count ++;
   console.log(count)
   updateValue()

    // value.innerText=newcount
   
})

btnDecrease.addEventListener('click',()=>{
    count --;
    console.log(count)
    updateValue()
    
})

btnReset.addEventListener('click', ()=>{
    updateValue()
    
})


 function updateValue(){
    value.innerText = count
    if(count> 0){
        value.style.color ="blue"
    }else if (count < 0){
        value.style.color = "red"
    }else{
        value.style.color="black"
    }
 }