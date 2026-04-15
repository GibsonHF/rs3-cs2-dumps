//
function script5891(int0: component, int1: int): void {
    if ((CLIENTCLOCK() > int1)) {
        script5892(int0);
        return;
    };
    var int2 = IF_GETWIDTH(int0);
    var int3 = IF_GETHEIGHT(int0);
    if ((int3 < 38)) {
        IF_SETSIZE((int2 + 1), (int3 + 1), 0, 0, int0);
        if ((MODULO(int2, 2) == 0)) {
            IF_SETPOSITION((IF_GETX(int0) - 1), (IF_GETY(int0) - 1), 0, 0, int0);
        };
    };
    return;
}