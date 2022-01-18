
const qst=document.querySelector('.quesHead');
const option1=document.querySelector('#ans1');
const option2=document.querySelector('#ans2');
const option3=document.querySelector('#ans3');
const option4=document.querySelector('#ans4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const buttons = document.querySelectorAll('button');
const prize=document.getElementById('prize');
const prizeMoney=document.getElementById('prizeMoney');
const retry=document.getElementById('retry');
const starting=document.getElementById('starting');
const startGame=document.getElementById('startGame');
let i=0;
fetch("question.json")
 .then(response=> {
     return response.json()
 }).then(data=>{
    checkAns(data);
    loadQuestion(data);
 });
 retry.addEventListener('click',()=>{
     window.location.reload();
 })
 starting.addEventListener('click',()=>{
    startGame.classList.add("none");
 })
let money=0;
const loadQuestion = (qstBank) =>{
    quest=qstBank[i];
    console.log(i)
    qst.innerText=quest.question;
    option1.innerText=quest.A;
    option2.innerText=quest.B;
    option3.innerText=quest.C;
    option4.innerText=quest.D; 
}

function checkAns(qstBank){
    for(item of buttons){
        item.addEventListener('click',(e)=>{
            questionId=e.target.id;
            console.log(questionId);
            
            if(questionId==quest.ans && i<9){
                money+=1000;
                i=i+1;
                
                loadQuestion(qstBank);
                
            }
           else{
                     console.log("else")
                    prizeMoney.classList.add("see");
                    prize.innerText=`you lose the game total prizemoney = ${money}
                    kya kariye gaa itne sare paiso ka...`
                }
             });
        }
 }
  
