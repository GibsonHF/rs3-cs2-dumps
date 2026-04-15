//
function script3471(int0: component, int1: int): void {
    if ((int1 < (SPLINE_LENGTH(0) - 1))) {
        CAM_MOVEALONG(0, int1, 700, 700, 1, int1);
        IF_SETONCAMFINISHED(callback(script3471, int0, (int1 + 1)), int0);
    } else {
        IF_SETONCAMFINISHED(callback(), int0);
        CAM_SMOOTHRESET();
    };
    return;
}