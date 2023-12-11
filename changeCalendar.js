let weekButton = document.querySelector(".weekButton");
let monthButton = document.querySelector('.monthButton');

function toggleActiveClass() {
    const buttons = document.querySelectorAll('.calButton');
    const calendars = document.querySelectorAll('.calendar');
  
    buttons.forEach(button => {
      button.classList.remove('activeCalButton');
    });
  
    calendars.forEach(calendar => {
      calendar.classList.add('hidden');
    });
  
    this.classList.add('activeCalButton');
    const targetClass = this.classList.contains('weekButton') ? 'week' : 'month';
    document.querySelector(`.calendar.${targetClass}`).classList.remove('hidden');
  }
  
  document.querySelectorAll('.calButton').forEach(button => {
    button.addEventListener('click', toggleActiveClass);
  });
  