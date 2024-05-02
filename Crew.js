const DHBtn = document.getElementById('DHcrewBtn');
const MSBtn = document.getElementById('MScrewBtn');
const VGBtn = document.getElementById('VGcrewBtn');
const AABtn = document.getElementById('AAcrewBtn');
const image = document.getElementById('crewImage');
let jobNameJs = document.getElementById('jobName');
let crewNameJs = document.getElementById('crewName');
let crewParagraphJs = document.getElementById('crewParagraph');

DHBtn.onclick = function(){
    jobNameJs.innerHTML = "COMMANDER";
    crewNameJs.innerHTML = "DOUGLAS HURLEY";
    crewParagraphJs.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    image.setAttribute('src','/assets/crew/image-douglas-hurley.png')
}

MSBtn.onclick = function(){
    jobNameJs.innerHTML = "MISSION SPECIALIST";
    crewNameJs.innerHTML = "MARK SHUTTLEWORTH";
    crewParagraphJs.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    image.setAttribute('src','/assets/crew/image-mark-shuttleworth.png')
}

VGBtn.onclick = function(){
    jobNameJs.innerHTML = "PILOT";
    crewNameJs.innerHTML = "VICTOR GLOVER";
    crewParagraphJs.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
    image.setAttribute('src','/assets/crew/image-victor-glover.png')
}

AABtn.onclick = function(){
    jobNameJs.innerHTML = "FLIGHT ENGINEER";
    crewNameJs.innerHTML = "ANOUSHEH ANSARI";
    crewParagraphJs.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    image.setAttribute('src','/assets/crew/image-anousheh-ansari.png')
}