//
function script8201(int0: int, int1: int, int2: component, int3: component): void {
    var int4 = IF_GETSCROLLY(int3);
    var int5 = int4;
    if ((int0 > int5)) {
        int5 = MIN((int5 + int1), int0);
    } else {
        int5 = MAX((int5 - int1), int0);
    };
    IF_SETSCROLLPOS(0, int5, int3);
    script7791(int2, int3);
    if (((int0 == int5) || (int4 == IF_GETSCROLLY(int3)))) {
        IF_SETONTIMER(callback(), int3);
    } else {
        IF_SETONTIMER(callback(script8201, int0, MAX(15, (int1 - 2)), int2, int3), int3);
    };
    return;
}