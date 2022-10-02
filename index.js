window.onload = initAll
var Turn_Flag =true;    //Player 1 turn
var Turn_Counter = 0;
var win_flag = false;
var win_enteries = []
function initAll(){
    
    win_flag = false;
    Turn_Counter=0;
    document.querySelector('h1').innerText = 'Player 1 Turn';
    document.querySelectorAll('.btn-default').forEach((btn)=>{
        btn.innerText = 's';
        btn.style.color = '#212628';
        btn.addEventListener('mouseover', ()=>{
            btn.style.color = '#33383F';
        }
         
    )
    btn.addEventListener('mouseleave', ()=>{
        btn.style.color = '#212628';
    })}
    
    )
}


function matchChoices(gameBoard){
    let count = 0;
    let choice = 'X';
    while (count<2){

            if (gameBoard[0][0]==choice && gameBoard[0][1]==choice && gameBoard[0][2]==choice){
                win_enteries = [1,2,3]
                return true;
            }
                
            if (gameBoard[0][0]==choice && gameBoard[1][0]==choice && gameBoard[2][0]==choice)
            {
                win_enteries = [1,4,7]
                return true;
            }
                
            if (gameBoard[0][0]==choice && gameBoard[1][1]==choice && gameBoard[2][2]==choice)
                {
                win_enteries = [1,5,9]
                return true;
            }
            if (gameBoard[0][1]==choice && gameBoard[1][1]==choice && gameBoard[2][1]==choice)
                {
                win_enteries = [2,5,8]
                return true;
            }
            if (gameBoard[0][2]==choice && gameBoard[1][2]==choice && gameBoard[2][2]==choice)
                {
                win_enteries = [3,6,9]
                return true;
            }
            if (gameBoard[0][2]==choice && gameBoard[1][1]==choice && gameBoard[2][0]==choice)
                {
                win_enteries = [3,5,7]
                return true;
            }

            if (gameBoard[1][0]==choice && gameBoard[1][1]==choice && gameBoard[1][2]==choice)
                {
                win_enteries = [4,5,6]
                return true;
            }
            if (gameBoard[2][0]==choice && gameBoard[2][1]==choice && gameBoard[2][2]==choice)
                {
                win_enteries = [7,8,9]
                return true;
            }          

        count+=1;
        choice= choice==='X'? 'O' : 'X';
    }
    return false;

}


function checkWin(){
    let game_Board = [];
    let row = []
    let count = 0;
    for(let i =1;i<=9;i++){
        row.push(document.getElementById(`btn-${i}`).innerText);
        if (count === 2){
            game_Board.push(row);
            count=-1;
            row = [];
        }
        count+=1;
    }

    return matchChoices(game_Board);
    
}



function updateTurn(){
    Turn_Counter+=1;
    let turn_Title = document.querySelector('h1');
    win_flag = checkWin();
    if(!win_flag){
        if(Turn_Counter<9){
            Turn_Flag= Turn_Flag===true?false:true;
            turn_Title.innerText = Turn_Flag===true?'Player 1 Turn':'Player 2 Turn';
        }
        else{
            turn_Title.innerText = 'Draw!';
        }

    }
    else{
    turn_Title.innerText = Turn_Flag===true?'Player 1 Won':'Player 2 Won';
    }


}


document.querySelectorAll('.btn-default').forEach((btn)=>{
    btn.addEventListener('click',(e)=>{

        if(btn.innerText==='s' && !win_flag){
            if(Turn_Flag==true)
                {
                    btn.innerText = 'X'
                    btn.style.color = '#FFD900';
                    btn.addEventListener('mouseover', ()=>{
                        btn.style.color = '#FFD900';
                    })
                    btn.addEventListener('mouseleave', ()=>{
                        btn.style.color = '#FFD900';
                    })
                }
                else{
                    btn.innerText = 'O'
                    btn.style.color = '#FA5C0C';
                    btn.addEventListener('mouseover', ()=>{
                        btn.style.color = '#FA5C0C';
                    })
                    btn.addEventListener('mouseleave', ()=>{
                        btn.style.color = '#FA5C0C';
                    })
                }
                updateTurn();
        }
         if (win_flag){
            for (let i =0;i<3;i++){
            let selectedBtn = document.getElementById(`btn-${win_enteries[i]}`);
            selectedBtn.style.color = '#38E54D';
            selectedBtn.addEventListener('mouseover', ()=>{
                selectedBtn.style.color = '#38E54D';
            })
            selectedBtn.addEventListener('mouseleave', ()=>{
                selectedBtn.style.color = '#38E54D';
            })
        }
        }

        e.preventDefault();
    })
})



document.querySelector('.reset-btn').addEventListener('click',(e)=>{
    Turn_Flag = true;
    initAll();
    e.preventDefault();
})