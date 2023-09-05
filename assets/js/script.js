/* 

Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

*/
function oraAdesso() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth() + 1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
     
    return dateTime
    
}

const clock = setInterval(timer, 1000);

function timer() {
    console.log(oraAdesso());
}
