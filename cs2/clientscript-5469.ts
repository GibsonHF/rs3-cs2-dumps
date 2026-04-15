//
function script5469(int0: int): void {
    var int1 = (int0 + 1);
    if ((int1 >= (SPLINE_LENGTH(0) - 1))) {
        IF_SETONCAMFINISHED(callback(), comp(1161, 0));
        CAM_RESET();
        script1187();
    } else {
        CAM_MOVEALONG(0, int1, 400, 400, 1, int1);
        IF_SETONCAMFINISHED(callback(script5469, int1), comp(1161, 0));
    };
    return;
}