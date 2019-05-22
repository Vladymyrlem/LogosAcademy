'use strict';

var treeData = {
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

//     function NodeItem(data) {
//         this.data = data;
//
//         var container = document.createElement("li"),
//             title = container.appendChild(document.createElement("div"));
//
//         title.innerHTML = this.data.title;
//
//         this.element = container;
//     }
//
//     NodeItem.prototype = {
//         // lazy children element creation - not all nodes have children
//         getChildrenElement: function () {
//             return this._childElement = this._childElement || this.element.appendChild(document.createElement("ul"));
//         }
//     };
//
//
// // convert all nodes to NodeItem instance
//     var nodeCollection = treeData.map(function (node) {
//         return new NodeItem(node);
//     });
//
// // for faster lookup, store all nodes by their id
//     var nodesById = {};
//     for (var i = 0; i < nodeCollection.length; i++) nodesById[nodeCollection[i].data.id] = nodeCollection[i];
//     var rootNodeItemsContainer = document.createElement("ul");
//
//     for (var i = 0; i < nodeCollection.length; i++) {
//         var node = nodeCollection[i];
//         var parentElement = node.data.parentId ? nodesById[node.data.parentId].getChildrenElement() : rootNodeItemsContainer;
//         parentElement.appendChild(node.element);
//     }
//
//      document.body.appendChild(rootNodeItemsContainer);

//

// function iter(target) {
//     var ul = document.createElement('ul');
//         var li;
//
//     target.appendChild(ul);
//     return function (a) {
//         if (Array.isArray(a)) {
//             li = li || document.createElement('li');
//             a.forEach(iter(li));
//             return;
//         }
//         li = document.createElement('li');
//         li.appendChild(document.createTextNode(a));
//         ul.appendChild(li);
//     };
// }
// array.forEach(iter(document.getElementById('list-tree')));
//
// function tree_toggle(event) {
//     event = event || window.event;
//     var clickedElem = event.target || event.srcElement;
//
//     if (!hasClass(clickedElem, 'Expand')) {
//         return // клик не там
//     }
//
//     // Node, на который кликнули
//     var node = clickedElem.parentNode;
//     if (hasClass(node, 'ExpandLeaf')) {
//         return // клик на листе
//     }
//
//     // определить новый класс для узла
//     var newClass = hasClass(node, 'ExpandOpen') ? 'ExpandClosed' : 'ExpandOpen'
//     // заменить текущий класс на newClass
//     // регексп находит отдельно стоящий open|close и меняет на newClass
//     var re =  /(^|\s)(ExpandOpen|ExpandClosed)(\s|$)/;
//     node.className = node.className.replace(re, '$1'+newClass+'$3')
// }
//
//
// function hasClass(elem, className) {
//     return new RegExp("(^|\\s)"+className+"(\\s|$)").test(elem.className)
// }

    (function initTree (treeNode) {
    const FOLDER = 'FOLDER';
    const FILE = 'FILE';
    const clickFolder = folder => render(folder);

    //Создание DOM элемента
    function initChild(child) {
        const entity = document.createElement('li');
        entity.innerHTML = (child.type === FOLDER ? './' : '') + child.name;
        entity.setAttribute('class', child.type);
        entity.addEventListener(
            'click',
            () => child.type === FOLDER && clickFolder(child)
        );

        return entity;
    }

    //Создание всех DOM-элементов в папке
    function initFolder(parent) {
        const entity = document.createElement('ul');

        parent.children
            .sort(child => child.type !== FOLDER)
            .forEach(child => entity.appendChild(initChild(child)));

        return entity;
    }

    //Функция создающая возврающая дерево списка с "родителями"
    function getRoot() {
        const withParents = (child, parent) => {
            child.parent = parent;

            if (child && child.children) {
                child.children = child.children.map(
                    subchild => withParents(subchild, child)
                );
            }

            return child;
        };

        return withParents(getMockFolderData());
    }

    //Генерируем дерево списка для примера
    function getMockFolderData() {
        const rootFolder = { type: FOLDER, children: [] };
        let currentFolder = rootFolder;

        for (let size= 0; size < 25; size++) {
            currentFolder  = (
                [
                    currentFolder.parent || currentFolder,
                    ...currentFolder.children.filter(f => f.type === FOLDER)
                ]
                    .sort(() => 0.5 - Math.random())
                    .pop()
            );

            const FILE_NAMES = ["Фотки", "Любимая папка", "Разное"];
            const FOLDER_NAMES = ["photo1.png", "backup.zip", "42.jpg"];
            currentFolder.children.push(
                Math.random() < 0.5  ? {
                    type:  FOLDER,
                    name: FILE_NAMES.sort(() => Math.random() - 0.5).pop(),
                    children: []
                }  : {
                    name: FOLDER_NAMES.sort(() => Math.random() - 0.5).pop(),
                    type: FILE
                }
            );
        }

        return rootFolder;
    }

    //Рекурсивно по родителям получаем путь к папке
    function getBreadcrumbs(child, arr = []) {
        return (
            child.parent
                ? getBreadcrumbs(child.parent, [child, ...arr])
                : [child, ...arr]
        );
    }

    //Перерисовываем текущую папку
    // function render(root) {
    //     const folder = initFolder(root);
    //     const breadcrumbs = document.createElement('span');
    //
    //     getBreadcrumbs(root).forEach(child => {
    //         const breadcrumb = document.createElement('a');
    //         breadcrumb.href = "javascript:void(0)";
    //         breadcrumb.innerHTML = `${child.name || ""} ${child.type === FOLDER ? "/" : ""}`;
    //
    //         breadcrumb.addEventListener(
    //             'click',
    //             () => child.type === FOLDER && render(child)
    //         );
    //
    //         breadcrumbs.appendChild(breadcrumb);
    //     });
    //
    //     treeNode.innerHTML = "";
    //     treeNode.appendChild(breadcrumbs);
    //     treeNode.appendChild(folder);
    // }
    function render(root) {
        const breadcrumbs = document.createElement('span');
        const breadcrumbsArray = getBreadcrumbs(root);
        breadcrumbsArray .forEach(child => {
            const breadcrumb = document.createElement('a');
            breadcrumb.href = "javascript:void(0)";
            breadcrumb.innerHTML = (child.name || "") + (child.type === FOLDER ? "/" : "");
            breadcrumb.addEventListener('click', () => child.type === FOLDER && render(child));
            breadcrumbs.appendChild(breadcrumb);
        });

        treeNode.innerHTML = "";
        treeNode.appendChild(breadcrumbs);

        JSON.stringify(
            "/get-folder-content?uri=" + breadcrumbsArray.map(child => child.name).join('/'),
            rootData => treeNode.appendChild(initFolder(rootData))
        );
    }
    render(getRoot());
})(document.getElementById('tree'));
