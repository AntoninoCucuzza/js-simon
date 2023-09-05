/* 

Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

*/


let newLesson = new Date("September 6, 2023 9:30:00").getTime();


const clock = setInterval(function () {
  let now = new Date().getTime();
  let lessonTime = newLesson - now;
  console.log(lessonTime);

  let hour = (lessonTime / (1000 * 60 * 60))
  let min = (lessonTime /(1000 * 60 ))
  console.log(min.toFixed(0));
  console.log(hour.toFixed(0));

  if (lessonTime == 0) {
    clearInterval(clock);
    alert("Inizia la lezione!");
  } 
}, 1000);