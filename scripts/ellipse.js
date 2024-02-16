function ellipseCalculate() {
    const majorAxis = getInputValueById("ellipse-major-axis");
    const minorAxis = getInputValueById("ellipse-minor-axis");
    const area = 3.1416 * majorAxis * minorAxis;
    setInnerTextById("area-ellipse", area);
}