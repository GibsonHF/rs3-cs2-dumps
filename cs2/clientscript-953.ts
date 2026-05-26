//
function script953(): void {
    var int0 = IF_GETHEIGHT(51314688);
    IF_SETSCROLLSIZE(0, 555, 51314705);
    IF_SETSCROLLSIZE(0, 555, 51314690);
    script7791(51314717, 51314705);
    script7791(51314702, 51314690);
    if ((int0 >= 550)) {
        IF_SETSIZE(0, 0, 1, 1, 51314705);
        IF_SETSIZE(0, 0, 1, 1, 51314690);
        IF_SETHIDE(1, 51314717);
        IF_SETHIDE(1, 51314702);
    } else {
        IF_SETHIDE(0, 51314717);
        IF_SETHIDE(0, 51314702);
        IF_SETSIZE(20, 0, 1, 1, 51314705);
        IF_SETSIZE(20, 0, 1, 1, 51314690);
    };
    return;
}