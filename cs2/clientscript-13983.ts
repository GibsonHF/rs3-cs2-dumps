//
function script13983(int0: component, int1: component, int2: struct, int3: int, int4: int, int5: int, int6: int, int7: boolean, int8: unknown_int, int9: unknown_int, string0: string): int {
    if ((((int5 <= 0) || (int0 == comp(-1, 65535))) || (int2 == -1 as struct))) {
        return int6;
    };
    var int10 = struct_getparam(int2, 4405);
    if ((int10 != -1 as struct)) {
        var int2 = int10;
    };
    var int11 = script9984(int2, 1);
    var int12 = script9984(int2, 2);
    var int13 = script9984(int2, 3);
    var int14 = script9984(int2, 4);
    var int15 = script9984(int2, 6);
    if (((int7 == true) && (script9984(int2, 8) != -1 as struct))) {
        int15 = script9984(int2, 8);
    };
    var int16 = int11;
    if ((int9 == 1)) {
        int11 = int14;
        int12 = int14;
        int16 = int11;
    } else if ((int7 == true)) {
        int16 = script9984(int2, 5);
    } else if (((int12 != -1 as struct) && (script12838(int0, (int6 + 4)) == 1))) {
        int16 = int12;
    };
    if ((int16 == -1 as struct)) {
        return int6;
    };
    var int17 = struct_getparam(int16, 3808);
    var int18 = struct_getparam(int16, 3807);
    var int19 = struct_getparam(int16, 7447);
    var int20 = struct_getparam(int16, 7448);
    var int21 = IF_GETNEXTSUBID(int0);
    var int22 = int21;
    CC_CREATE(int0, 5, int22++);
    CC_SETSIZE(int17, int18, 0, 0);
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETGRAPHIC(struct_getparam(int16, 3801));
    CC_SETCOLOUR(int20);
    CC_CREATE(int0, 5, int22++);
    CC_SETSIZE((int5 - (int17 * 2)), int18, 0, 0);
    CC_SETPOSITION((int3 + int17), int4, 0, 0);
    CC_SETGRAPHIC(struct_getparam(int16, 3802));
    CC_SETCOLOUR(int20);
    CC_SETTILING(int19);
    CC_CREATE(int0, 5, int22++);
    CC_SETSIZE(int17, int18, 0, 0);
    CC_SETPOSITION((int3 + (int5 - int17)), int4, 0, 0);
    CC_SETGRAPHIC(struct_getparam(int16, 3803));
    CC_SETCOLOUR(int20);
    if ((struct_getparam(int16, 8062) == true)) {
        CC_SETHFLIP(true);
    };
    CC_CREATE(int0, 4, int22++);
    if ((STRING_LENGTH(string0) > 0)) {
        if ((struct_getparam(int15, 8063) == true)) {
            CC_SETSIZE((int5 - struct_getparam(int15, 8066)), (int18 - struct_getparam(int15, 9395)), 0, 0);
            CC_SETPOSITION((int3 + struct_getparam(int15, 8064)), (int4 + struct_getparam(int15, 8065)), 0, 0);
        } else {
            CC_SETSIZE((int5 - 8), int18, 0, 0);
            CC_SETPOSITION((int3 + 4), int4, 0, 0);
        };
        CC_SETTEXTFONT(struct_getparam(int15, 3810));
        CC_SETCOLOUR(struct_getparam(int15, 3811));
        CC_SETTEXTALIGN(struct_getparam(int15, 7403), struct_getparam(int15, 7404), 0);
        CC_SETTEXT(string0);
        CC_SETTEXTSHADOW(struct_getparam(int15, 7405));
    };
    CC_CREATE(int0, 4, int22++);
    CC_SETSIZE(int5, int18, 0, 0);
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETONVARTRANSMIT(callback(script13984, -2147483645, -2147483643, int2, int7, int21, int9, 3814, 1));
    if ((((int7 == 0) && (int11 != -1 as struct)) && (int12 != -1 as struct))) {
        CC_SETONMOUSEOVER(callback(script13985, -2147483645, int12, int21, 1));
        CC_SETONMOUSELEAVE(callback(script13985, -2147483645, int11, int21, 0));
        if ((int13 != -1)) {
            CC_SETONCLICK(callback(script13985, -2147483645, int13, int21, 1));
            CC_SETONRELEASE(callback(script13986, -2147483645, int11, int12, int21));
        };
    };
    if ((int1 != comp(-1, 65535))) {
        CC_CREATE(int1, 4, int6);
        if ((int7 == false)) {
            CC_SETSIZE(int5, int18, 0, 0);
            CC_SETPOSITION(int3, int4, 0, 0);
            if ((int8 == 1)) {
                CC_SETPAUSETEXT("Select");
            } else {
                CC_SETOP(1, "Select");
            };
            script10407();
        } else {
            CC_SETHIDE(true);
        };
        var int6 = (int6 + 1);
    };
    return int6;
}