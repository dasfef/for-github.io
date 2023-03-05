let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "! 崔 然 雄 #+ j+ $& @ hj c y w one * & 최 돼 지 0 1 ";
let matrix = str.split("");
let font = 12;
let col = width / font;
let arr = [];

for(let i = 0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0, width, height);
    ctx.fillStyle = "#00FF00";
    ctx.font = `${font}px system-ui`;

    for(let i = 0; i < arr.length; i++){
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if(arr[i] * font > height && Math.random() > 0.975){
            arr[i] = 0;
        }
        arr[i]++;

    }
}

timer = setInterval(draw, 20);
setTime = setTimeout(timeOut, 7000);

function timeOut(){
    clearInterval(timer);
    location.href="1";
}
