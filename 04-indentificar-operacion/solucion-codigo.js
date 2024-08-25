function solution(results) {
    const bases = [3, 4, 5, 6, 7, 8];
    const factors = results.map((result, index) => result / bases[index]);
    const allEqual = factors.every((factor) => factor === factors[0]);
    return allEqual ? factors[0] : false;
}

console.log(solution([27, 36, 45, 54, 63, 72]));
console.log(solution([27, 36, 45, 54, 42, 72]));