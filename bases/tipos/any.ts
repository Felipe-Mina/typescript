(() => {
    let avenger: any = 123;

    avenger = 'Doctor Strange';
    console.log((avenger as string).charAt(0));

    avenger = 234;
    console.log(avenger.toFixed(2));
})()