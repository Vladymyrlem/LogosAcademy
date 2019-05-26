'use strict';
const array = [
    { name: 'name1', url: 'url1'},
{ name: 'name2', url: 'url1' },
[{ name: 'name1', url: 'url1'}, { name: 'name1', url: 'url1'}],
{ name: 'name3', url: 'url3' },
[{name: 'name1', url: 'url1' }, [{ name: 'name2', url: 'url1' }]
]
];
const data = {
    "Task1": {
        "index.html": {}
    },
    "Task2": {
        "css": {
            "bootstrap.min.css": {},
            "style.css": {},
            "jquery.min.css": {}

        },
        "index.html": {},

    },
    "Task3": {

        "imgs": {
            "png": {
                "image1.png": {},
                "image2.png": {},
            }
        },
        "src":
            {
                "js": {
                    "jQuery.min.js": {},
                    "bootstrap.min.js": {}
                },
                "css":
                    {
                        "style.css": {}
                    }
            },
        "lang": {}
    }
};
let data1 = [
    {name: "Task1",
        children:[
        {
            name: "index.html"
        }
    ]
    },
    {name: "Task2",
        children:[
            {
                name: "css",
                children: [
                    {name: "bootstrap.min.css"},
                    {name: "style.css"},
                    {name: "jquery.min.css"},
                    {name: "index.html"}
                ],
            }
        ]
    },
    {name: "Task3",
    children:[

            {name: "imgs",
            children:[
                {name: "png",
                children:[
                    {name: "image1.png"},
                    {name: "image2.png"}
                ]
                }
            ]
            },
        {name: "src",

            children:[
                {name: "js",
                children:[
                    {name: "jQuery.min.js"},
                    {name: "bootstrap.min.js"},
                ]
                }
        ]
        },
        {
            name: "css",
            children: [
                {name: "style.css"}
            ]
        },
        {name: "lang"}
        ]
    }
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
        if(childrenSel) opt.appendChild(childrenSel);
        select.appendChild(opt);
    }
}

// function createTreeDom(obj) {
//     // если нет детей, то рекурсивный вызов ничего не возвращает
//     // так что вложенный UL не будет создан
//     if(isObjectEmpty(obj)) return;
//
//     var ul = document.createElement('ul');
//     ul.classList.add('treeline');
//
//     for (let key in obj) {
//         let li = document.createElement('li');
//         li.classList = 'list-item';
//         li.innerHTML = key;
//         let childrenUl = createTreeDom(obj[key]);
//         if(childrenUl) li.appendChild(childrenUl);
//
//         // ul.insertAdjacentElement('beforeEnd', input);
//         ul.appendChild(li);
//
//     }
//
//     return ul;
// }
// function isObjectEmpty(obj) {
//     for (var key in obj) {
//         return false;
//     }
//     return true;
// }
/**
 * @return {string}
 */
function GetSelData(value) {
    return value
}

function GetListData() {
    var ul = document.getElementById('tree_list');
    let li = ul.getElementsByTagName('li');
    let length = ul.length;
    let msg = "";
    for (let i = 0; i<length;i++){
        msg += li.text;
    }
    return msg;
}

function createItem() {

    let sel = document.querySelectorAll('#sel-list option::selection');
    var selind = document.getElementById("sel-list").options.selectedIndex;
    let list_text = document.getElementById('name').value;
    let ul = document.getElementById('tree_list');
    let li = document.querySelectorAll('.treeline li');
    var listVal = GetListData();
    var optVal = GetSelData;
    let arr = [];
    // for (let i = 0; i < li.length; i++) {
    //     arr.push(li[i].innerHTML);

        // for (let j = 0; j < document.getElementById('sel-list').length; j++) {
        //
        //
        //         let span = document.createElement('span');
        //         span.innerHTML = sel.text;

                    var val1 = list_text.value;
                    li.forEach(function () {
                        if(optVal === val1){
                            this.style.background = 'red';
                        }
                    })

                if(optVal === listVal) {
//             var new_item = document.createElement('li');
//             new_item.innerHTML = list_text;
// // item.insertAdjacentHTML('afterBegin',list_text);
//             ul.insertAdjacentText('afterBegin', optVal);
//                     console.log('Yes')
//                 }else {
//                     console.log('No')
//                 }
       }

}




//createTree(container, data);
// createSelect(data);


function createNestedList(data) {
    const ul = document.createElement('ul');
    ul.classList.add('treeline');
    ul.id = "tree_list";
    data.forEach(n => {
        const   li = document.createElement('li');

        li.textContent = n.name;
        // li.appendChild(div);

        if (n.children instanceof Array && n.children.length) {
            li.appendChild(createNestedList(n.children));
        }

        ul.appendChild(li);
    });

    return ul;
}
function createSelectedList(data) {
    let sel = document.getElementById('sel-list');

    data.forEach(n => {
        let opt = document.createElement('option');
        opt.classList = 'opt-item';
        // opt.textContent = n.name;
         if (n.children instanceof Array && n.children.length) {
              // opt.appendChild(createSelectedList(n.children));
             for(let i = 0; i<sel.length; i++){
                 let html = "";
                 html += n.name;
                 // html += n.children;

                 opt.innerHTML = html;
             }
         }
        sel.appendChild(opt)
    });

    return sel;
}
var container = document.getElementById('tree');
container.appendChild(createNestedList(data1));
container.appendChild(createSelectedList(data1));



(function () {
    var ul = document.querySelectorAll('.treeline > li:not(:only-child) ul, .treeline ul ul');
    for (var i = 0; i < ul.length; i++) {
        var div = document.createElement('div');
        div.className = 'drop';

        div.innerHTML = '+';
        ul[i].parentNode.insertBefore(div, ul[i].previousSibling);

        div.onclick = function () {
            this.innerHTML = (this.innerHTML == '+' ? '−' : '+');
            this.className = (this.className == 'drop' ? 'drop dropM' : 'drop');
        }
    }
})();
