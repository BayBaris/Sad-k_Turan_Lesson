const getAverage = (a: number,b: number,c?: number) :string =>/*Return edilen değerin tipini belirliyoruz*/
{
    let total = a+b;
    let count = 2;

    if(typeof c !== "undefined"){
        total += c;
        count++;
    }

    const result = total / count;
    return "result: " + result;
}
// ? ile son değerin isteğe bağlı olduğunu belirtiyoruz. 
getAverage(10,20,30);
getAverage(10,20);


const getAverage2 = (...a: number[]) :string => {
    let total = 0;
    let count = 0;

    for(let i = 0; i < a.length; i++){
        total += a[i];
        count++;
    }

    const result = total / count;
    return "result: " + result;
}

getAverage2(1,2,3,12,22,2,32,23,2,123,2);