window.addEventListener('load', widthCheck);
//window.addEventListener('resize', widthCheck);


function widthCheck() {
    if(window.innerWidth >= 1200) {
        document.querySelector('img.hero-desktop').style.display = block;
        document.querySelector('.main')style.display = none
    }
    else {
        document.querySelector('img.hero-desktop').src = '';
        document.querySelector('.main').src = 'images/hero-mobile.jpg';
    }
}