function FootGame(){
    var gkPosition = Math.floor(Math.random() * 4) + 1;

        this.first_event = function () {
//top left corner click
            $('#first-block').one('click', function () {
                $('.ball-block').animate({
                    width: 75,
                    height: 75,
                    top: 64,
                    left: 408,
                    position: 'absolute'
                }).animate({
                    top: 470
                }, {duration: 1000, easing: 'easeOutBounce'})
                $('p').css({
                    display: 'block'
                })
                $('#restart').css({
                    cursor: 'pointer'
                })
                if(gkPosition == 1) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotate(0deg)",
                        top: -66,
                        left: -250
                    })
                    setTimeout('alert("CATCH!")', 400);
                } else if(gkPosition == 2) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 250,
                        height: 178,
                        transform: "rotateY(180deg)",
                        top: -68,
                        left: 229
                    })
                    setTimeout('alert("GOAL!")', 400);
                } else if(gkPosition == 3) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotateX(180deg)",
                        top: 140,
                        left: -250
                    })
                    setTimeout('alert("GOAL!")', 400);
                } else if(gkPosition == 4) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotate(180deg)",
                        top: 130,
                        left: 290
                    })
                    setTimeout('alert("GOAL!")', 400);
                }
            });
        },

        this.second_event = function () {
            //top right corner click
            $('#second-block').one('click', function(){
                $('#ball').animate({
                    width: 75,
                    height: 75,
                    top: 64,
                    right: 434
                }).animate({
                    top: 470
                }, {duration: 1000, easing: 'easeOutBounce'})
                $('p').css({
                    display: 'block'
                })
                $('#restart').css({
                    cursor: 'pointer'
                })
                if (gkPosition == 1){
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotate(0deg)",
                        top: -66,
                        left: -250
                    })
                    setTimeout('alert("GOAL!")', 400);
                } else if (gkPosition == 2) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotateY(180deg)",
                        top: -66,
                        left: 250,
                    })
                    setTimeout('alert("CATCH!")', 400);
                } else if (gkPosition == 3) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotateX(180deg)",
                        top: 140,
                        left: -250
                    })
                    setTimeout('alert("GOAL!")', 400);
                } else if (gkPosition == 4) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotate(180deg)",
                        top: 140,
                        left: 250
                    })
                    setTimeout('alert("GOAL!")', 400);
                }
            })
        },
        this.third_event = function () {
            //bottom left corner click
            $('#third-block').one('click', function(){
                $('#ball').animate({
                    width: 75,
                    height: 75,
                    top: 390,
                    left: 405
                }).animate({
                    top: 470
                }, {duration: 700, easing: 'easeOutBounce'})
                $('p').css({
                    display: 'block'
                })
                $('#restart').css({
                    cursor: 'pointer'
                })
                if (gkPosition == 1){
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotate(0deg)",
                        top: -66,
                        left: -250
                    })
                    setTimeout('alert("GOAL!")', 400);
                } else if (gkPosition == 2) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotateY(180deg)",
                        top: -66,
                        left: 250
                    })
                    setTimeout('alert("GOAL!")', 400);
                } else if (gkPosition == 3) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotateX(180deg)",
                        top: 140,
                        left: -250
                    })
                    setTimeout('alert("CATCH!")', 400);
                } else if (gkPosition == 4) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotate(180deg)",
                        top: 140,
                        left: 250
                    })
                    setTimeout('alert("GOAL!")', 400);
                }
            })
        },
        this.fourth_event = function () {
            //bottom right corner click
            $('#fourth-block').one('click', function(){
                $('#ball').animate({
                    width: 75,
                    height: 75,
                    top: 390,
                    right: 412,
                    position: 'absolute'
                }).animate({
                    top: 470
                }, {duration: 700, easing: 'easeOutBounce'})
                $('p').css({
                    display: 'block'
                })
                $('#restart').css({
                    cursor: 'pointer'
                })
                if (gkPosition === 1){
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotate(0deg)",
                        top: -66,
                        left: -250
                    })
                    setTimeout('alert("GOAL!")', 400);
                } else if (gkPosition === 2) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotateY(180deg)",
                        top: -66,
                        left: 250
                    })
                    setTimeout('alert("GOAL!")', 400);
                } else if (gkPosition === 3) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotateX(180deg)",
                        top: 140,
                        left: -250
                    })
                    setTimeout('alert("GOAL!")', 400);
                } else if (gkPosition === 4) {
                    $('.goalkeeper').css({
                        backgroundImage: 'url(img/goalkeeper.png)',
                        width: 261,
                        height: 178,
                        transform: "rotate(180deg)",
                        top: 140,
                        left: 250
                    })
                    setTimeout('alert("CATCH!")', 400);
                }
            });

        }
}


function Game(){
    this._ball = ball;
    return {
        init: function () {
            foot = new FootGame();

            foot.first_event();
            foot.second_event();
            foot.third_event();
            foot.fourth_event();
            $('span.goals-block').click(function () {
                $('.ball-block').css('position', 'absolute')
            });
//restart
            $('#restart').on('click', function () {
                location.reload();
            });
        }
    }
};


game = new Game();
game.init();



