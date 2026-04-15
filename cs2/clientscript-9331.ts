//
function script9331(int0: component, int1: struct, int2: component, int3: int, int4: int, int5: int, int6: int): void {
    if ((int1 == -1 as struct)) {
        return;
    };
    var int7 = struct_getparam(int1, 3867);
    if (((int7 == -1 as coordgrid) || (int7 == pos(0,0,0,0,0)))) {
        CC_DELETEALL(int0);
        IF_SETHIDE(true, int0);
        return;
    };
    IF_SETHIDE(false, int0);
    var int8 = 0;
    var int9 = 1;
    var int10 = (COORDX(int7) * int9);
    var int11 = (COORDZ(int7) * int9);
    var int12 = IF_GETWIDTH(int2);
    var int13 = IF_GETHEIGHT(int2);
    int10 = SCALE(int12, (int5 - int6), (int10 - int6));
    int11 = SCALE(int13, (int3 - int4), (int11 - int4));
    int10 = (int10 - (int12 / 2));
    int11 = ((int13 / 2) - int11);
    var int14 = struct_getparam(int1, 3881);
    var int15 = struct_getparam(int1, 3882);
    var int16 = struct_getparam(int1, 3883);
    var int17 = struct_getparam(int1, 3884);
    var int18 = struct_getparam(int1, 3885);
    var int19 = struct_getparam(int1, 3893);
    var int20 = struct_getparam(int1, 3894);
    var int21 = struct_getparam(int1, 3887);
    var int22 = struct_getparam(int1, 3888);
    var int23 = struct_getparam(int1, 3890);
    var int24 = struct_getparam(int1, 3891);
    var int25 = struct_getparam(int1, 3892);
    var int26 = struct_getparam(int1, 6291);
    var string0 = struct_getparam(int1, 3868);
    var string1 = struct_getparam(int1, 3869);
    var int27 = struct_getparam(int1, 3880);
    var int28 = (PARAWIDTH(string0, 512, 36 as fontmetrics) + (2 * int27));
    var int29 = (PARAWIDTH(string1, 512, 31 as fontmetrics) + (2 * int27));
    var int30 = struct_getparam(int1, 3889);
    var int31 = (2 * (int17 + int18));
    int31 = MAX(MAX(int31, (int28 + (2 * int17))), (int29 + (2 * int17)));
    IF_SETSIZE(int31, int30, 0, 0, int0);
    var int32 = 0;
    if ((CC_FIND(int0, int8) == 1)) {
        int32 = cc_getparam(3866);
    };
    var int33 = SCALE((int5 - int6), int12, (((int31 / 2) - int17) + (int21 / 2)));
    var int34 = SCALE((int3 - int4), int13, (int30 - int14));
    var int3 = (int3 - int34);
    var int4 = (int4 + int34);
    var int5 = (int5 - int33);
    var int6 = (int6 + int33);
    var int35 = struct_getparam(int1, 3870);
    int35 = MAX(MIN(int35, 3), 0);
    var int36 = -1 as coordgrid;
    var int37 = -1 as coordgrid;
    var int38 = -1;
    var int39 = -1;
    var int40 = -1;
    var int41 = -1;
    var int42 = 0;
    var int43 = 0;
    while (((int42 < int35) && (int43 == 0))) {
        if ((int42 == 0)) {
            int36 = struct_getparam(int1, 3871);
            int37 = struct_getparam(int1, 3872);
        } else if ((int42 == 1)) {
            int36 = struct_getparam(int1, 3873);
            int37 = struct_getparam(int1, 3874);
        } else {
            int36 = struct_getparam(int1, 3875);
            int37 = struct_getparam(int1, 3876);
        };
        if (((int36 == -1 as coordgrid) || (int37 == -1 as coordgrid))) {
            return;
        };
        if ((COORDX(int36) > COORDX(int37))) {
            int40 = (COORDX(int36) * int9);
            int41 = (COORDX(int37) * int9);
        } else {
            int40 = (COORDX(int37) * int9);
            int41 = (COORDX(int36) * int9);
        };
        if ((COORDZ(int36) > COORDZ(int37))) {
            int38 = (COORDZ(int36) * int9);
            int39 = (COORDZ(int37) * int9);
        } else {
            int38 = (COORDZ(int37) * int9);
            int39 = (COORDZ(int36) * int9);
        };
        if (((((int3 > int39) && (int4 < int38)) && (int5 > int41)) && (int6 < int40))) {
            int43 = 1;
        };
        int42 = (int42 + 1);
    };
    if ((int43 == 1)) {
        int32 = MIN((int32 + 1), 25);
    } else {
        int32 = MAX((int32 - 1), 0);
    };
    var int44 = 0;
    var int45 = MAX(25, 1);
    if ((int32 > 0)) {
        int44 = (((IF_GETWIDTH(int2) / 2) + (int31 / 2)) - SCALE((int31 - int17), int45, int32));
        if ((int10 > int44)) {
            int10 = int44;
        } else if ((int10 < (-1 * int44))) {
            int10 = (-1 * int44);
        };
        int44 = (((IF_GETHEIGHT(int2) / 2) + (int30 / 2)) - SCALE((int30 - int14), int45, int32));
        if ((int11 > int44)) {
            int11 = int44;
        } else if ((int11 < (-1 * int44))) {
            int11 = (-1 * int44);
        };
    };
    IF_SETPOSITION(int10, int11, 1, 1, int0);
    if ((CC_FIND(int0, int8) == 1)) {
        cc_setparam(3866, int32);
    } else {
        CC_CREATE(int0, 5, int8);
        CC_SETPOSITION(0, int14, 0, 0);
        CC_SETSIZE(int16, int15, 0, 0);
        CC_SETGRAPHIC(int19);
        CC_SETHFLIP(false);
        cc_setparam(3866, int32);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int0, int8) == 0)) {
        CC_CREATE(int0, 5, int8);
        CC_SETPOSITION(0, int14, 2, 0);
        CC_SETSIZE(int16, int15, 0, 0);
        CC_SETGRAPHIC(int19);
        CC_SETHFLIP(true);
    };
    var int46 = ++int8;
    if ((CC_FIND(int0, int8) == 0)) {
        CC_CREATE(int0, 5, int8);
        CC_SETPOSITION(0, struct_getparam(int1, 3886), 1, 0);
        CC_SETSIZE(int21, int22, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3896));
        CC_SETCLICKMASK(1);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int0, int8) == 0)) {
        CC_CREATE(int0, 5, int8);
        CC_SETPOSITION(int17, int14, 0, 0);
        CC_SETSIZE(int18, int15, 0, 0);
        CC_SETGRAPHIC(int20);
        CC_SETHFLIP(false);
        if ((int26 == 1)) {
            CC_SENDTOBACK();
        };
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int0, int8) == 0)) {
        CC_CREATE(int0, 5, int8);
        CC_SETPOSITION(int17, int14, 2, 0);
        CC_SETSIZE(int18, int15, 0, 0);
        CC_SETGRAPHIC(int20);
        CC_SETHFLIP(true);
        if ((int26 == 1)) {
            CC_SENDTOBACK();
        };
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int0, int8) == 0)) {
        CC_CREATE(int0, 5, int8);
        CC_SETPOSITION((int17 + int18), int14, 0, 0);
        CC_SETSIZE((2 * (int17 + int18)), int15, 1, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3895));
        CC_SETTILING(true);
        if ((int26 == 1)) {
            CC_SENDTOBACK();
        };
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int0, int8) == 0)) {
        CC_CREATE(int0, 4, int8);
        if ((strcmp(string1, "") == 0)) {
            CC_SETPOSITION(0, (struct_getparam(int1, 3877) + int14), 1, 0);
        } else {
            CC_SETPOSITION(0, (struct_getparam(int1, 3878) + int14), 1, 0);
        };
        CC_SETSIZE(int28, 0, 0, 1);
        CC_SETCOLOUR(0);
        CC_SETTEXTALIGN(1, 0, 13);
        CC_SETTEXTFONT(36 as fontmetrics);
        CC_SETTEXT(string0);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int0, int8) == 0)) {
        CC_CREATE(int0, 4, int8);
        CC_SETPOSITION(0, (struct_getparam(int1, 3879) + int14), 1, 0);
        CC_SETSIZE(int29, 0, 0, 1);
        CC_SETCOLOUR(0);
        CC_SETTEXTALIGN(1, 0, 13);
        CC_SETTEXTFONT(31 as fontmetrics);
        CC_SETTEXT(string1);
    };
    var int47 = ++int8;
    if ((CC_FIND(int0, int8) == 0)) {
        CC_CREATE(int0, 5, int8);
        CC_SETPOSITION(0, int23, 1, 0);
        CC_SETSIZE(int24, int25, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3897));
        CC_SETTRANS(0);
    };
    var int48 = ++int8;
    if ((CC_FIND(int0, int8) == 0)) {
        CC_CREATE(int0, 5, int8);
        CC_SETPOSITION(0, int23, 1, 0);
        CC_SETSIZE(int24, int25, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3898));
        CC_SETTRANS(255);
    };
    int8 = (int8 + 1);
    if ((CC_FIND(int0, int46) == 1)) {
        CC_SETONMOUSEREPEAT(callback(script9335, int0, int47, int48));
        CC_SETONMOUSELEAVE(callback(script9335, int0, int48, int47));
        CC_SETOP(1, "More Info");
        CC_SETONOP(callback(script9336, -2147483645, -2147483643, int1));
    };
    return;
}