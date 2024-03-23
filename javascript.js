let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let second = document.querySelector(".second");
setInterval(() => {
let date = new Date;
    hour.innerHTML = date.getHours();
    min.innerHTML = date.getMinutes();
    second.innerHTML = date.getSeconds();
}, 1000)
