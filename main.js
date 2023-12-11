let login = document.querySelector('.log-in');
let reg = document.querySelector(".reg");
let title = document.querySelector(".title");
let scrollToButton = document.querySelector('.scrollToButton');
let inputsLogin = document.querySelector(".inputs-login");
let inputsRegister = document.querySelector(".inputs-register");



scrollToButton.addEventListener("click", slideToBottom)

  document.addEventListener('DOMContentLoaded', function() {
    const contentSection = document.querySelector('.content');
    // const title = document.querySelector(".title");
  
    setTimeout(()=>{
      title.classList.add("title-opac");
      scrollToButton.classList.add("title-opac");
    }, 300)
    // Плавный скроллинг к контенту после задержки
    setTimeout(function() {
        contentSection.scrollIntoView({ behavior: 'smooth' });
    }, 1500); // Задержка в 1 секунду
  });

function slideToBottom() {
  const contentSection = document.querySelector('.content');
  setTimeout(function() {
    contentSection.scrollIntoView({ behavior: 'smooth' });
}, 0); // Задержка в 0 секунду
} 


