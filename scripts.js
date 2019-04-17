function myGuess(){
    //Generated Number
    var number = Math.ceil(Math.random() * 10) + 1;
    //User's guess
    var yourNumber = document.getElementsByName("userInput");
    console.log(yourNumber[0].value);
    //if no guess/ valid number input
    if (!yourNumber[0].value) {
        document.getElementsByClassName('resultComment')[0].innerHTML = ""
        document.getElementsByClassName('icon-change')[0].innerHTML = "<i class=\"fas fa-exclamation-triangle\"></i> ";
        document.getElementsByClassName('error-m')[0].innerHTML = "Invalid value (HINT: Please enter a number)";
        yourNumber[0].classList.add("is-danger");
    } else if (yourNumber[0].value == number){ //if Match
        document.getElementsByClassName('resultComment')[0].innerHTML = "<h2>Yay! Way to go!</h2>";
        document.getElementsByClassName('icon-change')[0].innerHTML = "";
        document.getElementsByClassName('error-m')[0].innerHTML = "";
        yourNumber[0].classList.remove("is-danger");
    } else { // If no Match
        document.getElementsByClassName('resultComment')[0].innerHTML = '<h3>Sorry That\'s not correct. The answer is: <strong>'+number+'</strong> </h3>';
        document.getElementsByClassName('icon-change')[0].innerHTML = "";
        document.getElementsByClassName('error-m')[0].innerHTML = "";
        yourNumber[0].classList.remove("is-danger");
    }
    //Clear inout field regardless
    yourNumber[0].value = "";
}
