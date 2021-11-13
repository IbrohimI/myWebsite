let cellBrightness;
let redColor;
let greenColor;
let blueColor;
let cell;
export function genMappedImage(canvas, pixels, mappedImage){
    for(let y = 0; y < canvas.height; y++){
        let row = [];
        for(let x = 0; x < canvas.width; x++){
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red, green, blue);
            const cell = [
                cellBrightness = brightness,
                redColor = red,
                greenColor = green,
                blueColor = blue,
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }
}

function calculateRelativeBrightness(red, green, blue){
    return Math.sqrt(
        (red * red) * 0.299 +
        (green * green) * 0.587 +
        (blue * blue) * 0.114
    )/100;
}

export function aboutPart(){
    let div = document.createElement('div');
    div.id = 'text-animation';
    div.innerHTML = '<p>Hello and Welcome to my Portfolio, I am Ibrokhim majoring in Computer Science from Old Dominion University. My areas of interest are in Front-End Development, Game Development, and Artificial Intelligence.</p>';
    document.body.appendChild(div);

    document.querySelector("#text-animation").innerHTML = document.querySelector("#text-animation").textContent.replace(/./g, "<span>$&</span>");

    let spans = document.querySelectorAll("#text-animation span");
    spanTextImg(spans);
        
}

export function skillsPart(){
    let div = document.createElement("div");
    div.id = "skills-animation";
    document.body.appendChild(div);
    ////////////////////////////////////

    let img1 = document.createElement("img");
    img1.setAttribute("src", "./Images/c++.png");
    img1.setAttribute("width", "150px");
    img1.setAttribute("height", "150px");
    document.getElementById("skills-animation").appendChild(img1);

    img1 = document.createElement("img");
    img1.setAttribute("src", "./Images/js.png");
    img1.setAttribute("width", "140px");
    img1.setAttribute("height", "140px");
    document.getElementById("skills-animation").appendChild(img1);

    img1 = document.createElement("img");
    img1.setAttribute("src", "./Images/python.png");
    img1.setAttribute("width", "160px");
    img1.setAttribute("height", "160px");
    document.getElementById("skills-animation").appendChild(img1);

    img1 = document.createElement("img");
    img1.setAttribute("src", "./Images/cSharp.png");
    img1.setAttribute("width", "180px");
    img1.setAttribute("height", "180px");
    document.getElementById("skills-animation").appendChild(img1);

    img1 = document.createElement("img");
    img1.setAttribute("src", "./Images/html.png");
    img1.setAttribute("width", "150px");
    img1.setAttribute("height", "150px");
    document.getElementById("skills-animation").appendChild(img1);

    img1 = document.createElement("img");
    img1.setAttribute("src", "./Images/css.png");
    img1.setAttribute("width", "150px");
    img1.setAttribute("height", "150px");
    document.getElementById("skills-animation").appendChild(img1);

    img1 = document.createElement("img");
    img1.setAttribute("src", "./Images/git.png");
    img1.setAttribute("width", "150px");
    img1.setAttribute("height", "150px");
    document.getElementById("skills-animation").appendChild(img1);



    let spans = document.querySelectorAll("#skills-animation img");
    spanTextImg(spans);
}

function spanTextImg(spans){
    for(let i = 0; i < spans.length; i++){
        let left = innerWidth * (Math.random() * 1);
        let top = innerHeight * (Math.random() * 1);
        if(Math.random() < 0.5){
            spans[i].style.left = "-"+left+"px";
        }
        else{
            spans[i].style.left = left+"px";
        }
        if(Math.random() < 0.5){
            spans[i].style.top = "-"+top+"px";
        }
        else{
            spans[i].style.top = top+"px";
        }
    }
}


export function contactPart(){
    let scene = document.createElement("div");
    scene.className = "scene";
    document.body.appendChild(scene);

    let carousel = document.createElement("div");
    carousel.className = "carousel";
    document.getElementsByClassName("scene")[0].appendChild(carousel);

    let image = document.createElement("img");
    image.className = "carousel_cell";
    image.id = "imageId";
    image.setAttribute("src", "./Images/photo.jpg");
    document.getElementsByClassName("carousel")[0].appendChild(image);

    let email = document.createElement("div");
    email.className = "carousel_cell";
    email.id = "emailId";
    //email.setAttribute("src", "./Images/email.png");
    email.textContent = "ibrokhim.iskandarov@gmail.com";
    document.getElementsByClassName("carousel")[0].appendChild(email);

    let tel = document.createElement("div");
    tel.className = "carousel_cell";
    tel.id = "telId";
    tel.textContent = "757-951-8974";
    //tel.setAttribute("src", "./Images/tel.png");
    document.getElementsByClassName("carousel")[0].appendChild(tel);


    let github = document.createElement("img");
    github.className = "carousel_cell";
    github.id = "githubId";
    //github.innerHTML = "GITHUB";
    github.setAttribute("src", "./Images/github.png");
    document.getElementsByClassName("carousel")[0].appendChild(github);
    document.getElementById("githubId").onclick = function () {
        location.href = "https://github.com/IbrohimI";
    };

    let id = null;
    let clickElements = document.getElementsByClassName('carousel');
    let clickElements1 = clickElements[0].children;
    let DB = {
    1: 0,
    2: -90,
    3: -180,
    4: -270,
    };

    console.log(Object.keys(DB)[0], Object.values(DB)[0]);
    let recordClicks = [];
    let recordKeys = [];
    let rotate = 0;

    recordClicks.push(Object.values(DB)[0]);
    recordKeys.push(Object.keys(DB)[0]);
    //console.log(clickElements1.length);
    // Create a dictionary which will hold clickElements1 elements as key and the degrees as values. 
    for(var i = 0; i < clickElements1.length; i++) {
        clickElements1[i].addEventListener("click", bindClick(i));
    }
    function bindClick(i) {
        return function() {
            if(Object.keys(DB)[i]){
                //clickElements[0].style.transform = "rotateY(-40deg)"; // This was initial commit
                // After animation the carrousel is set back to its initial position.
                // The code below will prevent this to happen
                recordClicks.push(Object.values(DB)[i]);
                recordKeys.push(Object.keys(DB)[i]);
                
                rotate = recordClicks[recordClicks.length - 2];
                //console.log(recordKeys, recordClicks);

                let clockWise = true;
                if(recordKeys[recordKeys.length - 2] < recordKeys[recordKeys.length - 1]){clockWise = true;}
                else{clockWise = false;}
                id = setInterval(frame, 10); 
                function frame(){
                    if(rotate == recordClicks[recordClicks.length - 1]){
                    clearInterval(id); // stop setinterval function
                    }
                    //console.log(recordKeys, recordClicks);
                    if(clockWise){rotate = rotate - 1;}
                    else{rotate = rotate + 1;}
                    clickElements[0].style.transform = "rotateY(" + rotate + "deg) rotateX(-25deg)";
                }
            }
        };
    }
}