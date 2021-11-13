import { Particle } from './particles.js';
import reloadPage from './reloadPage.js';
import { genMappedImage, aboutPart, skillsPart, contactPart } from './utilFunctions.js';
const imgBackground = new Image();


imgBackground.src = "data:image/jpeg;base64,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"
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.drawImage(imgBackground, 400, 0, 500, 800);
const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

ctx.clearRect(400, 0, 500, 800);



let particleArray = [];
const numberOfParticles = 2000;

let mappedImage = [];
genMappedImage(canvas, pixels, mappedImage);

function clearParticleClass(){
    particleArray = [];
}

function init(mappedImage){
    for(let i = 0; i < numberOfParticles; i++){
        particleArray.push(new Particle(canvas, mappedImage, ctx));
    }
}

reloadPage();
init(mappedImage);
let requestWindID, requestID;
function animate(){
    //ctx.drawImage(myImages[0], 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < particleArray.length; i++)
    {
        particleArray[i].update();
        //ctx.globalAlpha = particleArray[i].speed * 0.5;
        particleArray[i].draw();
    }
    requestID = requestAnimationFrame(animate);
}
requestID = requestAnimationFrame(animate);

function animateWind(){
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < particleArray.length; i++)
    {
        particleArray[i].windEffect();
        particleArray[i].draw();
        if(particleArray[i].size <= 1){
            particleArray.splice(i, 1);
        }
    }
    requestWindID = requestAnimationFrame(animateWind);
    if(particleArray.length === 0){
        cancelAnimationFrame(requestWindID);
    }
}

let homeClicked = false;
let aboutClicked = false;
let skillsClicked = false;
let contactClicked = false;
document.getElementById("homeID").addEventListener("click", function(){
    // Add code to make wind effect
    homeClicked = true;
    if(homeClicked == true)
    {
        cancelAnimationFrame(requestID);
        cancelAnimationFrame(requestWindID);
        //document.getElementById("text-animation").remove();
        //document.getElementById("skills-animation").remove();
        homeClicked = false;
    }
    if(aboutClicked == true){
        document.getElementById("text-animation").remove();
        aboutClicked = false;
    }
    if(skillsClicked == true){
        document.getElementById("skills-animation").remove();
        skillsClicked = false;
    }
    if(contactClicked == true){
        document.getElementsByClassName("scene")[0].remove();
        contactClicked = false;
    }
    clearParticleClass();
    init(mappedImage);
    requestID = requestAnimationFrame(animate);
});
document.getElementById("aboutID").addEventListener("click", function(){
    homeClicked = true;
    if(aboutClicked == true){
        document.getElementById("text-animation").remove();
        aboutClicked = false;
    }
    aboutClicked = true;
    if(skillsClicked == true){
        document.getElementById("skills-animation").remove();
        skillsClicked = false;
    }
    if(contactClicked == true){
        document.getElementsByClassName("scene")[0].remove();
        contactClicked = false;
    }
    
    cancelAnimationFrame(requestID);
    requestWindID = requestAnimationFrame(animateWind);
    setTimeout(function(){
        aboutPart();
     }, 2000);
});
document.getElementById("skillsID").addEventListener("click", function(){
    homeClicked = true;
    if(skillsClicked == true){
        document.getElementById("skills-animation").remove();
    }
    skillsClicked = true;
    if(aboutClicked == true){
        document.getElementById("text-animation").remove();
        aboutClicked = false;
    }
    if(contactClicked == true){
        document.getElementsByClassName("scene")[0].remove();
        contactClicked = false;
    }
    cancelAnimationFrame(requestID);
    requestWindID = requestAnimationFrame(animateWind);
    setTimeout(function(){
        skillsPart();
     }, 2000);
});
document.getElementById("contactID").addEventListener("click", function(){
    homeClicked = true;
    if(aboutClicked == true){
        document.getElementById("text-animation").remove();
        aboutClicked = false;
    }
    if(skillsClicked == true){
        document.getElementById("skills-animation").remove();
        skillsClicked = false;
    }
    if(contactClicked == true){
        document.getElementsByClassName("scene")[0].remove();
        contactClicked = false;
    }
    contactClicked = true;
    setTimeout(function(){
        contactPart()}, 2000);
    cancelAnimationFrame(requestID);
    requestWindID = requestAnimationFrame(animateWind);
});

