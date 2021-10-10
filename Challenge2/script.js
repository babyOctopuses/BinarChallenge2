//declare the buttons

const options = ['rock', 'paper', 'scissors']

const btns= document.querySelectorAll('.btn');
const result = document.getElementById('result');
const player1= document.querySelectorAll('player1');
const combg = document.querySelectorAll('.com');
const vs = document.querySelector('.refresh');
const stat= document.querySelector('.status');
const ref= document.querySelector('.ref');
const option= document.querySelector('.Options');


//age html elements
btns.forEach(function(item){
    item.addEventListener('click', function(e){
        let choice = e.currentTarget.classList;
        console.log('choice', choice[1]);
        let com = options[generateComChoice()];
        let player;
        let status;

        if(choice.contains('rock')){
            player='rock'
            if(com==player){
                status='DRAW';
            }else if(com== 'scissors'){
                status='WIN'
            }else if(com == 'paper'){
                status='LOSE'
            }
        } else if(choice.contains('paper')){
            player='paper'
            if(com==player){
                status='DRAW';
            }else if(com== 'rock'){
                status='WIN'
            }else if(com == 'scissors'){
                status='LOSE'
            }
        } else if(choice.contains('scissors')){
            player='scissors'
            if(com==player){
                status='DRAW';
            }else if(com== 'paper'){
                status='WIN'
            }else if(com == 'rock'){
                status='LOSE'
            }
        }

        console.log('player:', player);
        console.log('com: ', com);
        const chosen= document.querySelector('.'+player);
        const comchoice= document.querySelector('.com'+'.'+com);
        console.log('comchoice', comchoice)
        comchoice.classList.add('chosen');
        chosen.classList.add('chosen');
        
        result.textContent= status;
        result.setAttribute("style", "font-size:36px; color:white;");
        if(status=='DRAW'){
            stat.classList.add('draw');
        } else{
            stat.classList.add('winlose')
        }
        
        option.setAttribute("style", "cursor: not-allowed;pointer-events: none;");

        //refresh button
        ref.addEventListener('click',function(e){
            //remove player selection
            chosen.classList.remove('chosen');
            option.removeAttribute("style", "cursor: not-allowed;pointer-events: none;"); 

            //remove com selection
            comchoice.classList.remove('chosen');

            //remove result details
            result.removeAttribute("style", "font-size:36px; color:white;");
            result.textContent= 'VS';
            if(status=='DRAW'){
                stat.classList.remove('draw');
            } else{
                stat.classList.remove('winlose')
            }
        })
    })
})





//crate a function to randomize computer's choice
function generateComChoice(){
    return Math.floor(Math.random()*options.length)
}


function removeBackground(){
    
}