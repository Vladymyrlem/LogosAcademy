   function inner_text(){
       let li = document.querySelectorAll("ul>li ");
       let span = document.getElementById("list-length");
       let root = document.getElementById('text-block').innerHTML;
let indexStart = 0;
let substrLength = Math.floor(Math.random() * (100 -10)  +10);
       for (let i = 0; i < li.length; i++) {
           let currentInput = li[i];
           // let my_root = root.split(',');

           // var str = '';
           // for(let j = 0; j < my_root.length; j++)
           // {
           //     currentInput.innerHTML = my_root.slice(i,j);
           // }
           let val = root.substring(indexStart,substrLength);
           indexStart = substrLength + 1;
           substrLength = Math.random()*(50-10) + 10;
           currentInput.innerHTML = val;

       }
       let num = li.length;
       span.innerHTML = "В данному списку знаходиться " + num + " тегів li" ;
}
