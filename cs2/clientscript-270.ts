//
function script270(int0: int, int1: component): void {
    if ((int0 <= (SPLINE_LENGTH(0) - 2))) {
        if ((int0 != (SPLINE_LENGTH(0) - 2))) {
            CAM_MOVEALONG(0, int0, 1000, 1000, 1, int0);
        } else {
            CAM_MOVEALONG(0, int0, 250, 50, 1, int0);
        };
    } else {
        IF_SETONCAMFINISHED(callback(), int1);
        return;
    };
    IF_SETONCAMFINISHED(callback(script270, MIN((SPLINE_LENGTH(0) - 1), (1 + int0)), int1), int1);
    return;
}