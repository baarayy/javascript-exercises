const fibonacci = function(fib) {
    fib = parseInt(fib);
    if(fib < 0) return "OOPS"
    let dp = [0 , 1];
    for(let i = 0 ; i < 50 ; i++) {
        dp.push(dp[dp.length - 2] + dp[dp.length - 1]);
    }
    return dp[fib];
};
// Do not edit below this line
module.exports = fibonacci;
