//
function script5599(int0: number, int1: number, int2: number, int3: number): void {
    if ((SPLINE_LENGTH(0) > (int1 + 1))) {
        CAM_MOVEALONG(0, int1, int2, int3, 1, int1);
    };
    if ((SPLINE_LENGTH(0) == (int1 + 1))) {
        IF_SETONCAMFINISHED(callback(), int0);
    } else {
        var int1 = (int1 + 1);
        IF_SETONCAMFINISHED(callback(script5599, -2147483645, int1, 2000, 2000), int0);
    };
    return;
}