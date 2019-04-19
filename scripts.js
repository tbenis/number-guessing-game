function myGuess(){
    //Generated Number
    var number = Math.ceil(Math.random() * 10) + 1;
    //User's guess
    var yourNumber = document.getElementsByName("userInput");
    var resultComment = document.getElementsByClassName('resultComment');
    var iconChange = document.getElementsByClassName('icon-change');
    var error_m = document.getElementsByClassName('error-m');
    console.log(yourNumber[0].value);
    //if no guess/ valid number input
    if (!yourNumber[0].value) {
        resultComment[0].innerHTML = ""
        iconChange[0].innerHTML = "<i class=\"fas fa-exclamation-triangle\"></i> ";
        error_m[0].innerHTML = "Invalid value (HINT: Please enter a number)";
        yourNumber[0].classList.add("is-danger");
    } else if (yourNumber[0].value == number){ //if Match
        resultComment[0].innerHTML = "<h2>Yay! Way to go!</h2>";
        iconChange[0].innerHTML = "";
        error_m.innerHTML = "";
        yourNumber[0].classList.remove("is-danger");
    } else { // If no Match
        resultComment[0].innerHTML = '<h3>Sorry That\'s not correct. The answer is: <strong>'+number+'</strong> </h3>';
        iconChange[0].innerHTML = "";
        error_m[0].innerHTML = "";
        yourNumber[0].classList.remove("is-danger");
    }
    //Clear inout field regardless
    yourNumber[0].value = "";
}
