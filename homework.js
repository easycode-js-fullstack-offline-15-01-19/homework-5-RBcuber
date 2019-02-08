// -------------------------- Home work 5 --------------------------
// -------------------------- Кириченко Игорь --------------------------

//DOM. Задачи.

//Зная структуру html, с помощью изученных
//методов получить (в консоль):

//1 head
const head = document.head
console.log(head);


//2 body
const body = document.body
console.log(body);


//3 все дочерние элементы body и вывести их в консоль.

const bodyChild = document.body.children
console.log(bodyChild);


//4   первый div и все его дочерние узлы
//а) вывести все дочерние узлы в консоль
//б) вывести в консоль все дочерние узлы,
//кроме первого и последнего
//Для навигации по DOM использовать методы,
//которые возвращают только элементы

const firstDiv = body.firstElementChild
console.log(firstDiv);
console.log(firstDiv.children);


let arr = firstDiv.children;

for (let i = 1; i < arr.length - 1; i++) {
    console.log(arr[i]);
}


// 1. Создать функцию, которая принимает два элемента.
// Функция проверяет, является ли первый элемент родителем для второго:
/**
 * 
 * @param {DOMElement} parent 
 * @param {DOMElement} child 
 * @returns {Boolean}
 */
function checkParent(parent, child) {
    let parentElement = parent.tagName;
    if (child.closest(parentElement)) {
        return true;
    }
    return false;
}


// 2. Получить список всех ссылок, которые не находятся внутри списка ul
let link = document.getElementsByTagName('a');
let ul  = document.getElementsByTagName('ul')[0];
let arrlink = [];
for (let i = 0; i < link.length; i++ ) {
    let parentElement = ul.tagName;
    if (!link[i].closest(parentElement)) {
        arrlink.push(link[i]);
    } 
}
console.log(arrlink);


// 3. Найти элемент, который находится перед и после списка ul
let beforeUl = ul.previousElementSibling;
console.log(beforeUl);

let afterUl = ul.nextElementSibling;
console.log(afterUl);

// 4. Посчитать количество элементов li в списке
let sumLi = ul.getElementsByTagName('li').length;
console.log(sumLi);


//5 не понял что от меня требуется 
//6 не понял что от меня требуется 


//Свойства. Задачи.

//1. Найти параграф и получить его текстовое содержимое (только текст!)

console.log(document.getElementsByTagName('p')[0].innerHTML);


//2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию 
// (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0)


/** 
* @description return  DOM element
* 
* @param {Object} node 
* @returns {Object}
*/


function elementInfo (node) {

   let info = {};
   info.type = node.nodeType;
   info.name = node.tagName;

    if(node.children.length) { 
        info.childreNumber = node.children.length
    }
    else {
        info.childreNumber = 0;
    }

   return info;
}


//3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: 
// getTextFromUl(ul ---> ["Link1", "Link2", "Link3"]

let textArray = [];
let links = ul.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
    textArray.push(links[i].innerHTML);
}
 console.log(textArray);


// 4. В параграфе заменить все дочерние текстовые узлы 
// на “-text-” (вложенные теги должны остаться).Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-


let par = document.getElementsByTagName('p')[0];
let chilP = par.childNodes;
for (let i = 0; i < chilP.length; i++) {
    if (chilP[i].nodeType === 3) {
        chilP[i].data = "-text-";
    }
}
console.log(par);



// 1. Найти в коде список ul и добавить класс “list”
ul.classList.add('list');


// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let cloneUl = ul
let index = 1;

while (cloneUl) {
    cloneUl = cloneUl.nextElementSibling;
  if (cloneUl.tagName === "A") {
    cloneUl.setAttribute("id", "link");
      break;
  }
  index++;
}


//  3 На li через один (начиная с самого первого) установить класс “item”
let li = ul.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
    if (!(i % 2)) {
        li[i].classList.add('item');
    }
}


// 4. На все ссылки в примере установить класс “custom-link”

for (let i = 0; i < link.length; i++) {
    link[i].classList.add('custom-link');
}

// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:


for (let i = 0; i < 10; i++) {
    let createLi = document.createElement("li");
    createLi.classList.add('new-item');
    let num = ul.children.length + 1;
    createLi.innerHTML = "item" + num;
    ul.appendChild(createLi);
}


// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 

var ulLink = document.getElementsByClassName('list')[0].getElementsByTagName('a');
for (let i = 0; i < ulLink.length; i++) {
    let createLi = document.createElement("strong");
    ulLink[i].appendChild(createLi);
}


// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). 
// В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 

let start = body.firstChild;
let img = document.createElement('img');
img.setAttribute("src", "https://msn.mk.ua/wp-content/uploads/2018/12/js.jpg");
img.setAttribute("alt", "JS image");

body.insertBefore(img, start);



// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

let markGreen = document.getElementsByTagName('mark')[0];
markGreen.innerHTML += "green";
markGreen.classList.add('green');


// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let liCol = document.getElementsByTagName('li');
let liArr = [];

for (let i = 0; i < liCol.length; i++) {
    liArr.push(li[i].textContent);
};

liArr.sort(function (a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
});

for (let i = 0; i < liArr.length; i++) {
    liCol[i].innerHTML = liArr[i];
};