let dayNight = document.querySelector(".dayNight");
let fullScreen = document.querySelector(".fullscreen");
let content = document.querySelector(".content");
let day = document.querySelectorAll('.day');
let addNote = document.querySelector(".addNotes");

//добавляем класс для ночной темы 
dayNight.addEventListener("click", () => {
    addNight(document.body)
    addNight(content);
    addNight(fullScreen);
    addDayNight(day);
    addNoteNight(addNote);

})

function addNight(item) {
    item.classList.toggle("night");
}

function addDayNight(item) {
    item.forEach(element => {
        element.classList.toggle("dayNight");
    });
}
function addNoteNight(item){
    item.classList.add("addNoteNight");
}

