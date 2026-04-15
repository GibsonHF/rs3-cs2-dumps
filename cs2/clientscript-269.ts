//
function script269(int0: int, int1: component): void {
    if ((int0 <= (SPLINE_LENGTH(0) - 2))) {
        CAM_MOVEALONG(0, int0, 1500, 1500, 1, int0);
    } else {
        IF_SETONCAMFINISHED(callback(), int1);
        CAM_SMOOTHRESET();
        script675();
        return;
    };
    IF_SETONCAMFINISHED(callback(script269, MIN((SPLINE_LENGTH(0) - 1), (1 + int0)), int1), int1);
    return;
}