$(document).ready(function () {
    $(".form-1").submit(function (e) {
        e.preventDefault();

        var input = $("#input").val();
        var input2 = $("#input2").val();
        var input3 = $("#input3").val();
        var input4 = $("#input4").val();
        var input5 = $("#input5").val();

        let lowestVal = (Math.min(input, input2, input3, input4, input5));
        $("#least-value").text(lowestVal);

        let greatestVal = (Math.max(input, input2, input3, input4, input5));
        $("#greatest-value").text(greatestVal);


        let total = (parseInt(input) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5));
        $("#sum").text(total);

        let multiply = (parseInt(input) * parseInt(input2) * parseInt(input3) * parseInt(input4) * parseInt(input5));
        $("#product").text(multiply);

        let mean = total / 5;
        $("#mean-value").text(mean);

    });

    $(".form-2").submit(function (e) {
        e.preventDefault();

        var value = $("#value").val();

        function factorial(num) {

            if (parseInt(num) === 0) {
                return 1;
            } else {
                return num * factorial(num - 1);
            }
        }

        let answer = factorial(value);
        $("#factorial-value").text(answer);


    });

    $(".form-3").submit(function (e) {
        e.preventDefault();


        var number1 = $("#number-1").val();
        var number2 = $("#number-2").val();
        var result = "";


        for (var i = 1; i <= 100; i++) {
            if (i % number1 === 0 && i % number2 === 0) {
                result += "FizzBuzz  ";
            } else if (i % number1 === 0) {
                result += "Fizz  ";
            } else if (i % number2 === 0) {
                result += "Buzz  ";
            } else {
                result += i + "  ";
            }

            $("#fizz-buzz").text(result);
        }
    });

    $(".form-4").submit(function (e) {
        e.preventDefault();


        var text = $("#text").val();


        function palindromeCheck(string) {

            var lowerString = string.toLowerCase();
            var reverseString = lowerString.split('').reverse().join('');

            if (reverseString === lowerString) {
                return "it is a palindrome"
            } else {
                return "It is not a palindrome"
            }

        }

        let result = palindromeCheck(text);
        $("#word-check").text(result);

    });

});