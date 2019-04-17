function myGuess(){
    var number = Math.ceil(Math.random() * 10) + 1;
    var yourNumber = document.getElementsByName("userInput");
    console.log(yourNumber[0].value);
    if (yourNumber[0].value == number){
        document.getElementsByClassName('resultComment')[0].innerHTML = "<h2>Yay! Way to go!</h2>";
    } else {
        document.getElementsByClassName('resultComment')[0].innerHTML = '<p>Sorry That\'s not correct. The answer is: <h2>'+number+'</h2> </p>';
    }
    //alert("you rolled "+ yourNumber[0].value);
}
