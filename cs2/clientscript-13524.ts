//
function script13524(int0: int, int1: int, int2: component): void {
    var int3 = IF_GETHEIGHT(int2);
    if ((((int1 > 0) && (int3 >= int0)) || ((int1 < 0) && (int3 <= int0)))) {
        IF_SETONTIMER(callback(), int2);
        return;
    };
    IF_SETSIZE(IF_GETWIDTH(int2), (IF_GETHEIGHT(int2) + (int1 * 7)), 0, 0, int2);
    if ((IF_GETHEIGHT(int2) <= 1)) {
        IF_SETHIDE(true, int2);
    };
    return;
}