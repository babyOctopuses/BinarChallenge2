
class Player{
    constructor(){
        this.buttons= document.querySelectorAll('.btn');
    }
    
    choose(){
        this.buttons.forEach(function(item){
            item.addEventListener('click', function(e){
                let choice = e.currentTarget.classList;
                let chosen = document.querySelector('.'+choice[1]);
                let option= document.querySelector('.Options');
                let finalChoice= choice[1];
                chosen.classList.add('chosen');
                option.setAttribute("style", "cursor: not-allowed;pointer-events: none;");

                let game = new Game();
                game.processLogic(finalChoice);
                game.generateResult()
                game.refresh(chosen);
                return finalChoice;
            }) 
        })    
    }
}

class Comp extends Player{
    constructor(buttons){
        super(buttons);
    } 

    generate(){
        // console.log('this.buttons', this.buttons)
        let options = ['rock', 'paper', 'scissors'];
        let com = options[Math.floor(Math.random()*options.length)];
        this._generate(com);
        return com;
    }

    _generate=(com)=>{
        const comchoice= document.querySelector('.com'+'.'+com);
        comchoice.classList.add('chosen');
    }

    removeBack(){
        const rock= document.querySelector('.com.rock');
        const paper= document.querySelector('.com.paper');
        const scissors= document.querySelector('.com.scissors');
        rock.classList.remove('chosen');
        paper.classList.remove('chosen');
        scissors.classList.remove('chosen');
    }
}

class Game{
    constructor(){
        this.result = document.getElementById('result');
        this.stat= document.querySelector('.status');
        this.ref= document.querySelector('.ref');
        this.option= document.querySelector('.Options');
    }


    declarePlayer(){
        let Player1= new Player();
        let choice= Player1.choose();
        return choice;
    }

    declareCom(){
        let Com = new Comp();
        let com= Com.generate();
        return com;
    }

    generateResult(){
        if(status=='DRAW'){
            this.stat.classList.add('draw');
        } else{
            this.stat.classList.add('winlose')
        }
        this.result.textContent= status;
        this.result.setAttribute("style", "font-size:36px; color:white;");
        this.option.setAttribute("style", "cursor: not-allowed;pointer-events: none;");
        // console.log('this.option generateResult', this.option)
    }


    refresh(chosen){
        let option = this.option;
        let result = this.result;
        let stat= this.stat;
        let com = new Comp();
        this.ref.addEventListener('click',function(e){
            //remove player selection
            chosen.classList.remove('chosen');
            option.removeAttribute("style", "cursor: not-allowed;pointer-events: none;"); 

            //remove result details
            result.removeAttribute("style", "font-size:36px; color:white;");
            result.textContent= 'VS';
            if(status=='DRAW'){
                stat.classList.remove('draw');
            } else{
                stat.classList.remove('winlose')
            }

            //remove com selection
            com.removeBack();
        })
    }

    processLogic(choice){
        
        let com = this.declareCom()
        if(choice==com){
            status='DRAW';
        }else if(com== 'scissors' && choice== 'rock'){
            status='WIN'
        }else if(com == 'paper' && choice=='rock'){
            status='LOSE'
        }else if(com== 'rock' && choice=='paper'){
            status='WIN'
        }else if(com == 'scissors' && choice== 'paper'){
            status='LOSE'
        }else if(com== 'paper' && choice== 'scissors'){
            status='WIN'
        }else if(com == 'rock' && choice== 'scissors'){
            status='LOSE'
        } 
        this.logChoices(choice, com, status);
        return status;
    }
    
    logChoices(choice, com, status){
        console.log('player:', choice);
        console.log('com: ', com);
        console.log('status: ', status)
    }

}

class polymorphism{
    MixiGenerate(obj){
        obj.generateBack = function() {
          console.log("This is polymorphism");
        }
      };
}

let player1 = new Player();
player1.choose();

let polymorphism2 = new polymorphism();
polymorphism2.MixiGenerate(player1);
player1.generateBack();