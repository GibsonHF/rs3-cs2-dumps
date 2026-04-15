//
function script563(int0: component, int1: int, int2: int, int3: int): void {
    CAM_MOVEALONG(0, int1, int2, int3, 1, int1);
    if ((int1 == SPLINE_LENGTH(0))) {
        IF_SETONCAMFINISHED(callback(), int0);
    } else {
        var int1 = (int1 + 1);
        IF_SETONCAMFINISHED(callback(script563, int0, int1, 500, 500), int0);
    };
    return;
}