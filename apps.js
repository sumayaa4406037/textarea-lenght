var msg=document.querySelector('#msg');
var error=document.querySelector('#error');
msg.addEventListener('keyup', function(e){
    if(msg.value.length>20){
        error.innerHTML='right';
        msg.style.border='2px solid green';

    }else{
        error.innerHTML="This msg is so short. Please type long msg";
        msg.style.border='2px solid red';
    }
    if(msg.value.length==0){
        error.innerHTML='';
    }
})