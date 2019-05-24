'use strict';
const data = {
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
            "png": {
                "image1.png":{},
                "image2.png":{},
        }
        },
        "src":
            {
                "js":{
                    "jQuery.min.js":{},
                    "bootstrap.min.js":{}
                },
                "css":
                    {
                        "style.css":{}
                    }
            },
        "lang":{}
    }
};
let data1 = [
        {name: "Task1"},
[
    {name: "index.html"}
    ]
    ,
    {name: "Task2"},
    [
        {name: "css"},
        [
            {name: "bootstrap.min.css"},
            {name: "style.css"},
            {name: "jquery.min.css"},
            {name: "index.html"}],
    ],
    {name: "Task3"},
    [[
        {name: "imgs"},
        [{name: "png"},
        [{name: "image1.png"},
            {name: "image2.png"}]
    ]],
    [{name: "src"},

        [{name: "js"},
            [
                {name: "jQuery.min.js"},
                {name: "bootstrap.min.js"},
            ]],
        {name: "css"},
        [
            {name: "style.css"}
        ]
    ],
    {name: "lang"}
]
];
function createTree(container, obj) {
    container.appendChild(createTreeDom(obj));
}
function createSelect(obj) {
    let select = document.getElementById('sel-list');
    for (let key in obj) {
        let opt = document.createElement('option');
        opt.className = 'opt-item';
        opt.innerHTML = key;
        let childrenSel = createSelect(obj[key]);
        if (childrenSel) opt.appendChild(childrenSel);
        select.appendChild(opt);
    }
}
function createTreeDom(obj) {
    // если нет детей, то рекурсивный вызов ничего не возвращает
    // так что вложенный UL не будет создан
     if (isObjectEmpty(obj)) return;

    var ul = document.createElement('ul');
    ul.classList.add('treeline');
    ul.id = "tree_list";
    for (let key in obj) {
        let li = document.createElement('li');
        li.classList = 'list-item';
        li.innerHTML = key;
        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) li.appendChild(childrenUl);

        // ul.insertAdjacentElement('beforeEnd', input);
        ul.appendChild(li);

    }

    return ul;
}

/**
 * @return {string}
 */
function GetSelData()
{
    // получаем индекс выбранного элемента
    let selind = document.getElementById("sel-list").options.selectedIndex;
    let optVal = document.getElementById("sel-list").options[selind].text;
    return optVal;
}
function GetListData() {
    var ul = document.getElementById('tree_list');
    let li = ul.getElementsByTagName('li');
    let list_text = li.text;
return list_text
}
function createItem(obj) {

    let sel = document.getElementById('sel-list');
    var selind = document.getElementById("sel-list").options;
    let list_text = document.getElementById('name').value;
    let ul = document.getElementById('tree_list');
    let li = document.querySelectorAll('.treeline li');
    var listVal = GetListData();
    var optVal = GetSelData();
    let arr = [];
        for (var i = 0; i < li.length; i++) {
        arr.push(li[i].innerHTML);
        }
        for (var j = 0; j < document.getElementById('sel-list').length; j++) {
        }
        selind[i].onchange = function () {


        if(optVal === listVal ) {
            var new_item = document.createElement('li');
            // let newOption = document.createElement('option');
            new_item.innerHTML = list_text;
// item.insertAdjacentHTML('afterBegin',list_text);
            ul.insertAdjacentText('afterBegin', optVal);
        }
    }
}
// document.getElementById('create').addEventListener('click',createItem);
function isObjectEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var container = document.getElementById('tree');

createTree(container, data);
createSelect(data);


( function() {
    var ul = document.querySelectorAll('.treeline > li:not(:only-child) ul, .treeline ul ul');
    for (var i = 0; i < ul.length; i++) {
        var div = document.createElement('div');
        div.className = 'drop';

        div.innerHTML = '+';
        ul[i].parentNode.insertBefore(div, ul[i].previousSibling);

        div.onclick = function() {
            this.innerHTML = (this.innerHTML == '+' ? '−' : '+');
            this.className = (this.className == 'drop' ? 'drop dropM' : 'drop');
        }
    }

})();
//////////////////

