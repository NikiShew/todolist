//делаем правильные числа в блоке недели 

function getFirstDayOfWeek() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // Получаем текущий день недели
    const daysUntilMonday = (currentDay === 0) ? 6 : currentDay - 1; // Вычисляем, сколько дней до понедельника
  
    const monday = new Date(currentDate);
    monday.setDate(currentDate.getDate() - daysUntilMonday); // Находим понедельник, вычитая соответствующее количество дней
  
    return monday.getDate(); // Возвращаем только число дня
  }
  
  const firstDayOfWeek = getFirstDayOfWeek();
  console.log(`Первый день недели: ${firstDayOfWeek}`);
  let weekDay = document.querySelectorAll(".weekDay");

  weekDay.forEach((day, index) => {
    let dayNumber = firstDayOfWeek + index; // Вычисляем номер дня для каждого дня недели
    day.innerHTML = `
      <div class="number">${dayNumber}</div>
      <div class="notes"></div>
    `;
  });

