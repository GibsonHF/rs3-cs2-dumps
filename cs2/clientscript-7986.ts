//
function script7986(int0: number, int1: number): void {
    if ((int0 == -1)) {
        return;
    };
    var int2 = IF_GETLAYER(int0);
    if ((int2 == -1)) {
        return;
    };
    var int3 = 0;
    var int4 = 40;
    var int5 = 21361;
    if ((MODULO(int1, 2) == 0)) {
        int3 = 2;
    };
    if (((MODULO(int1, 4) == 0) || (MODULO((int1 - 1), 4) == 0))) {
        int5 = 21362;
    };
    int4 = (int4 + (((int1 - 1) / 2) * 35));
    IF_SETPOSITION(0, int4, int3, 0, int2);
    IF_SETSIZE(346, 32, 0, 0, int2);
    var int6 = IF_GETLAYER(int2);
    if ((((((int6 != -1) && (IF_FIND(int6) == 1)) && (IF_FIND[1](int2) == 1)) && (CC_GETHIDE[1]() == 0)) && (CC_GETHEIGHT() < ((CC_GETY[1]() + CC_GETHEIGHT[1]()) + 2)))) {
        CC_SETSIZE(0, (CC_GETY[1]() + CC_GETHEIGHT[1]()), 1, 0);
        script7987(int6);
    };
    script7794(int0, int5);
    return;
}