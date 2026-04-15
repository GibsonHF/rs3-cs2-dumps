//
function script5372(int0: component, int1: int): void {
    var int2 = 3;
    var int3 = ((IF_GETX(int0) + (IF_GETWIDTH(int0) / 2)) - (IF_GETWIDTH(comp(951, 14)) / 2));
    if ((int3 >= int1)) {
        IF_SETPOSITION(int1, IF_GETY(int0), 1, 0, int0);
        IF_SETONTIMER(callback(), int0);
    } else {
        IF_SETPOSITION((int3 + int2), IF_GETY(int0), 1, 0, int0);
    };
    return;
}