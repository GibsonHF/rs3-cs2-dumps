//
function script14749(int0: component, int1: int, int2: int, int3: int, int4: unknown_int): [int, int] {
    var int5 = 12;
    var int6 = 0;
    if ((int4 == 1)) {
        if ((MODULO(int3, 2) == 1)) {
            int6 = 2;
        };
        if (((MODULO(int3, 4) == 1) || (MODULO(int3, 4) == 2))) {
            int5 = 9;
        };
    } else if ((MODULO(int3, 2) == 1)) {
        int5 = 9;
    };
    CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(int1, int2, int6, 0);
    CC_SETFILL(1);
    CC_SETCOLOUR(script10495(int5));
    var int2 = (int2 + 8);
    return [CC_GETID(), int2];
}