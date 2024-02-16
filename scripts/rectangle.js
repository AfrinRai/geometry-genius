function rectangleCalculate() {
    // calculating width
    const weightInput = document.getElementById('weight-input');
    const weightInputValue = weightInput.value;
    const weight = parseFloat(weightInputValue);

    // calculating length
    const lengthInput = document.getElementById("length-input");
    const lengthInputValue = lengthInput.value;
    const length = parseFloat(lengthInputValue);

    // calculating rectangle area
    const area = weight * length ;
    console.log("Area of rectangle is = ", area);

    // Display rectangle area in webpage
    document.getElementById("rectangle-area").innerText = area;
}