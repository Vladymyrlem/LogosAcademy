'use strict';
// function createNestedList(data) {
//     const ul = document.createElement('ul');
//     ul.classList.add('list');
// ul.id = "list";
//     data.forEach(n => {
//         const
//             li = document.createElement('li');
//             const div = document.createElement('div');
//
//         const input = document.createElement('input');
//         input.type = "button";
//         input.classList.add('add');
//             for(let i = 1;i<treeData.length; i++) {
//                 input.id = 'add' + i;
//             }
//
//         input.onclick = function () {
//                 let ul = document.getElementById('list');
//                 let li = document.createElement('li');
//
//             var parent = ul.parentNode;
//             var next = ul.nextSibling;
//             if (next) {
//                 return parent.insertBefore(li, next);
//             } else {
//                 return parent.appendChild(li);
//             }
//             };
//         function insertAfter(elem, refElem) {
//             var parent = refElem.parentNode;
//             var next = refElem.nextSibling;
//             if (next) {
//                 return parent.insertBefore(elem, next);
//             } else {
//                 return parent.appendChild(elem);
//             }
//         }
//         div.textContent = n.title;
//         li.appendChild(div);
//         li.style.listStyleType = 'none';
//         li.firstElementChild.style.display = 'inline-block';
//         li.firstChild.style.content = '';
//         li.firstElementChild.appendChild(input);
//
//         if (n.children instanceof Array && n.children.length) {
//             li.appendChild(createNestedList(n.children));
//         }
//
//         ul.appendChild(li);
//     });
//
//     return ul;
// }
//
//
//
// document.querySelector('body').appendChild(createNestedList(treeData));
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
                        "style.css":{}
                    }
            },
        "lang":{}
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



(
    function() {
    var ul = document.querySelectorAll('.treeline > li:not(:only-child) ul, .treeline ul ul');
    for (var i = 0; i < ul.length; i++) {
        var div = document.createElement('div');
        div.className = 'drop';
        div.innerHTML = '+'; // картинки лучше выравниваются, т.к. символы на одном браузере ровно выглядят, на другом — чуть съезжают
        ul[i].parentNode.insertBefore(div, ul[i].previousSibling);
        div.onclick = function() {
            this.innerHTML = (this.innerHTML == '+' ? '−' : '+');
            this.className = (this.className == 'drop' ? 'drop dropM' : 'drop');
        }
    }
})();
