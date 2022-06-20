let allNums = Array.from(document.querySelectorAll(".numbers p"))
let answer = document.getElementById("answer");
let numbers = Array.from(document.querySelectorAll("#num"))
let operators = Array.from(document.querySelectorAll("#op"))
allNums.forEach(num =>{
    num.addEventListener("click",()=>{
        convNum = num.textContent;
        switch(num.textContent){
            case '=': 
                try{
                    answer.innerHTML = eval(answer.textContent);
                }
                catch(err){
                    answer.innerHTML = 'Error!';
                }
            break;
            case 'C':
                answer.innerHTML = ''
                break;
            case 'back':
                answer.innerHTML = answer.textContent.slice(0,answer.textContent.length-1);
                break;
            default: 
                answer.innerHTML += convNum;
            }
    })
})
