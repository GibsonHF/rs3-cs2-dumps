//
function script14749(int0: number, int1: number, int2: number, int3: number, int4: number): [number, number] {
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