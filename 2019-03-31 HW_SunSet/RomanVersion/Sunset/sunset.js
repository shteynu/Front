let ground = document.createElement("div");
ground.style.position = "absolute";
ground.style.top = "70vh";
ground.style.height = "30vh";
ground.style.width = "99vw";
ground.style.backgroundColor = "green";
ground.style.zIndex = 4;

let sky = document.createElement("div");
sky.style.position = "absolute";
sky.style.height = "70vh";
sky.style.width = "99vw";
sky.style.backgroundColor = "lightblue";
sky.style.zIndex = 2;

let sun = document.createElement("div");
sun.style.position = "absolute";
sun.style.height = "18vh";
sun.style.width = "18vh";
sun.style.left = "20vw";
sun.style.top = "10vh";
sun.style.backgroundColor = "yellow";
sun.style.borderRadius = "50%";
sun.style.animationName = "sunred";
sun.style.animationDuration = "13s";
sun.style.animationTimingFunction = "linear";
sun.style.zIndex = 3;
sun.style.animationFillMode = "forwards";
sun.style.filter = "blur(5px)";

let laila = document.createElement("div");
laila.style.position = "absolute";
laila.style.width = "30vw";
laila.style.top = "20vh";
laila.style.left = "35vw";
laila.style.fontSize = "72px";
laila.style.fontFamily = "Arial";
laila.style.color = "transparent";
laila.style.textAlign = "center";
laila.innerText = "!לילה טוב";
laila.style.zIndex = 5;

world.appendChild(ground);
world.appendChild(sky);
world.appendChild(sun);
world.appendChild(laila);
ground.style.animationName = "dark";
ground.style.animationDuration = "15s";
ground.style.animationTimingFunction = "ease-in";
ground.style.animationFillMode = "forwards";
sky.style.animationName = "dark";
sky.style.animationDuration = "18s";
sky.style.animationTimingFunction = "ease-in";
sky.style.animationFillMode = "forwards";
// sky.setKeyframes();

setTimeout(()=>{
    laila.style.animationName = "lailatov";
    laila.style.animationDuration = "2s";
//  laila.style.animationTimingFunction = "step-end";
    laila.style.animationFillMode = "forwards";
},17000);
