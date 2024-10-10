const buttons = document.querySelectorAll('.button');
const body = document.querySelector('div');
buttons.forEach(function(button){
   addEventListener('click',function(e){
    console.log(e.target.id)
    if(e.target.id==='white'){
        body.style.backgroundColor='white'
    }
    if(e.target.id==='grey'){
        body.style.backgroundColor='gray'
    }
    if(e.target.id==='yellow'){
        body.style.backgroundColor='yellow'
    }
    if(e.target.id==='blue'){
        body.style.backgroundColor='blue'
    }
   })
});