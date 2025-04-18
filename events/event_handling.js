//selecting box1

let box1= document.querySelector('#box1');

//add onlick event on div
box1.onclick=()=>{
    box1.style.backgroundColor='purple';
    box1.style.color='white';
}

// access button fron box 1 and added button click 
let box2= document.querySelector('#box2');
let button1=box2.children[2];
console.log(button1);

button1.onclick=()=>{
    box2.style.backgroundColor='#09075e';
    box2.style.color='white';
    button1.style.backgroundColor='white';
    button1.style.color='#09075e';
}


let box3= document.querySelector('#box3');



box3.onmouseup = () => {
    box3.style.backgroundColor = 'green';
    box3.innerHTML= box3.innerHTML+'\n<p><i>this is the text whiched added by event listenser at js page </i></p>';
    for(let i=0;i<=10;i++){
        console.log(i)
    }

};


//event objects

box3.onclick=(e)=>{
    console.log(e);
    console.log(e.type); //which type event is this
    console.log(e.target); //where to event happen
    console.log(e.clientX) //horizonally we clicked place
    console.log(e.clientY) //vertical point where mouse clicked 
}


