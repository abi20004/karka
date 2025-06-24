function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findFirstPrime(arr) {
  return arr.find(isPrime);
}
console.log(findFirstPrime([4, 6, 8, 9, 11, 15]));
