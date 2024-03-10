const elemItem = document.querySelector('#categories').children;
console.log(`Number of categories: ${elemItem.length}`);

console.log(elemItem);
// elemItem.forEach(element => { 
//     ashowElement(element);
// });
    //console.log(element.querySelector('h2').textContent);    

for (const elem of elemItem) {
    showElement(elem);
}

function showElement(element) {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('.item li').length}`);
}