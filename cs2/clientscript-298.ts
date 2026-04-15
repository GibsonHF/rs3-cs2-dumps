//
function script298(int0: coordgrid, int1: coordgrid, int2: unknown_int, int3: int, int4: int, int5: component, int6: int, int7: int, int8: int, int9: int, int10: int): int {
    if ((varbitplayer_14110 == 1)) {
        return int10;
    };
    var int3 = 15777401;
    var int11 = (int10 + 1);
    var int12 = (int10 + 2);
    var int13 = 0;
    var int14 = 0;
    [int13, int14] = script296(int0, int2, int5, int6, int7, int8, int9);
    var int15 = 0;
    var int16 = 0;
    [int15, int16] = script296(int1, int2, int5, int6, int7, int8, int9);
    var int17 = (int13 + ((int15 - int13) / 2));
    var int18 = (int14 + ((int16 - int14) / 2));
    var int19 = (int15 - int13);
    var int20 = (int16 - int14);
    var int21 = 0;
    if ((int19 < 0)) {
        if ((int20 < 0)) {
            int19 = (0 - int19);
            int20 = (0 - int20);
        } else {
            int19 = (0 - int19);
            int21 = 1;
        };
    } else if ((int20 < 0)) {
        int20 = (0 - int20);
        int21 = 1;
    };
    if ((CC_FIND(int5, int10) == 1)) {
        CC_SETPOSITION((int13 + 1), (int14 + 1), 1, 1);
    } else {
        CC_CREATE(int5, 3, int10);
        CC_SETPOSITION((int13 + 1), (int14 + 1), 1, 1);
        CC_SETSIZE(int4, int4, 0, 0);
        CC_SETCOLOUR(0);
        CC_SETFILL(1);
    };
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    if ((CC_FIND(int5, int11) == 1)) {
        CC_SETPOSITION(int13, int14, 1, 1);
    } else {
        [int22, int23, int24] = script2413(int3);
        [int22, int23, int24] = [MAX((int22 - 48), 0), MAX((int23 - 48), 0), MAX((int24 - 48), 0)];
        int25 = script693(int22, int23, int24);
        CC_CREATE(int5, 3, int11);
        CC_SETPOSITION(int13, int14, 1, 1);
        CC_SETSIZE(int4, int4, 0, 0);
        CC_SETCOLOUR(int25);
        CC_SETFILL(1);
        CC_SETONMOUSEOVER(callback(script301, 1, int5, int11, -1, int12, int3));
        CC_SETONMOUSELEAVE(callback(script301, 0, int5, int11, -1, int12, int25));
        CC_SETOP(1, "Scroll map");
        CC_SETONOP(callback(script302, -2147483644, int1, int2));
    };
    if ((CC_FIND(int5, int12) == 1)) {
        CC_SETPOSITION(int17, int18, 1, 1);
        CC_SETSIZE(int19, int20, 0, 0);
    } else {
        CC_CREATE(int5, 9, int12);
        CC_SETPOSITION(int17, int18, 1, 1);
        CC_SETSIZE(int19, int20, 0, 0);
        CC_SETLINEDIRECTION(int21);
        CC_SETLINEWID((1 + (int4 / 5)));
        CC_SETCOLOUR(int3);
        CC_SETHIDE(true);
    };
    return (int12 + 1);
}