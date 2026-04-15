//
function script176(int0: component, int1: int, int2: int, int3: int, int4: int, int5: graphic, int6: int, int7: int, int8: struct, string0: string): [int, int] {
    var int9 = struct_getparam(int8, 4538);
    var int10 = 0;
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(int5);
    if ((int7 < int9)) {
        int10 = ((int9 - int7) / 2);
    };
    CC_SETSIZE(int6, int7, 0, 0);
    CC_SETPOSITION(int2, (int3 + int10), 0, 0);
    var int1 = (int1 + 1);
    var int11 = (int6 + 5);
    var int12 = 0;
    CC_CREATE(int0, 4, int1);
    CC_SETTEXTFONT(struct_getparam(int8, 4536));
    script10674(int0, int1, struct_getparam(int8, 4537));
    var int13 = (int4 - int11);
    var int14 = (PARAHEIGHT(string0, int13, CC_GETFONTMETRICS()) * int9);
    if ((int7 > int14)) {
        int12 = ((int7 - int14) / 2);
    };
    CC_SETTEXT(string0);
    CC_SETSIZE(int13, int14, 0, 0);
    CC_SETPOSITION((int2 + int11), (int3 + int12), 0, 0);
    return [++int1, (int3 + MAX(int7, int14))];
}