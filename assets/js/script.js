const looper = function(x,y) {
    for (i = 0; i < x.length; i++) {
        solution = solution + y[Math.floor(Math.random * x.length)];
        return solution;
    }
}