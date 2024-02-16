function triangleCalculate(){
    // calculating base
    const baseInput = document.getElementById('base-input');
    const baseInputValue = baseInput.value;
    const base = parseFloat(baseInputValue);
    
    
    // calculating height
    const heightInput = document.getElementById('height-input');
    const heightInputValue = heightInput.value;
    const height = parseFloat(heightInputValue);


    // calculate triangle area
    const area = 0.5 * base * height;
    console.log("Area of triangle is = ", area);


    // display triangle area
    document.getElementById('triangle-area').innerText = area;
}

