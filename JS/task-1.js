<<<<<<< HEAD
const Categories = document.querySelector('#categories');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const elem = Categories.querySelectorAll('.item');
const length = elem.length;
console.log(`Кол-во категорий: ${length} \n`);


elem.forEach(a => {
 
  console.log('Категория : ', a.firstElementChild.textContent, '\n');
  console.log('Количество эелментов : ', a.getElementsByTagName('li').length, '\n'
  );
});
})
=======


const btn = document.querySelector('h2');

const a = btn.textContent;
console.log("Категория:", a);

const r = document.querySelectorAll('#categories');

const n = r.parentNode ;
console.log(r.children);
>>>>>>> 2ab07053790006216ad04650bc8f1fa10a94963f
