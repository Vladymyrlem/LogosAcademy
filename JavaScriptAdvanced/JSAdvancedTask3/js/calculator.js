let cnt = 0;
let expressionMemory;
let ans;
let expressionIsEvaluated = true;

function Calculator() {


    if(localStorage.getItem("EXP")){
        expressionMemory = JSON.parse(localStorage.getItem("EXP"));
    }
    else{
        expressionMemory = { array: [] };
    }
    if(localStorage.getItem("ANS")){
        ans = localStorage.getItem("ANS");
    }
    else{
        ans = 0;
        localStorage.setItem("ANS", 0);
    }

    let getEqv = (selector) => $(selector).attr("data-val");
    this.getAnswer = () => $("#answer").val();
    this.getExpression = () => $("#expr").val();

    this.inputLiteral = (selector) => {
        if(expressionIsEvaluated === true){ //replaces the evaluated expressions
            $("#expr").val(function(i, expressions){
                return getEqv(selector);
            });
            expressionIsEvaluated = false;
        }
        else{
            $("#expr").val(function(i, expressions){
                return expressions + getEqv(selector);
            });
        }
    };
    this.inputOperation = (selector) => {
        if(expressionIsEvaluated === true){
            $("#expr").val(function(i, expressions){
                return $("#answer").val() + getEqv(selector)
            });
            expressionIsEvaluated = false;
        }
        else{
            $("#expr").val(function(i, expressions){
                return expressions + getEqv(selector)
            });
        }
    };

    this.inputGrouping = selector => {
        if(expressionIsEvaluated === true){
            $("#expr").val(function(i, expressions){
                return getEqv(selector)
            });
            expressionIsEvaluated = false;
        }
        else{
            $("#expr").val(function(i, expressions){
                return expressions + getEqv(selector)
            });
        }
    };

    this.parseExpression = () => {
        let expression = this.getExpression().toLowerCase();
        if(expression === ""){
            return 0;
        }
        else{
            let handle = expression.replace(/\d+/g, function(number){
                return parseInt(number, 10);
            });
            ans = localStorage.getItem("ANS");
            handle = handle.replace(/\^/g, "**");
            handle = handle.replace(/×/g, "*");
            handle = handle.replace(/÷/g, "/");
            handle = handle.replace(/sqrt\(/g, "Math.sqrt(" );
            handle = handle.replace(/cos\(/g, "Math.cos(" );
            handle = handle.replace(/sin\(/g, "Math.sin(" );
            handle = handle.replace(/tan\(/g, "Math.tan(" );
            handle = handle.replace(/ANS/g, ans);
            return handle;
        }
    };
    this.evil = (fn)=> {
        return new Function('return ' + fn)();
    };
    this.evilExpression = () =>{
        $("#answer").fadeOut(0.5);
        let exp = this.parseExpression();

        try{
            $("#answer").fadeIn(500).val(this.evil(exp));
            localStorage.setItem("ANS", this.evil(exp));
            expressionMemory.array.unshift(this.getExpression());
            localStorage.setItem("EXP", JSON.stringify(expressionMemory));
        }
        catch(err){
            expressionMemory.array.unshift(this.getExpression());
            localStorage.setItem("EXP", JSON.stringify(expressionMemory));
            $("#expressions").val("Syntax Error");
            $("#answer").val("");
        }

        cnt = 0;
        expressionIsEvaluated = true;
    };


}
let  Solution = function(){};

        /*literals*/
Solution.prototype = {

    clicks: function () {
let calc = new Calculator();
            $("#zero").click(function () {
                calc.inputLiteral("#zero");
            });

            $("#two-zero").click(function () {
                calc.inputLiteral("#two-zero");
            });
            $("#one").click(function () {
                calc.inputLiteral("#one");
            });
            $("#two").click(function () {
                calc.inputLiteral("#two");
            });
            $("#three").click(function () {
                calc.inputLiteral("#three");
            });
            $("#four").click(function () {
                calc.inputLiteral("#four");
            });
            $("#five").click(function () {
                calc.inputLiteral("#five");
            });
            $("#six").click(function () {
                calc.inputLiteral("#six");
            });
            $("#seven").click(function () {
                calc.inputLiteral("#seven");
            });
            $("#eight").click(function () {
                calc.inputLiteral("#eight");
            });
            $("#nine").click(function () {
                calc. inputLiteral("#nine");
            });

            /*operations*/
            $("#plus").click(function () {
                calc.inputOperation("#plus");
            });
            $("#minus").click(function () {
                calc.inputOperation("#minus");
            });
            $("#times").click(function () {
                calc.inputOperation("#times");
            });
            $("#divide").click(function () {
                calc.inputOperation("#divide");
            });
            $("#point").on('click',(function () {
                calc.inputOperation("#point");
            }));
            $("#exponent").click(function () {
                calc.inputOperation("#exponent");
            });
            $("#sqrt").click(function () {
                calc.inputGrouping("#sqrt");
            });
            $("#cos").click(function () {
                calc.inputGrouping("#cos");
            });
            $("#sin").click(function () {
                calc.inputGrouping("#sin");
            });
            $("#tan").click(function () {
                calc.inputGrouping("#tan");
            });
            $("#open-parenthesis").click(function () {
                calc.inputGrouping("#open-parenthesis");
            });
            $("#close-parenthesis").click(function () {
                calc.inputGrouping("#close-parenthesis");
            });
            $("#equals").click(function () {
                calc.evilExpression()
            });

            $("#delete").click(function () {
                $("#expr").val(function (i, expressions) {
                    return expressions.slice(0, expressions.length - 1);
                });
                cnt = 0;
            });


            $("#clear").click(function () {
                $("#expr").val(function (i, expressions) {
                    return "";
                });
                $("#answer").val(function (i, expressions) {
                    return "0";
                });
                cnt = 0;
            });
        },
//CALCULATOR MEMORY
prevExpression: function(){
    if(cnt < expressionMemory.array.length-1){
        $("#expressions").val(expressionMemory.array[cnt++]);
    }
    else{
        $("#expressions").val(expressionMemory.array[cnt]);
    }

},
nextExpression: function(){
    if(cnt > 0){
        $("#expressions").val(expressionMemory.array[--cnt]);
    }
    else{
        $("#expressions").val("");
    }
},
keydown: function() {
    let calc = new Calculator();
    $("body").keydown(function (e) {
            switch (e.which) {
                case 13: //ENTER
                    calc.evilExpression();
                    break;
                case 38: //KEYUP
                    this.prevExpression();
                    break;
                case 40: //KEYDOWN
                    this.nextExpression();
                    break;
                default:
                    return
            }
            e.preventDefault()
        });

    },

    init: function(){
    this.clicks();
    this.prevExpression();
    this.nextExpression();
    this.keydown();
    }
};

    solution = new Solution();
solution.init();
