//
function script7654(int0: number, int1: number): void {
    if ((int1 == 65535)) {
        IF_SETONTIMER(callback(), 82116781);
        return;
    };
    var int2 = (IF_GETX(int0) - int1);
    if ((int2 > 5)) {
        IF_SETONTIMER(callback(script9705, (0 - MIN(8, (ABS(int2) / 5)))), 82116781);
    } else if ((int2 < -5)) {
        IF_SETONTIMER(callback(script9705, MIN(8, (ABS(int2) / 5))), 82116781);
    } else {
        IF_SETONTIMER(callback(), 82116781);
    };
    return;
}