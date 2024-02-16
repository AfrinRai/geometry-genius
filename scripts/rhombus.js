function rhombusCalculate() {
    const diagonal1 = gettingInputValueById("rhombus-diagonal1");
    const diagonal2 = gettingInputValueById("rhombus-diagonal2");

    const area = 0.5 * diagonal1 * diagonal2;
    console.log("Area of rhombus is = ", area);

    settingInnerTextById("area-rhombus", area);
}

function gettingInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function settingInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}