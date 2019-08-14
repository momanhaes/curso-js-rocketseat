function pares(x, y) {
    var x, y;
    while (x <= y) {
        if (x % 2 === 0)
            console.log(`${x}`);
        x++;
    }
};

pares(11, 100);