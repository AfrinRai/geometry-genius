function parallelogramCalculate() {
    const base = getInputValueById("base-parallelogram");
    const height = getInputValueById("height-parallelogram");

    const area = base * height;
    console.log("Area of parallelogram is = ", area);

    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputId) {
    const getInputId = document.getElementById(inputId);
    const getInputIdValue = getInputId.value;
    const inputValue = parseFloat(getInputIdValue);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}