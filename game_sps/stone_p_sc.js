let score = JSON.parse(localStorage.getItem('score')) || { win: 0, loses: 0, ties: 0 };

        updatescore();

        function playGame(playerMove) {
            const computerMove = pickComputerMove();
            let result = '';

            if (computerMove === playerMove) {
                result = 'TIE';
                score.ties++;
            } else if (
                (computerMove === 'Rock' && playerMove === 'Paper') ||
                (computerMove === 'Scissors' && playerMove === 'Rock') ||
                (computerMove === 'Paper' && playerMove === 'Scissors')
            ) {
                result = 'You win!';
                score.win++;
            } else {
                result = 'You lose!';
                score.loses++;
            }

            localStorage.setItem('score', JSON.stringify(score));
            updatescore();
            document.querySelector('.js-result').innerHTML = `Result: ${result}`;

            document.querySelector('.js-moves').innerHTML = `You
                <img src="${playerMove.toLowerCase()}-emoji.png" class="move-icon">
                <img src="${computerMove.toLowerCase()}-emoji.png" class="move-icon">
                computer`;
        }

        function updatescore() {
            document.querySelector('.js-score').innerHTML = 
                `Wins: ${score.win}, Losses: ${score.loses}, Ties: ${score.ties}`;
        }

        function pickComputerMove() {
            const randomNumber = Math.random();
            if (randomNumber < 1 / 3) return 'Rock';
            if (randomNumber < 2 / 3) return 'Paper';
            return 'Scissors';
        }

        let isAutoPlay = false;
        let intervalId;

        function autoplay(){
            if(!isAutoPlay){
             intervalId=   setInterval(function(){
                    const playermove=pickComputerMove();
                    playGame(playermove);
    
                },1000);
                isAutoPlay=true;
            }
            else{
                clearInterval(intervalId);
                isAutoPlay=false;
            }
            
        //    to stop auto play click again the button

        }
