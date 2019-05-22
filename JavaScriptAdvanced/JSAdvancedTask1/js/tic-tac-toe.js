const Game =  (function () {
    let game_event = $('.game-event'),
    msg = $('div#result'),
        plr = "X",
        stepCnt = 0;
    let combinations = [
      [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ];
    dataX = [],
    dataZero = [];
    for (let i = 0; i < game_event.length; i++) {
        game_event[i].addEventListener('click', currentStep);
    }
    function currentStep () {
        let elem = $('.tic-tac-toe-block');
        var num =+ elem.find("data-ceil");
        if (!this.textContent) {
            this.innerText = plr;
            if(plr === "X"){
                dataX.push(num)
            }
            else{ dataZero.push(num)
            }

            if (
                (dataZero.length > 2 || dataX.length > 2) &&
                (checkWin(dataZero, num) || checkWin(dataX, num))
            ) {
                for (var i = 0; i < game_event.length; i++) {
                    game_event[i].removeEventListener("click", currentStep);
                }
                return (msg.innerText = "Победил игрок " + plr);
            }
            changePlayer();
            stepCnt++;
            stepCnt === 9
                ? (msg.innerText = "Ничья")
                : (msg.innerText = "Ходит игрок " + plr);
        }
    }
     function changePlayer() {
        if(plr === "X"){
            plr = "O"
        }else {
            plr = "X"
        }
    }
    return {

        checkWin: function (arr, number) {
            for (var w = 0, wLen = combinations.length; w < wLen; w++) {
                var someWinArr = combinations[w],
                    count = 0;
                if (someWinArr.indexOf(number) !== -1) {
                    for (var k = 0, kLen = someWinArr.length; k < kLen; k++) {
                        if (arr.indexOf(someWinArr[k]) !== -1) {
                            count++;
                            if (count === 3) {
                                return true;
                            }
                        }
                    }
                    count = 0;
                }
            }
        },

        reset: function () {
            $('#reset').on("click", function() {
                for (var i = 0; i < game_event.length; i++) {
                    game_event[i].innerText = "";
                }
                dataZero = [];
                dataX = [];
                plr = "0";
                stepCnt = 0;
                msg.innerText = "Ходит игрок " + plr;
                for (var i = 0; i < game_event.length; i++) {
                    game_event[i].addEventListener('click', currentStep);
                    game_event[i].classList.remove("x", "o");
                }
            });
        },

        // init: function () {
        //     changePlayer();
        //     checkWin();
        //     this.reset();
        //
        // }
    };

})();

Game.checkWin();
