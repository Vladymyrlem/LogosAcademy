
var data = {
    "Task1": {
        "index.html": {}
    },
    "Task2":{
        "css":{
            "bootstrap.min.css":{},
            "style.css":{},
            "jquery.min.css":{}

        },
        "index.html":{},

    },
    "Task3":{

        "imgs":{
            "png": {}
        },
        "src":
            {
                "js":{},
                "css":
                    {
                        "style.css":{}}

            },
        "lng":{}
    }
};
function createTree(container, obj) {
    container.appendChild(createTreeDom(obj));
}

function createTreeDom(obj) {
    // если нет детей, то рекурсивный вызов ничего не возвращает
    // так что вложенный UL не будет создан
    if (isObjectEmpty(obj)) return;

    var ul = document.createElement('ul');
ul.classList.add('treeline');
    for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;
        let input = document.createElement('input');
        input.type = "button";
        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) li.appendChild(childrenUl);
        ul.appendChild(li);



    }

    return ul;
}


function isObjectEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}




var container = document.getElementById('tree');
createTree(container, data);
var tree = document.getElementsByTagName('ul')[0];

var treeLis = tree.getElementsByTagName('li');

/* wrap all textNodes into spans */
for (var i = 0; i < treeLis.length; i++) {
    var li = treeLis[i];
    li.id = i;
    var span = document.createElement('span');
    li.insertBefore(span, li.firstChild);
    span.insertAdjacentHTML('beforeBegin','<input type="button" class="add" value="+">');
    span.appendChild(span.nextSibling);
}

/* catch clicks on whole tree */
tree.onclick = function(event) {
    var target = event.target;
    if (target.tagName != 'SPAN') {
        return;
    }
let getid = this.id;
    console.log(getid);
    /* now we know the SPAN is clicked */
    var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
    if (!childrenContainer) return; // no children

    childrenContainer.hidden = !childrenContainer.hidden;
};
function  someFunc(){
    let val =  document.getElementById('name')
    return val;
}
document.addEventListener("click", function (e) {
console.log(someFunc())
});

