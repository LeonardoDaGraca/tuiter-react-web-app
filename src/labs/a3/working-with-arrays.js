function WorkingWithArrays(){
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];

    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    let numberArray2 = [1, 2, 3, 4, 5];
    let stringArray2 = ['string1', 'string2'];
    // adding new items
    numberArray2.push(6);
    stringArray2.push('string3');

    // remove 1 item starting on 3rd spot
    numberArray2.splice(2, 1);
    stringArray2.splice(1, 1);

    let stringArray3 = ['string1', 'string3'];
    let stringArray4 = [];
    for (let i = 0;
         i < stringArray3.length;
         i++) {
      const string1 = stringArray3[i];
      stringArray4.push(
        string1.toUpperCase());
    }
  
    let numberArray5 = [1, 2, 4, 5, 6];
    const square = a => a * a;

    const squares = numberArray5.map(square);
    const cubes = numberArray5.map(a => a * a * a);


    //const squares2 = [1, 4, 16, 25, 36];

    let stringArray5 = ['string1', 'string2', 'string3'];
    const four = numberArray1.find(a => a === 4);
    const string3 = stringArray5.find(a => a === 'string3');

    const fourIndex = numberArray5
        .findIndex(a => a === 4);
    const string3Index = stringArray3
        .findIndex(a => a === 'string3');

    const numbersGreaterThan2 = numberArray5
        .filter(a => a > 2);
    const evenNumbers = numberArray5
        .filter(a => a % 2 === 0);
    const oddNumbers = numberArray5
        .filter(a => a % 2 !== 0);
     




    return(
        <>
            <h3>Working with Arrays</h3>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
            variableArray1 = {variableArray1}<br />

            <h3>Array index and length</h3>
            length1 = {length1}<br />
            index1 = {index1}<br />

            <h3>Add and remove data to arrays</h3>
            numberArray1 = {numberArray2}<br />
            stringArray1 = {numberArray2}<br />

            <h3>Looping through arrays</h3>
            stringArray2 = {stringArray4}<br />

            <h3>Map</h3>
            squares = {squares}<br />
            cubes = {cubes}<br />

            <h3>JSON Stringify</h3>
            squares = {JSON.stringify(squares)}<br />

            <h3>Find function</h3>
            four = {four}<br />
            string3 = {string3}<br />

            <h3>FindIndex function</h3>
            fourIndex = {fourIndex}<br />
            string3Index = {string3Index}<br />

            <h3>Filter Function</h3>
            numbersGreaterThan2 = {numbersGreaterThan2}<br />
            evenNumbers = {evenNumbers}<br />
            oddNumbers = {oddNumbers}<br />
        </>
    )
}
export default WorkingWithArrays