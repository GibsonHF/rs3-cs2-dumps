//
function script16735(int0: int, int1: int, int2: component): void {
    if ((int1 == int0)) {
        IF_SETPOSITION(IF_GETX(int2), (IF_GETY(int2) - 1), 0, 0, int2);
        var int1 = 0;
    } else {
        int1 = (int1 + 1);
    };
    IF_SETONTIMER(callback(script16735, int0, int1, -2147483645), int2);
    return;
}