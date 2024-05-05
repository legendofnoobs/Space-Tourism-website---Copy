const techButton1 = document.getElementById('techBtn1');
const techButton2 = document.getElementById('techBtn2');
const techButton3 = document.getElementById('techBtn3');
const techTypeHead = document.getElementById('techType');
const techTypeParagraph = document.getElementById('techTypeParagraph');
const image = document.getElementById('techImage');
const divPic = document.getElementById('techRightContainer');
techButton1.onclick = function(){
    techTypeHead.innerHTML = "LAUNCH VEHICLE";
    techTypeParagraph.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    image.setAttribute("src","/assets/technology/image-launch-vehicle-portrait.jpg");
    techButton1.style.backgroundColor = "rgba(255,255,255)";
    techButton1.style.color = "black";
    techButton2.style.backgroundColor = "transparent";
    techButton2.style.color = "white";
    techButton3.style.backgroundColor = "transparent";
    techButton3.style.color = "white";
}

techButton2.onclick = function(){
    techTypeHead.innerHTML = "SPACEPORT";
    techTypeParagraph.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    image.setAttribute("src","/assets/technology/image-spaceport-portrait.jpg");
    techButton2.style.backgroundColor = "rgba(255,255,255)";
    techButton2.style.color = "black";
    techButton1.style.backgroundColor = "transparent";
    techButton1.style.color = "white";
    techButton3.style.backgroundColor = "transparent";
    techButton3.style.color = "white";
}

techButton3.onclick = function(){
    techTypeHead.innerHTML = "SPACE CAPSULE";
    techTypeParagraph.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    image.setAttribute("src","/assets/technology/image-space-capsule-portrait.jpg");
    techButton3.style.backgroundColor = "rgba(255,255,255)";
    techButton3.style.color = "black";
    techButton2.style.backgroundColor = "transparent";
    techButton2.style.color = "white";
    techButton1.style.backgroundColor = "transparent";
    techButton1.style.color = "white";
}