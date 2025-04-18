//why we dont admire priviously learned ways 

let myDiv=document.querySelector('#div1');

myDiv.onclick=()=>{
    console.log('console 1')
}

myDiv.onclick=()=>{
    console.log('console 2')
}

//only bye-2 is gonna console cause it override bye


//3rd way of handling event 


let div2= document.querySelector('#div2');

div2.addEventListener('click',()=>{
    console.log('console-1');
});

div2.addEventListener('click',()=>{
    console.log('console -2');
});



//all consoles run

//remove event Listeners

//for this  we have to store possible delete Listener on a variable

let div3= document.querySelector('#div3');

const event3= ('click',()=>{
    console.log('third event')
});

div3.addEventListener('click', event3);

//lets remove 

div3.removeEventListener('click',event3); //nothing will happens