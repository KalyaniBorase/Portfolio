// script.js

const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navList.classList.toggle('active');
});

document.getElementById('downloadbutton').addEventListener('click',function(){
    window.location.href='https://drive.google.com/file/d/1P22M78bI4nPL5m033lfYEIeqNI4xPgUy/view?usp=drivesdk';
});
document.getElementById('weather_app').addEventListener('click',function(){
    window.location.href='https://kalyaniborase.github.io/weather_app/';
});
document.getElementById('korus_info').addEventListener('click',function(){
    window.location.href='https://kalyaniborase.github.io/Korus_Info/';
});
