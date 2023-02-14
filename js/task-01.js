
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).


const listCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listCategoriesEl.length}`);


listCategoriesEl.forEach(function (category, index) {
    console.log('\n');
    console.log(`Category: ${listCategoriesEl[index].firstElementChild.textContent}`);
    console.log(`Elements: ${listCategoriesEl[index].lastElementChild.childElementCount}`);


});

