const text = document.getElementById('hade');
const btn = document.getElementById('eventbutton'); 
const body = document.getElementById('body'); 

btn.addEventListener('click' , even)

function even(){
    const colors = rebLight()
    body.style.backgroundColor = colors;
    
};

function rebLight(){
    const red = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    const black = Math.floor(Math.random()*255)
    return `rgb(${red}, ${black}, ${blue})`
}