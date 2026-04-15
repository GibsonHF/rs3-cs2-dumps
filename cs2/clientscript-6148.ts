//
function script6148(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int): void {
    if ((varclient_1903 >= 3)) {
        IF_SETONCAMFINISHED(callback(), int0);
        return;
    };
    if ((int5 < (SPLINE_LENGTH(0) - 2))) {
        var int5 = (int5 + 1);
        CAM_MOVEALONG(0, int5, int4, int4, 1, 0);
        IF_SETONCAMFINISHED(callback(script6148, int0, int1, int2, int3, int4, int5), int0);
    } else {
        script6147(int0, int1, int2, int4, int3);
    };
    return;
}