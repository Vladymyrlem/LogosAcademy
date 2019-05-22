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
