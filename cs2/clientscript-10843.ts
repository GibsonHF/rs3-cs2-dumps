//
function script10843(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    [int1, int2, int3, int4, int5, int6, int7, int8, int9] = script2861();
    if ((((((((((int1 + int2) + int3) + int4) + int5) + int6) + int7) + int8) + int9) == 0)) {
        return;
    };
    var int10 = 0;
    var int11 = 0;
    var int12 = 109;
    while ((int10 < 122)) {
        CC_CREATE(int0, 3, int10);
        CC_SETSIZE(1, 1, 0, 0);
        if (((int11 < 8) || (int11 > 114))) {
            [int11, int12] = script8763(int1, int11, int12, 0);
        } else if ((int11 < 22)) {
            [int11, int12] = script8763(int3, int11, int12, int1);
        } else if ((int11 < 35)) {
            [int11, int12] = script8763(int2, int11, int12, int3);
        } else if ((int11 < 48)) {
            [int11, int12] = script8763(int4, int11, int12, int2);
        } else if ((int11 < 61)) {
            [int11, int12] = script8763(int5, int11, int12, int4);
        } else if ((int11 < 74)) {
            [int11, int12] = script8763(int6, int11, int12, int5);
        } else if ((int11 < 87)) {
            [int11, int12] = script8763(int7, int11, int12, int6);
        } else if ((int11 < 99)) {
            [int11, int12] = script8763(int8, int11, int12, int7);
        } else if ((int11 < 144)) {
            [int11, int12] = script8763(int9, int11, int12, int8);
        };
        CC_SETFILL(1);
        CC_SETCOLOUR(16711680);
        int10 = (int10 + 1);
    };
    return;
}