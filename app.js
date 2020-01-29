var input=document.querySelector("#input")
var output=document.querySelector("#output")
var btn=document.getElementById("submit")
var randomnumber=Math.floor(Math.random()*100)+1;
console.log(randomnumber)
var playerguess=0;
var i=2;
btn.addEventListener("click",numbercheck);
function numbercheck(){
    playerguess=parseInt(input.value); 
    // if(playerguess.length>0 && playerguess.valueOf!=""){}
    if(input.value==""){
        alert("error")
    }
    else if(playerguess!=randomnumber)
    {
        if(i>0){
            input.style.border="red solid"
            btn.textContent="Submit"
            output.textContent=  `wrong answer, you have ${i} tries left`
            output.style.color="red"
            i-=1;
        }
        else{
           input.style.border="red solid"
            input.disabled=true;
            output.textContent= `sorry you lose the game, Better luck next time`
            btn.textContent="Restart"
            output.style.color="red"
            btn.addEventListener("click",restart)
            function restart(){
                location.reload();
            }
        }
    }
    else{
       input.style.border="green solid"
        input.disabled=true;
        btn.textContent="Restart"
        output.textContent=  `Congratulation.....you won, answer is ${randomnumber}`
        output.style.color="green"
        btn.addEventListener("click",restart)
        function restart(){
            location.reload();
        }
    }
}
