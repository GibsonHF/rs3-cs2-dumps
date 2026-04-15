//
function script13894(int0: unknown_int, int1: component, int2: component): void {
    if ((int0 == -1)) {
        return;
    };
    var int3 = script10405(1008);
    if ((int1 == comp(-1, 65535))) {
        var int1 = script14197();
    };
    if ((IF_FIND(int1) == 1)) {
        if ((int0 == -2)) {
            CC_SETPOSITION(0, 0, 1, 1);
        } else {
            CC_SETPOSITION(-100, 0, 1, 1);
        };
        if ((int2 != comp(-1, 65535))) {
            IF_SETPOSITION((((CC_GETX() + IF_GETX(int2)) + IF_GETWIDTH(int2)) + 10), ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (315 / 2)), 0, 0, struct_getparam(int3, 3503));
        } else {
            IF_SETPOSITION((CC_GETX() + CC_GETWIDTH()), ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (315 / 2)), 0, 0, struct_getparam(int3, 3503));
        };
        IF_SETSIZE(210, 315, 0, 0, struct_getparam(int3, 3503));
    };
    if ((int1 == script14197())) {
        script14161();
    } else {
        script14164();
    };
    return;
}