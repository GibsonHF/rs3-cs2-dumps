//
function script9242(int0: component, int1: int, int2: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((script9243(int0, int1) == 1)) {
        return;
    };
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    if ((IF_GETLAYER(int0) != comp(-1, 65535))) {
        var int0 = IF_GETLAYER(int0);
    };
    var int3 = script8404(int0);
    var int4 = IF_GETSCROLLY(int0);
    if (((int3 >= 0) && (int3 <= 15))) {
        int4 = (int4 - 4);
    } else if (((int3 >= (IF_GETHEIGHT(int0) - 10)) && (int3 <= IF_GETHEIGHT(int0)))) {
        int4 = (int4 + 4);
    };
    IF_SETSCROLLPOS(0, int4, int0);
    script7791(int2, int0);
    return;
}