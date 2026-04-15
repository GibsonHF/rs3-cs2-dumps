//
function script15590(int0: unknown_int): void {
    var int1 = comp(1513, 41);
    var int2 = comp(1513, 40);
    var int3 = ENUM_GETOUTPUTCOUNT(10849 as cs2enum);
    var int4 = (1 + int3);
    var int5 = (int4 / 2);
    if ((MODULO(int4, 2) != 0)) {
        int5 = (int5 + 1);
    };
    var int6 = ((int5 * 28) + ((int5 - 1) * 3));
    if ((script13749() == false)) {
        if (((int0 != 0) && (int0 != 4))) {
            IF_SETSCROLLPOS(0, 0, int2);
            IF_SETSIZE(0, IF_GETY(int2), 1, 1, int2);
            CC_DELETEALL(int1);
            if ((int6 > IF_GETHEIGHT(int2))) {
                IF_SETSIZE(16, IF_GETY(int2), 1, 1, int2);
                IF_SETSCROLLSIZE(0, int6, int2);
                script7791(int1, int2);
            };
        };
        script2596(GETWINDOWMODE(), script2692(), int0);
    } else {
        script2684();
    };
    return;
}