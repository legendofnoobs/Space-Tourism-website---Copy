const moonButton = document.getElementById('moonBtn');
const marsButton = document.getElementById('marsBtn');
const europaButton = document.getElementById('europaBtn');
const titanButton = document.getElementById('titanBtn');
const image = document.getElementById('planetImage');
const title = document.getElementById('titleOfPlanet');
const paragraph = document.getElementById('paragraphOfPlanet');
const distance = document.getElementById('distance');
const time = document.getElementById('time');

moonButton.onclick = function(){
    title.innerHTML = "MOON";
    paragraph.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    distance.innerHTML = "384,400 KM";
    time.innerHTML = "3 DAYS";
    image.setAttribute("src","/assets/destination/image-moon.png");
    this.style.borderBottom = "2px solid white";
    marsButton.style.borderBottom = "none";
    europaButton.style.borderBottom = "none";
    titanButton.style.borderBottom = "none";
}

marsButton.onclick = function(){
    title.innerHTML = "MARS";
    paragraph.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    distance.innerHTML = "225 MIL. KM";
    time.innerHTML = "9 MONTHS";
    image.setAttribute("src","/assets/destination/image-mars.png");
    this.style.borderBottom = "2px solid white";
    moonButton.style.borderBottom = "none";
    europaButton.style.borderBottom = "none";
    titanButton.style.borderBottom = "none";
}

europaButton.onclick = function(){
    title.innerHTML = "EUROPA";
    paragraph.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    distance.innerHTML = "628 MIL. kM";
    time.innerHTML = "3 YEARS";
    image.setAttribute("src","/assets/destination/image-europa.png");
    this.style.borderBottom = "2px solid white";
    marsButton.style.borderBottom = "none";
    moonButton.style.borderBottom = "none";
    titanButton.style.borderBottom = "none";
}

titanButton.onclick = function(){
    title.innerHTML = "TITAN";
    paragraph.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    distance.innerHTML = "1.6 BIL. kM";
    time.innerHTML = "7 YEARS";
    image.setAttribute("src","/assets/destination/image-titan.png");
    this.style.borderBottom = "2px solid white";
    marsButton.style.borderBottom = "none";
    europaButton.style.borderBottom = "none";
    moonButton.style.borderBottom = "none";
}
