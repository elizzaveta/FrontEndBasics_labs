const inputs = ["name", "group", "idCard", "birthdate", "email"]

function submitForm(){
    clearHints()
    if(!validateFormInputs()) return false;
    displayFormData();

    document.getElementById("form").reset();
    return false;
}

function clearHints(){
    inputs.forEach(input => {
        document.getElementById(input+"Mes").style.visibility = "hidden"
        document.getElementById(input).style.border =  "solid 1px gray"
    })
}

function validateFormInputs(){
    let validationPassed = true;

    inputs.forEach(input=>{
        if(!inputValidation(input)) {
            validationPassed = false;
            displayHint(input);
        }
    })
    return validationPassed;
}


function inputValidation(inputId){
    let input = document.getElementById(inputId);
    let pattern = new RegExp(input.pattern);
    return pattern.test(input.value);
}

function displayHint(inputId){
    let input = document.getElementById(inputId);
    input.style.border = "solid 2px #ff6161"

    let div = document.getElementById(inputId+"Mes")
    div.style.visibility = "visible"
}

function displayFormData(){
    inputs.forEach(input => {
        let formInput = document.getElementById(input);
        let span = document.getElementById(input+"Span");
        span.textContent = formInput.value;
    })
}

