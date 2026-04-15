//
function script297(int0: coordgrid, int1: coordgrid, int2: unknown_int, int3: int, int4: int, int5: component, int6: int, int7: int, int8: int, int9: int, int10: int): int {
    if ((varbitplayer_14110 == 1)) {
        return int10;
    };
    var int3 = 15777401;
    var int11 = (int10 + 1);
    var int12 = (int10 + 2);
    var int13 = (int10 + 3);
    var int14 = (int10 + 4);
    var int15 = 0;
    var int16 = 0;
    [int15, int16] = script296(int0, int2, int5, int6, int7, int8, int9);
    var int17 = 0;
    var int18 = 0;
    [int17, int18] = script296(int1, int2, int5, int6, int7, int8, int9);
    var int19 = (int15 + ((int17 - int15) / 2));
    var int20 = (int16 + ((int18 - int16) / 2));
    var int21 = (int17 - int15);
    var int22 = (int18 - int16);
    var int23 = 0;
    if ((int21 < 0)) {
        if ((int22 < 0)) {
            int21 = (0 - int21);
            int22 = (0 - int22);
        } else {
            int21 = (0 - int21);
            int23 = 1;
        };
    } else if ((int22 < 0)) {
        int22 = (0 - int22);
        int23 = 1;
    };
    if (((CC_FIND(int5, int10) == 1) && (CC_FIND[1](int5, int11) == 1))) {
        CC_SETPOSITION((int15 + 1), (int16 + 1), 1, 1);
        CC_SETPOSITION[1]((int17 + 1), (int18 + 1), 1, 1);
    } else {
        CC_CREATE(int5, 3, int10);
        CC_CREATE[1](int5, 3, int11);
        CC_SETPOSITION((int15 + 1), (int16 + 1), 1, 1);
        CC_SETPOSITION[1]((int17 + 1), (int18 + 1), 1, 1);
        CC_SETSIZE(int4, int4, 0, 0);
        CC_SETSIZE[1](int4, int4, 0, 0);
        CC_SETCOLOUR(0);
        CC_SETCOLOUR[1](0);
        CC_SETFILL(1);
        CC_SETFILL[1](1);
    };
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    if (((CC_FIND(int5, int12) == 1) && (CC_FIND[1](int5, int13) == 1))) {
        CC_SETPOSITION(int15, int16, 1, 1);
        CC_SETPOSITION[1](int17, int18, 1, 1);
    } else {
        [int24, int25, int26] = script2413(int3);
        [int24, int25, int26] = [MAX((int24 - 48), 0), MAX((int25 - 48), 0), MAX((int26 - 48), 0)];
        int27 = script693(int24, int25, int26);
        CC_CREATE(int5, 3, int12);
        CC_CREATE[1](int5, 3, int13);
        CC_SETPOSITION(int15, int16, 1, 1);
        CC_SETPOSITION[1](int17, int18, 1, 1);
        CC_SETSIZE(int4, int4, 0, 0);
        CC_SETSIZE[1](int4, int4, 0, 0);
        CC_SETCOLOUR(int27);
        CC_SETCOLOUR[1](int27);
        CC_SETFILL(1);
        CC_SETFILL[1](1);
        CC_SETONMOUSEOVER(callback(script301, 1, int5, int12, int13, int14, int3));
        CC_SETONMOUSEOVER[1](callback(script301, 1, int5, int12, int13, int14, int3));
        CC_SETONMOUSELEAVE(callback(script301, 0, int5, int12, int13, int14, int27));
        CC_SETONMOUSELEAVE[1](callback(script301, 0, int5, int12, int13, int14, int27));
        CC_SETOP(1, "Scroll map");
        CC_SETOP[1](1, "Scroll map");
        CC_SETONOP(callback(script302, -2147483644, int1, int2));
        CC_SETONOP[1](callback(script302, -2147483644, int0, int2));
    };
    if ((CC_FIND(int5, int14) == 1)) {
        CC_SETPOSITION(int19, int20, 1, 1);
        CC_SETSIZE(int21, int22, 0, 0);
    } else {
        CC_CREATE(int5, 9, int14);
        CC_SETPOSITION(int19, int20, 1, 1);
        CC_SETSIZE(int21, int22, 0, 0);
        CC_SETLINEDIRECTION(int23);
        CC_SETLINEWID((1 + (int4 / 5)));
        CC_SETCOLOUR(int3);
        CC_SETHIDE(true);
    };
    return (int14 + 1);
}