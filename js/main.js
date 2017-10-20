// Variables

var openMenu = document.querySelector('.open-menu');
var closeMenu = document.querySelector('.close-menu');
var overlay = document.querySelector('header nav');
var content = document.querySelector('main');
var header = document.querySelector('.logo');


// Functions

function hideNav(){
  overlay.classList.add('js-hide');
}

function showNav(){
  overlay.classList.remove('js-hide');
}

function hideContent(){
  content.classList.add('js-hide');
}

function showContent(){
  content.classList.remove('js-hide');
}

function hideHeader(){
  header.classList.add('js-hide');
}

function showHeader(){
  header.classList.remove('js-hide');
}

// Events

openMenu.addEventListener("click", function(){
  showNav();
  hideContent();
  hideHeader();
});

closeMenu.addEventListener("click", function(){
  hideNav();
  showContent();
  showHeader();
});


// Initialize

hideNav();


