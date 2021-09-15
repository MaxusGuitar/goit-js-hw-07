const input = document.querySelector('input')

input.addEventListener('keyup', e => {

  const p = document.querySelector('#name-output')
  p.textContent = e.target.value
})