function min (x, y) {
    if (n == 1) {
        return x; 
    } else {
    return x * min(x, y -1);
    }
}

alert (min(3,3)); 
console.log(123)