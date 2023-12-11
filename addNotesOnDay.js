
const addNoteButton = document.querySelector('.addNoteBtn');
const dayElements = document.querySelectorAll('.day');
const addNotes = document.querySelector(".addNotes");
const notesP = addNotes.querySelector("p");
const notesInput = addNotes.querySelector("input");
const closedNotes = document.querySelector(".closedNotes");
let activeDay = null;

dayElements.forEach(function(i) {
  i.addEventListener("click", function() {

    activeDay = i;
    let noteContainer = i.querySelector('.notes');
    addNotes.classList.remove("hidden");
    let dayNumber = i.querySelector(".number").textContent;
    notesP.innerText = `Добавить заметку на ${dayNumber}-й день`;

    notesInput.focus();
  });
});

function addNote() {
  const noteText = notesInput.value;
  if (!noteText) {
    notesInput.placeholder = "Вы не ввели текст!";
    notesInput.classList.add("animate-placeholder");
    setTimeout(function() {
      notesInput.classList.remove("animate-placeholder");
    }, 300);
    return;
  }

  if (activeDay) {
    let dayId = activeDay.getAttribute("data-id");
    let uniqueKey = `${dayId}_note_${Date.now()}`; // Создаем уникальный ключ

    let block = document.createElement("div");
    let text = document.createElement("h3");
    let deleteBlock = document.createElement("h3");
    deleteBlock.className = "deleteBlock";
    deleteBlock.innerText = "X";

    text.innerText = noteText;

    localStorage.setItem(uniqueKey, noteText); // Используем уникальный ключ

    block.appendChild(text);
    block.appendChild(deleteBlock);
    block.className = "noteTitle";

    const noteContainer = activeDay.querySelector('.notes');
    noteContainer.appendChild(block);

    deleteBlock.addEventListener("click", function(event) {
      event.stopPropagation();
      noteContainer.removeChild(block);
      localStorage.removeItem(uniqueKey); // Удаляем по уникальному ключу
    });
  }

  addNotes.classList.add("hidden");
  notesInput.value = "";
}

addNoteButton.addEventListener('click', addNote);

notesInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addNote();
  }
});

closedNotes.addEventListener("click", function() {
  addNotes.classList.add("hidden");
  notesInput.value = "";
});



function addNoteToDay(dayId, noteText) {
  let block = document.createElement("div");
  let text = document.createElement("h3");
  let deleteBlock = document.createElement("h3");
  deleteBlock.className = "deleteBlock";
  deleteBlock.innerText = "X";

  text.innerText = noteText;

  block.appendChild(text);
  block.appendChild(deleteBlock);
  block.className = "noteTitle";

  const noteContainer = document.querySelector(`[data-id="${dayId}"] .notes`);
  noteContainer.appendChild(block);

  deleteBlock.addEventListener("click", function(event) {
      event.stopPropagation();
      noteContainer.removeChild(block);
      localStorage.removeItem(dayId);
  });
}

window.addEventListener('load', function() {
  dayElements.forEach(function(day) {
    const dayId = day.getAttribute("data-id");

    // Проходим по всем записям в localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(`${dayId}_note_`)) {
        const noteText = localStorage.getItem(key);
        if (noteText) {
          addNoteToDay(dayId, noteText);
        }
      }
    }
  });
});

/// ----- 

