//declare the buttons

class relatedButtons{
    constructor(){
        this.btns = document.querySelectorAll('.btn');

    }
}

const btns= document.querySelectorAll('.btn');
const result = document.getElementById('result');
const player1= document.querySelectorAll('player1');
const combg = document.querySelectorAll('.com');
const vs = document.querySelector('.refresh');
const stat= document.querySelector('.status');
const ref= document.querySelector('.ref');
const option= document.querySelector('.Options');

btns.forEach(function(item){
    console.log(item)
    item.addEventListener('click', function(e){
        console.log(e.currentTarget.classList);
    })
})

class choices{
    constructor(player_choice){
        this.player_choice= player_choice;
        this.com_choice= this.drawChoice();
    }

    generateRandom(){
        const options = ['rock', 'paper', 'scissors'];
        Math.floor(Math.random() * options);
    }

}

class refresh{

}