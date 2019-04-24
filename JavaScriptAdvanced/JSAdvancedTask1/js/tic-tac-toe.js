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
        changePlayer: function () {
        plr === "X" ? (plr = "O") : (plr = "X");
    },
        currentStep:  function () {
            this.$elem = $('.tic-tac-toe-block');
            var num =+ this.$elem.find("data-ceil");
            if (!this.textContent) {
                this.innerText = plr;
                plr === "X"
                    ? dataX.push(num) && this.classList.add("x")
                    : dataZero.push(num) && this.classList.add("o");
                if (
                    (dataZero.length > 2 || dataX.length > 2) &&
                    (this.checkWin(dataZero, num) || checkWin(dataX, num))
                ) {
                    for (var i = 0; i < game_event.length; i++) {
                        game_event[i].removeEventListener("click", this.currentStep);
                    }
                    return (msg.innerText = "Победил игрок " + plr);
                }
                this.changePlayer();
                stepCnt++;
                stepCnt === 9
                    ? (msg.innerText = "Ничья")
                    : (msg.innerText = "Ходит игрок " + plr);
            }
        },
        reset: function () {
            $('#reset').on("click", function() {
                for (var i = 0; i < game_event.length; i++) {
                    game_event[i].innerText = "";
                }
                dataZero = [];
                dataX = [];
                plr = "O";
                stepCnt = 0;
                msg.innerText = "Ходит игрок " + plr;
                for (var i = 0; i < game_event.length; i++) {
                    game_event[i].on('click', this.currentStep);
                    $(this).classList.remove("x", "o");
                }
            });
        },
        init: function () {
            this.changePlayer();
            let current = this.currentStep();
            this.checkWin();
            this.reset();
            for (var i = 0; i < game_event.length; i++) {
                game_event[i].on("click", current);
            }
        }
    };
})();

Game.init();
