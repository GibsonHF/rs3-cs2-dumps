//
function script13999(int0: component, int1: component, int2: struct, int3: boolean, int4: int, int5: int, int6: int, int7: fontmetrics, string0: string): void {
    if (((int0 == comp(-1, 65535)) || (int2 == -1 as struct))) {
        return;
    };
    var int8 = struct_getparam(int2, 4405);
    if ((int8 != -1 as struct)) {
        var int2 = int8;
    };
    var int9 = script9984(int2, 1);
    var int10 = script9984(int2, 2);
    var int11 = script9984(int2, 3);
    var int12 = script9984(int2, 4);
    var int13 = script9984(int2, 6);
    var int14 = int9;
    if ((int4 == 1)) {
        int9 = int12;
        int10 = int12;
        int14 = int9;
    } else if ((int3 == true)) {
        int14 = script9984(int2, 5);
    } else if (((int10 != -1 as struct) && (script11903(int0) == 1))) {
        int14 = int10;
    };
    if ((int14 == -1 as struct)) {
        return;
    };
    var int15 = struct_getparam(int14, 3808);
    var int16 = struct_getparam(int14, 3807);
    var int17 = struct_getparam(int14, 7447);
    var int18 = struct_getparam(int14, 7448);
    var int19 = 0;
    var int20 = struct_getparam(int14, 6120);
    var int21 = struct_getparam(int13, 3810);
    var int22 = struct_getparam(int13, 3811);
    if ((int20 != 0)) {
        int20 = script12590(8, 0, int20, int20);
    };
    CC_CREATE(int0, 5, int19++);
    CC_SETSIZE(int15, int16, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(struct_getparam(int14, 3799));
    CC_SETCOLOUR(int18);
    CC_SETTRANS(int20);
    CC_CREATE(int0, 5, int19++);
    CC_SETSIZE((int15 * 2), int16, 1, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETGRAPHIC(struct_getparam(int14, 3798));
    CC_SETCOLOUR(int18);
    CC_SETTILING(int17);
    CC_SETTRANS(int20);
    CC_CREATE(int0, 5, int19++);
    CC_SETSIZE(int15, int16, 0, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETGRAPHIC(struct_getparam(int14, 3800));
    CC_SETCOLOUR(int18);
    CC_SETTRANS(int20);
    CC_CREATE(int0, 5, int19++);
    CC_SETSIZE(int15, (int16 * 2), 0, 1);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETGRAPHIC(struct_getparam(int14, 3801));
    CC_SETCOLOUR(int18);
    CC_SETTILING(int17);
    CC_SETTRANS(int20);
    CC_CREATE(int0, 5, int19++);
    CC_SETSIZE((int15 * 2), (int16 * 2), 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(struct_getparam(int14, 3802));
    CC_SETCOLOUR(int18);
    CC_SETTILING(int17);
    CC_SETTRANS(int20);
    CC_CREATE(int0, 5, int19++);
    CC_SETSIZE(int15, (int16 * 2), 0, 1);
    CC_SETPOSITION(0, 0, 2, 1);
    CC_SETGRAPHIC(struct_getparam(int14, 3803));
    CC_SETCOLOUR(int18);
    CC_SETTILING(int17);
    CC_SETTRANS(int20);
    CC_CREATE(int0, 5, int19++);
    CC_SETSIZE(int15, int16, 0, 0);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETGRAPHIC(struct_getparam(int14, 3805));
    CC_SETCOLOUR(int18);
    CC_SETTRANS(int20);
    CC_CREATE(int0, 5, int19++);
    CC_SETSIZE((int15 * 2), int16, 1, 0);
    CC_SETPOSITION(0, 0, 1, 2);
    CC_SETGRAPHIC(struct_getparam(int14, 3804));
    CC_SETCOLOUR(int18);
    CC_SETTILING(int17);
    CC_SETTRANS(int20);
    CC_CREATE(int0, 5, int19++);
    CC_SETSIZE(int15, int16, 0, 0);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETGRAPHIC(struct_getparam(int14, 3806));
    CC_SETCOLOUR(int18);
    CC_SETTRANS(int20);
    CC_CREATE(int0, 4, int19++);
    if ((STRING_LENGTH(string0) > 0)) {
        CC_SETSIZE((int15 * 2), (int16 * 2), 1, 1);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETTEXTFONT(int7);
        CC_SETTEXTALIGN(int5, int6, 12);
        CC_SETTEXT(string0);
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(int22);
    };
    CC_CREATE(int0, 4, int19++);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETONVARTRANSMIT(callback(script10412, -2147483645, -2147483643, int2, int3, 0, int4, 0, 3814, 1));
    if ((((int3 == 0) && (int9 != -1 as struct)) && (int10 != -1 as struct))) {
        CC_SETONMOUSEOVER(callback(script10413, -2147483645, int10, 0, 1));
        CC_SETONMOUSELEAVE(callback(script10413, -2147483645, int9, 0, 0));
        if ((int11 != -1)) {
            CC_SETONCLICK(callback(script14000, -2147483645, int11, int2, 0, 1, int4, 0));
            CC_SETONRELEASE(callback(script10414, -2147483645, int9, int10, 0));
        };
    };
    if ((int1 != comp(-1, 65535))) {
        script4408(int1);
        if ((int3 == true)) {
            IF_SETHIDE(true, int1);
        } else {
            IF_SETHIDE(false, int1);
        };
    };
    return;
}