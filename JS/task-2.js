const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const vegetables = ingredients.map(a => {
    const b = document.createElement('li');
    b.textContent = a;

    return b;
});
const ovosh = document.querySelector('#ingredients');
ovosh.append(...vegetables);

console.log(vegetables);
