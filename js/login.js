const loginForm = document.getElementById("loginForm");


function func(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username == 'nuriddin2050@gmail.com' && password == '12345678'){
        alert("Successfull")
        window.location.assign("users.html");
    }

}

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    
    errorDisplay.innerText = message;
    inputControl.classlist.add('error');
    inputControl.classlist.remove('success');
    
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classlist.add('success');
    inputControl.classlist.remove('error');

}

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    
    if (usernameValue === ''){
        setError(username, 'Username is required');
    }else {
        setSuccess(username);
    }
    
    
    if (passwordValue === '') {
        setError(password, 'Password is required')
    }else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character')
    } else {
        setSuccess(password)
    }



}


