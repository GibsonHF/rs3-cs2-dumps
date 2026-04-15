//
function script5510(int0: component, int1: struct, int2: unknown_int): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as struct))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script9971, int0, int2, 3814, 1), int0);
    if ((IF_FIND(int0) == 1)) {
        cc_setparam(4560, int1);
    };
    if ((varbitplayer_22875 == 1)) {
        switch (int1) {
            case 21364: {
                var int1 = 40039 as struct;
                break;
            }
            case 21365: {
                int1 = 40040 as struct;
                break;
            }
            case 21366: {
                int1 = 40041 as struct;
                break;
            }
            case 21367: {
                int1 = 40042 as struct;
                break;
            }
            case 21368: {
                int1 = 40043 as struct;
                break;
            }
        };
    };
    var int3 = struct_getparam(int1, 3797);
    var int4 = struct_getparam(int1, 4405);
    if ((int4 != -1 as struct)) {
        int1 = int4;
    };
    int1 = script9984(int1, int3);
    var int5 = struct_getparam(int1, 3799);
    var int6 = struct_getparam(int1, 3798);
    var int7 = struct_getparam(int1, 3800);
    var int8 = struct_getparam(int1, 3801);
    var int9 = struct_getparam(int1, 3802);
    var int10 = struct_getparam(int1, 3803);
    var int11 = struct_getparam(int1, 3805);
    var int12 = struct_getparam(int1, 3804);
    var int13 = struct_getparam(int1, 3806);
    var int14 = struct_getparam(int1, 3808);
    var int15 = (int14 * 2);
    var int16 = 0;
    var int17 = 0;
    if ((CC_FIND(int0, 0) == 1)) {
        int17 = CC_GETTRANS();
    };
    CC_DELETEALL(int0);
    var int18 = script12611(int0);
    CC_CREATE(int0, 5, int16);
    CC_SETSIZE(int14, int14, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(int5);
    if ((int2 == 1)) {
        script12591(4, int18);
    };
    CC_SETTRANS(int17);
    int16 = (int16 + 1);
    CC_CREATE(int0, 5, int16);
    CC_SETSIZE(int15, int14, 1, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETGRAPHIC(int6);
    CC_SETTILING(true);
    if ((int2 == 1)) {
        script12591(4, int18);
    };
    CC_SETTRANS(int17);
    int16 = (int16 + 1);
    CC_CREATE(int0, 5, int16);
    CC_SETSIZE(int14, int14, 0, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    if ((int7 == -1 as graphic)) {
        CC_SETGRAPHIC(int5);
        CC_SETHFLIP(true);
    } else {
        CC_SETGRAPHIC(int7);
    };
    if ((int2 == 1)) {
        script12591(4, int18);
    };
    CC_SETTRANS(int17);
    int16 = (int16 + 1);
    CC_CREATE(int0, 5, int16);
    CC_SETSIZE(int14, int15, 0, 1);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETGRAPHIC(int8);
    CC_SETTILING(true);
    if ((int2 == 1)) {
        script12591(4, int18);
    };
    CC_SETTRANS(int17);
    int16 = (int16 + 1);
    CC_CREATE(int0, 5, int16);
    CC_SETSIZE(int15, int15, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(int9);
    CC_SETTILING(true);
    if ((int2 == 1)) {
        script12591(4, int18);
    };
    CC_SETTRANS(int17);
    int16 = (int16 + 1);
    CC_CREATE(int0, 5, int16);
    CC_SETSIZE(int14, int15, 0, 1);
    CC_SETPOSITION(0, 0, 2, 1);
    if ((int10 == -1 as graphic)) {
        CC_SETGRAPHIC(int8);
        CC_SETHFLIP(true);
    } else {
        CC_SETGRAPHIC(int10);
    };
    CC_SETTILING(true);
    if ((int2 == 1)) {
        script12591(4, int18);
    };
    CC_SETTRANS(int17);
    int16 = (int16 + 1);
    CC_CREATE(int0, 5, int16);
    CC_SETSIZE(int14, int14, 0, 0);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETGRAPHIC(int11);
    if ((int2 == 1)) {
        script12591(4, int18);
    };
    CC_SETTRANS(int17);
    int16 = (int16 + 1);
    CC_CREATE(int0, 5, int16);
    CC_SETSIZE(int15, int14, 1, 0);
    CC_SETPOSITION(0, 0, 1, 2);
    CC_SETGRAPHIC(int12);
    CC_SETTILING(true);
    if ((int2 == 1)) {
        script12591(4, int18);
    };
    CC_SETTRANS(int17);
    int16 = (int16 + 1);
    CC_CREATE(int0, 5, int16);
    CC_SETSIZE(int14, int14, 0, 0);
    CC_SETPOSITION(0, 0, 2, 2);
    if ((int13 == -1 as graphic)) {
        CC_SETGRAPHIC(int11);
        CC_SETHFLIP(true);
    } else {
        CC_SETGRAPHIC(int13);
    };
    if ((int2 == 1)) {
        script12591(4, int18);
    };
    CC_SETTRANS(int17);
    int16 = (int16 + 1);
    return;
}