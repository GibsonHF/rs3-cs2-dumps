//
function script13258(int0: int, int1: int, int2: component, int3: component, int4: int): int {
    var int5 = 0;
    if (((int4 > 0) && (CC_FIND(int3, (int4 - 1)) == 1))) {
        int5 = (CC_GETY() + CC_GETHEIGHT());
    };
    var int6 = IF_GETWIDTH(int2);
    var int7 = 300;
    var int8 = 16;
    if ((int3 == comp(1486, 14))) {
        int7 = 350;
        var int0 = MIN(int0, int7);
        int8 = 0;
        if ((int6 < int0)) {
            int6 = MAX(int6, int0);
        };
    } else {
        int0 = MIN(int0, int7);
        int8 = 14;
        if ((int6 < (int0 + 20))) {
            int6 = (int0 + 20);
        };
    };
    IF_SETSIZE(int6, ((int5 + int1) + int8), 0, 0, int2);
    CC_CREATE(int3, 4, int4++);
    CC_SETSIZE(int0, int1, 0, 0);
    CC_SETPOSITION(0, int5, 1, 0);
    return int4;
}