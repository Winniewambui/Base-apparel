const input = document.querySelector('.email-input');
const submitbutton = document.querySelector('.btn-button');

submitbutton.addEventListener('click', (e) => {   
    e.preventDefault();

    if(input.value.trim() == ''){
        error(input, 'Please provide a valid email');
    }
    else{
        success(input);
    }
});
function error (element, msg){
    element.style.border = '1px solid  hsl(0, 93%, 68%)';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visbility = 'visible';
}
function success (element){
    element.style.border = '1px solid hsl(0, 6%, 24%)';
    const parent = element.parentElement;
    const p = parent.querySelector('.errormessage');
    p.style.visbility = 'hidden';
}

