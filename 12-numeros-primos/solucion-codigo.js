export function solution(num) {
    const primos = [];
  
    for (let i = 2; i <= num; i++) {
      let esPrimo = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          esPrimo = false;
          break;
        }
      }
      if (esPrimo) {
        primos.push(i);
      }
    }
  
    return primos;
  
  }

  console.log(solution(5));
