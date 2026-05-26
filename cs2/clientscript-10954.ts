//
function script10954(int0: number): void {
    if ((int0 > (INV_TOTAL(93, 33968) / 10))) {
        var int0 = (INV_TOTAL(93, 33968) / 10);
    };
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), 103809238);
    if ((int0 > 0)) {
        IF_SETHIDE(1, 103809219);
    } else {
        IF_SETHIDE(0, 103809219);
    };
    return;
}