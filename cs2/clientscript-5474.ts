//
function script5474(int0: int, int1: int): void {
    var int2 = (int0 + 1);
    if ((int2 >= (SPLINE_LENGTH(0) - 1))) {
        IF_SETONCAMFINISHED(callback(), comp(1172, 9));
    } else {
        CAM_MOVEALONG(0, int2, int1, int1, 1, int2);
        IF_SETONCAMFINISHED(callback(script5474, int2, int1), comp(1172, 9));
    };
    return;
}