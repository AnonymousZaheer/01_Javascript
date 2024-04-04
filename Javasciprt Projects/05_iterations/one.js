// for loop
// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// for (let i = 0; i<10; i++){
//     if (i==5){
//         console.log("5 is a good number");
//     }
//     console.log(i);
// }

//Nested Loop with continue: (Example Table)
for (let i = 1; i < 4; i++) {
    if (i==1) continue;
    for (let j = 1; j < 11; j++) {
        console.log(i + " x " + j + " = " + i*j);
    }
    console.log();
}

//Nested Loop with break: (Example Table)
for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 11; j++) {
        if (i==1) break;
        console.log(i + " x " + j + " = " + i*j);
    }
    console.log();
}

