 //implement this
 function WorkingWithFunctions(){
    function add(a, b){
        return a + b;
    }
    const twoPlusFour = add(2, 4);
    console.log(twoPlusFour);

    const subtract = (a, b) => {return a - b;}
    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);

    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    const square = a => a * a;
    const plusOne = a => a + 1;

    const twoSquared = square(2);
    const threePlusOne = plusOne(3)
    
    return(
        <>
            <h2>Functions</h2>
            <h3>Legacy ES5 functions</h3>
            twoPlusFour = { twoPlusFour }<br />
            add(2, 4) = { add(2, 4) }<br />

            <h3>New ES6 arrow functions</h3>
            threeMinusOne = {threeMinusOne}<br />
            subtract(3, 1) = {subtract(3, 1)}<br />

            <h3>Implied return</h3>
            fourTimesFive = {fourTimesFive}<br />
            multiply(4, 5) = {multiply(4, 5)}<br />

            <h3>Paranthesis and parameters</h3>
            twoSquared = {twoSquared}<br/>
            square(2) = {square(2)}<br />
            threePlusOne = {threePlusOne}<br />
            plusOne(3) = {plusOne(3)}<br />
        </>
    )
 }
 export default WorkingWithFunctions