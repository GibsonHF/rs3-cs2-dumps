//
function script13982(int0: component, int1: component, int2: struct, int3: boolean, int4: int, int5: unknown_int, string0: string): void {
    if (((int0 == comp(-1, 65535)) || (int2 == -1 as struct))) {
        return;
    };
    var int6 = struct_getparam(int2, 4405);
    if ((int6 != -1 as struct)) {
        var int2 = int6;
    };
    var int7 = script9984(int2, 1);
    var int8 = script9984(int2, 2);
    var int9 = script9984(int2, 3);
    var int10 = script9984(int2, 4);
    var int11 = script9984(int2, 6);
    if (((int3 == true) && (script9984(int2, 8) != -1 as struct))) {
        int11 = script9984(int2, 8);
    };
    var int12 = int7;
    if ((int4 == 1)) {
        int7 = int10;
        int8 = int10;
        int12 = int7;
    } else if ((int3 == true)) {
        int12 = script9984(int2, 5);
    } else if (((int8 != -1 as struct) && (script11903(int0) == 1))) {
        int12 = int8;
    };
    if ((int12 == -1 as struct)) {
        return;
    };
    var int13 = struct_getparam(int12, 3808);
    var int14 = struct_getparam(int12, 3807);
    var int15 = struct_getparam(int12, 7447);
    var int16 = struct_getparam(int12, 7448);
    var int17 = 0;
    CC_CREATE(int0, 5, int17++);
    CC_SETSIZE(int13, int14, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(struct_getparam(int12, 3801));
    CC_SETCOLOUR(int16);
    CC_CREATE(int0, 5, int17++);
    CC_SETSIZE((int13 * 2), int14, 1, 0);
    CC_SETPOSITION(int13, 0, 0, 0);
    CC_SETGRAPHIC(struct_getparam(int12, 3802));
    CC_SETCOLOUR(int16);
    CC_SETTILING(int15);
    CC_CREATE(int0, 5, int17++);
    CC_SETSIZE(int13, int14, 0, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETGRAPHIC(struct_getparam(int12, 3803));
    CC_SETCOLOUR(int16);
    if ((struct_getparam(int12, 8062) == true)) {
        CC_SETHFLIP(true);
    };
    CC_CREATE(int0, 4, int17++);
    if ((STRING_LENGTH(string0) > 0)) {
        if ((struct_getparam(int11, 8063) == true)) {
            CC_SETSIZE(struct_getparam(int11, 8066), struct_getparam(int11, 9395), 1, 1);
            CC_SETPOSITION(struct_getparam(int11, 8064), struct_getparam(int11, 8065), 0, 0);
        } else {
            CC_SETSIZE((int13 * 2), 0, 1, 1);
            CC_SETPOSITION(0, 0, 1, 1);
        };
        CC_SETTEXTFONT(struct_getparam(int11, 3810));
        CC_SETCOLOUR(struct_getparam(int11, 3811));
        CC_SETTEXTALIGN(struct_getparam(int11, 7403), struct_getparam(int11, 7404), struct_getparam(int11, 7558));
        CC_SETTEXT(string0);
        CC_SETTEXTSHADOW(struct_getparam(int11, 7405));
        CC_SETMAXLINES(struct_getparam(int11, 9222));
    };
    CC_CREATE(int0, 4, int17++);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    if ((int5 == 0)) {
        CC_SETONVARTRANSMIT(callback(script13984, -2147483645, -2147483643, int2, int3, 0, int4, 3814, 1));
    };
    if ((((int3 == false) && (int7 != -1 as struct)) && (int8 != -1 as struct))) {
        CC_SETONMOUSEOVER(callback(script13985, -2147483645, int8, 0, 1));
        CC_SETONMOUSELEAVE(callback(script13985, -2147483645, int7, 0, 0));
        if ((int9 != -1)) {
            CC_SETONCLICK(callback(script13987, -2147483645, int9, int2, 0, 1, int4, int5));
            CC_SETONRELEASE(callback(script13986, -2147483645, int7, int8, 0));
        };
    };
    if ((int1 != comp(-1, 65535))) {
        script4408(int1);
        IF_SETHIDE(int3, int1);
    };
    return;
}