/* everybody knows this one!
  basically prints all numbers from 1 to 100,
  but for multiples of 3, insted of number, it should print "Fizz"
  also for multiples of 5 should print "Buzz"
  and for multiples of both print "FizzBuzz" */

// 1 - obvious solution
function fizzBuzz1() {
  for (let i = 1; i <= 100; i += 1) {
    if (i % (3 * 5) === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// 2 - little more fun 
function fizzBuzz2() {
  for (let i = 1; i <= 100; i += 1) {
    let result = '';
    result += i % 3 === 0 ? 'Fizz' : '';
    result += i % 5 === 0 ? 'Buzz' : '';
    result += result === '' ? i : '';
    console.log(result);
  }
}

//fizzBuzz1();
fizzBuzz2();
