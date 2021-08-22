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