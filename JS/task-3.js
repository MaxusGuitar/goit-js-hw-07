const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


function makeGallery(imageArray) {
  const ulElement = document.querySelector('#gallery');
<<<<<<< HEAD
  ulElement.classList.add('image');
  
  ulElement.style.backgroundColor = 'violet';
  ulElement.style.display = 'flex';
  
console.log(ulElement.style);
=======
    ulElement.classList.add('image');
>>>>>>> 2ab07053790006216ad04650bc8f1fa10a94963f
  
  const markUpString = imageArray.reduce(
    (a, b) => a +  `<li><img  src="${b.url} alt="${b.alt}" width="400"></li>`,""
  );
  
    ulElement.insertAdjacentHTML('afterbegin', markUpString);
    console.log(markUpString);
}
makeGallery(images);