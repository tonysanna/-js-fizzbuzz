//Programma che stampa i numeri da 1 a 100

var numIterazioni = 100;

for (var i = 0; i < numIterazioni; i++) {
    var parti = i +1;
    if (parti % 3 == 0 && parti % 5 == 0) {
        parti = "FizzBuzz";
    }
    else if (parti % 3 == 0) {
        parti = "Fizz";
    }
    else if (parti % 5 ==0) {
        parti = "Buzz";
    }
 //Numeri multipli di 3 e 5 stampa FizzBuzz,multipli di 3 stampa Fizz, multipli di 5 stampa Buzz.
    console.log(parti);
}