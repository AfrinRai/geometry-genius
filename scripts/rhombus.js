function rhombusCalculate() {
    const diagonal1 = getInputValueById("rhombus-diagonal1");
    const diagonal2 = getInputValueById("rhombus-diagonal2");

    const area = 0.5 * diagonal1 * diagonal2;
    console.log("Area of rhombus is = ", area);

    setInnerTextById("area-rhombus", area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}