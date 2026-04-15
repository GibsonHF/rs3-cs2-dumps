//
function script10899(int0: component, int1: component, int2: struct, int3: int, int4: int, int5: int, int6: int, int7: int, int8: boolean, int9: unknown_int, int10: int, int11: unknown_int, int12: int, string0: string): int {
    if (((((int5 <= 0) || (int6 <= 0)) || (int0 == comp(-1, 65535))) || (int2 == -1 as struct))) {
        return int7;
    };
    var int13 = struct_getparam(int2, 4405);
    if ((int13 != -1 as struct)) {
        var int2 = int13;
    };
    var int14 = script9984(int2, 1);
    var int15 = script9984(int2, 2);
    var int16 = script9984(int2, 3);
    var int17 = script9984(int2, 4);
    var int18 = int14;
    var int19 = IF_GETNEXTSUBID(int0);
    var int20 = -1;
    if ((int10 == 1)) {
        int14 = int17;
        int15 = int17;
        int18 = int14;
    } else if ((int8 == true)) {
        int18 = script9984(int2, 5);
    } else if (((int15 != -1 as struct) && (script12838(int0, (int19 + 10)) == 1))) {
        int18 = int15;
    };
    if ((int18 == -1 as struct)) {
        return int7;
    };
    var int21 = struct_getparam(int18, 3808);
    var int22 = struct_getparam(int18, 3807);
    var int23 = struct_getparam(int18, 7447);
    var int24 = struct_getparam(int18, 7448);
    var int25 = (int5 - (int21 * 2));
    var int26 = (int6 - (int22 * 2));
    var int27 = int19;
    var int28 = 0;
    CC_CREATE(int0, 5, int27++);
    CC_SETSIZE(int21, int22, 0, 0);
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETGRAPHIC(struct_getparam(int18, 3799));
    CC_SETCOLOUR(int24);
    CC_CREATE(int0, 5, int27++);
    CC_SETSIZE(int25, int22, 0, 0);
    CC_SETPOSITION((int3 + int21), int4, 0, 0);
    CC_SETGRAPHIC(struct_getparam(int18, 3798));
    CC_SETCOLOUR(int24);
    CC_SETTILING(int23);
    CC_CREATE(int0, 5, int27++);
    CC_SETSIZE(int21, int22, 0, 0);
    CC_SETPOSITION(((int3 + int25) + int21), int4, 0, 0);
    CC_SETGRAPHIC(struct_getparam(int18, 3800));
    CC_SETCOLOUR(int24);
    CC_CREATE(int0, 5, int27++);
    CC_SETSIZE(int21, int26, 0, 0);
    CC_SETPOSITION(int3, (int4 + int22), 0, 0);
    CC_SETGRAPHIC(struct_getparam(int18, 3801));
    CC_SETCOLOUR(int24);
    CC_SETTILING(int23);
    CC_CREATE(int0, 5, int27++);
    CC_SETSIZE(int25, int26, 0, 0);
    CC_SETPOSITION((int3 + int21), (int4 + int22), 0, 0);
    CC_SETGRAPHIC(struct_getparam(int18, 3802));
    CC_SETCOLOUR(int24);
    CC_SETTILING(int23);
    CC_CREATE(int0, 5, int27++);
    CC_SETSIZE(int21, int26, 0, 0);
    CC_SETPOSITION(((int3 + int25) + int21), (int4 + int22), 0, 0);
    CC_SETGRAPHIC(struct_getparam(int18, 3803));
    CC_SETCOLOUR(int24);
    CC_SETTILING(int23);
    CC_CREATE(int0, 5, int27++);
    CC_SETSIZE(int21, int22, 0, 0);
    CC_SETPOSITION(int3, ((int4 + int26) + int22), 0, 0);
    CC_SETGRAPHIC(struct_getparam(int18, 3805));
    CC_SETCOLOUR(int24);
    CC_CREATE(int0, 5, int27++);
    CC_SETSIZE(int25, int22, 0, 0);
    CC_SETPOSITION((int3 + int21), ((int4 + int26) + int22), 0, 0);
    CC_SETGRAPHIC(struct_getparam(int18, 3804));
    CC_SETCOLOUR(int24);
    CC_SETTILING(int23);
    CC_CREATE(int0, 5, int27++);
    CC_SETSIZE(int21, int22, 0, 0);
    CC_SETPOSITION(((int3 + int25) + int21), ((int4 + int26) + int22), 0, 0);
    CC_SETGRAPHIC(struct_getparam(int18, 3806));
    CC_SETCOLOUR(int24);
    CC_CREATE(int0, 4, int27++);
    if ((STRING_LENGTH(string0) > 0)) {
        if ((struct_getparam(int2, 8063) == true)) {
            CC_SETSIZE(int25, int26, 0, 0);
            CC_SETPOSITION((int3 + int21), (int4 + int22), 0, 0);
        } else if ((int12 > 0)) {
            CC_SETSIZE((int5 - (int12 * 2)), int6, 0, 0);
            CC_SETPOSITION((int3 + int12), int4, 0, 0);
        } else {
            CC_SETSIZE(int5, int6, 0, 0);
            CC_SETPOSITION(int3, int4, 0, 0);
        };
        CC_SETTEXT(string0);
        if ((int11 == 0)) {
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTALIGN(1, 1, enum_getvalue(25, 0, 8584 as cs2enum, 26 as fontmetrics));
        } else {
            script1025(int0, CC_GETID(), 32 as fontmetrics, 30 as fontmetrics, 28 as fontmetrics);
            CC_SETTEXTALIGN(1, 1, enum_getvalue(25, 0, 8584 as cs2enum, CC_GETFONTMETRICS()));
        };
        CC_SETTEXTSHADOW(true);
        script11024(19);
    };
    CC_CREATE(int0, 4, int27++);
    CC_SETSIZE(int5, int6, 0, 0);
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETONVARTRANSMIT(callback(script10412, -2147483645, -2147483643, int2, int8, int19, int10, 1, 3814, 1));
    if ((((int8 == 0) && (int14 != -1 as struct)) && (int15 != -1 as struct))) {
        CC_SETONMOUSEOVER(callback(script10413, -2147483645, int15, int19, 1));
        CC_SETONMOUSELEAVE(callback(script10413, -2147483645, int14, int19, 0));
        if ((int16 != -1)) {
            CC_SETONCLICK(callback(script10413, -2147483645, int16, int19, 1));
            CC_SETONRELEASE(callback(script10414, -2147483645, int14, int15, int19));
        };
    };
    if ((int1 != comp(-1, 65535))) {
        CC_CREATE(int1, 4, int7);
        if ((int8 == false)) {
            CC_SETSIZE(int5, int6, 0, 0);
            CC_SETPOSITION(int3, int4, 0, 0);
            if ((int9 == 1)) {
                CC_SETPAUSETEXT("Select");
            } else {
                CC_SETOP(1, "Select");
            };
            script10407();
        } else {
            CC_SETHIDE(true);
        };
        var int7 = (int7 + 1);
    };
    return int7;
}