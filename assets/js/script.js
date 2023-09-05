/* 

Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

*/


let newLesson = new Date("September 6, 2023 9:30:00").getTime();

// Scrivo l'intervallo
const clock = setInterval(function () {
  let now = new Date().getTime();
  let lessonTime = newLesson - now;
  console.log(lessonTime);
  if (lessonTime == 0) {
    clearInterval(clock);
    alert("Inizia la lezione!");
  } else {
    lessonTime--;
  }
}, 1000);