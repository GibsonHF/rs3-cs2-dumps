//
function script583(int0: struct, int1: struct, int2: component, int3: component, int4: component, int5: struct, int6: int, int7: int, int8: int, int9: int, int10: int): void {
    script10410(int2, comp(-1, 65535), int5, int6, int7, int8, int9, int10, false, "");
    script10410(int2, comp(-1, 65535), 28575 as struct, (int6 + 5), (int7 + 35), 40, 40, 0, false, "");
    var int11 = 0;
    var int12 = script13501(int1);
    var string0 = script15488(int1);
    if ((struct_getparam(int0, 9050) == 1)) {
        string0 = struct_getparam(int0, 9051);
    };
    var int13 = struct_getparam(int1, 4851);
    if ((int12 == 0)) {
        script13980(int2, int4, 28553 as struct, (int6 + 5), (int7 + 81), 103, int10, false, string0);
    } else {
        script13980(int2, int4, 28554 as struct, (int6 + 5), (int7 + 81), 103, int10, false, string0);
    };
    CC_CREATE(int3, 0, int10);
    CC_SETSIZE(int8, 75, 0, 0);
    CC_SETPOSITION(int6, int7, 0, 0);
    script16898(int1, int13);
    var int14 = IF_GETNEXTSUBID(int2);
    CC_CREATE(int2, 4, int14++);
    CC_SETSIZE((int8 - 6), 24, 0, 0);
    CC_SETPOSITION((int6 + 3), (int7 + 6), 0, 0);
    CC_SETTEXT(script13337(int1));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTALIGN(1, 1, 11);
    int11 = script9095(int1, int12);
    CC_CREATE(int2, 4, int14++);
    CC_SETSIZE(60, 50, 0, 0);
    CC_SETPOSITION(((int6 + int8) - 65), (int7 + 30), 0, 0);
    var int15 = struct_getparam(int1, 5878);
    if (((PLAYERMEMBER() == false) && (struct_getparam(int1, 5147) > 0))) {
        int11 = struct_getparam(int1, 5147);
    };
    if (((PLAYERMEMBER() == false) && (struct_getparam(int1, 5879) > 0))) {
        int15 = struct_getparam(int1, 5879);
    };
    if ((int11 > 0)) {
        int11 = MAX(1, SCALE(struct_getparam(int0, 7399), 100, int11));
    };
    if ((int15 > 0)) {
        int15 = MAX(1, SCALE(struct_getparam(int0, 7400), 100, int15));
    };
    CC_SETTEXT(script12658(int0, int1, int11, int15, 0));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(1, 1, 11);
    CC_CREATE(int2, 5, int14++);
    if ((struct_getparam(int1, 4852) != -1 as graphic)) {
        CC_SETSIZE(MIN(struct_getparam(int1, 4860), 32), MIN(struct_getparam(int1, 4861), 32), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 4852));
        CC_SETPOSITION(((int6 + 5) + ((40 - CC_GETWIDTH()) / 2)), ((int7 + 35) + ((40 - CC_GETHEIGHT()) / 2)), 0, 0);
    } else if ((int13 != -1 as obj)) {
        CC_SETSIZE(36, 32, 0, 0);
        int13 = script14453(int1, int13);
        if ((struct_getparam(int1, 4448) > 1)) {
            CC_SETOBJECT(int13, struct_getparam(int1, 4448));
        } else {
            CC_SETOBJECT_NONUM(int13, struct_getparam(int1, 4448));
        };
        CC_SETPOSITION(((int6 + 8) + ((40 - CC_GETWIDTH()) / 2)), ((int7 + 37) + ((40 - CC_GETHEIGHT()) / 2)), 0, 0);
    };
    return;
}