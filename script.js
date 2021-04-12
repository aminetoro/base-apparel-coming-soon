
document.querySelector('form').addEventListener('submit',(e)=>{
 e.preventDefault();
 const email = e.target[0].value;
 const boxerror = document.querySelector('.error-message');
 const imgerror = document.querySelector('.error-btn');
 const messages = ['please provide a valid email','please enter an email'];
 if(email === ''){
    boxerror.textContent = messages[1];
    imgerror.classList.add('active');
    boxerror.classList.add('active');
 }
 else if(!validateEmail(email)){
    boxerror.textContent = messages[0];
    imgerror.classList.add('active');
     boxerror.classList.add('active');
 }else{
    boxerror.textContent = '';
    boxerror.classList.remove('active');
    imgerror.classList.remove('active');
 }
})

function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
