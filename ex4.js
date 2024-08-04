function squar(arr2) {
    return arr2.reduce((sum, i) => sum + i * i, 0);
    }
    const arr2 = [2,4,5,8,9,10];
    const result = squar(arr2);
    console.log("Sum of squares:", result);