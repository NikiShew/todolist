let day = document.querySelector(".lastDay");
let month = document.querySelector('.month');
function getCurrentMonthDays() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // Текущий месяц (январь - 0, февраль - 1, и так далее)
  
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return daysInMonth;
  }
  


  function changeMonthDays() {
    if (getCurrentMonthDays() === 30) {
        day.classList.add("hidden");
    }
  }
  changeMonthDays()


  //смотри сколько дней прошло с начала месяца , всем дня которые уже были доется класс pastDay и отключается возможность кликать на день
  function getTodayDate() {
    const now = new Date();
    const day = now.getDate();
    return day;
  }



  const daysInCurrentMonth = getCurrentMonthDays();
  const currentDay = getTodayDate();

 

 

  function addClassDays() {
    let dayInMonth = month.querySelectorAll(".day");
    dayInMonth.forEach((day) => {
      const dayNumber = parseInt(day.textContent);
      if(dayNumber < currentDay) {
        day.classList.add("pastDay");
        day.style.pointerEvents = "none";
      }

    })
    
    
  }
  // addClassDays()
  document.addEventListener("DOMContentLoaded", addClassDays)

//добавления путых блоков смотря в какой день недели начинается месяц
const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);


const firstDayOfWeek = firstDayOfMonth.getDay();

let numberOfDivsToAdd = 0;


if (firstDayOfWeek === 0) {
    numberOfDivsToAdd = 6;
} else {
    
    numberOfDivsToAdd = firstDayOfWeek;
}


for (let i = 0; i < numberOfDivsToAdd; i++) {
    const div = document.createElement('div');
    div.innerHTML = `<div class="number"></div>
                      <div class="notes"></div>`
    div.className = 'day pastDay'; 
    div.style.pointerEvents = "none";

    month.prepend(div);
}

//сегодняшняя полная дата

const today = new Date();
const year = today.getFullYear();
const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const monthes = monthNames[today.getMonth()];
const dayes = today.getDate();

const fullDate = `${dayes < 10 ? '0' : ''}${dayes} ${monthes} ${year}`;

console.log(fullDate);
document.querySelector(".today-data").innerHTML = `<h1>${fullDate}</h1>`