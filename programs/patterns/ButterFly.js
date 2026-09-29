let n = 5;

// Upper half
for(let i = 1; i <= n; i++) {
    let row = "";

    // Left stars
    for(let j = 1; j <= i; j++) {
        row += "*";
    }

    // Middle spaces
    for(let j = 1; j <= 2 * (n - i); j++) {
        row += " ";
    }

    // Right stars
    for(let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}

// Lower half
for(let i = 2; i <= n; i++) {
    let row = "";

    // Left stars
    for(let j = 1; j <= n - i + 1; j++) {
        row += "*";
    }

    // Middle spaces
    for(let j = 1; j <= 2 * (i - 1); j++) {
        row += " ";
    }

    // Right stars
    for(let j = 1; j <= n - i + 1; j++) {
        row += "*";
    }

    console.log(row);
}