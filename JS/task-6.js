document.getElementById("validation-input").onblur = function () {
    
    console.log(this.value.length);
    
  if (this.getAttribute('data-length') > this.value.length) { 
    this.classList.remove('valid'); //green
    this.classList.add('invalid'); ///red
  } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
  }
};