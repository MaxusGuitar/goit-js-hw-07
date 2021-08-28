const refs = {
    main: document.querySelector("input"),
    clear: document.querySelector(".style"),

}


refs.clear.addEventListener('click', write);



function write() {
    refs.main.value('');
}