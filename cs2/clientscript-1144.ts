//
function script1144(int0: component): void {
    if ((SPLINE_LENGTH(0) == 7)) {
        CAM_MOVEALONG(0, 5, 600, 400, 1, 5);
    };
    IF_SETONCAMFINISHED(callback(), int0);
    return;
}