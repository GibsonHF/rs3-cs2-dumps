//
function script7706(int0: component, int1: unknown_int, int2: unknown_int): void {
    if ((int1 == 1)) {
        IF_SETCOLOUR(9895830, int0);
    } else if ((int1 == 2)) {
        IF_SETCOLOUR(16777215, int0);
    } else {
        IF_SETPOSITION((IF_GETX(int0) - 2), (IF_GETY(int0) - 2), 0, 0, comp(1047, 44));
    };
    return;
}