function solution(num) {  
    let pasos = 0    
    while (num > 1) {
    if (num % 2 === 0) {
        num = num / 2
    } else if (num % 2 != 0) {
        if ((((num + 1) / 2) % 2) != 0) {
        num--;
        } else {
        num++;
        }        
    }
    pasos++;
    }
    return pasos
}

console.log(solution(5))