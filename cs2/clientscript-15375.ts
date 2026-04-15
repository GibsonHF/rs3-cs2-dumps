//
function script15375(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: unknown_int, int11: struct, string0: string): int {
    var int12 = 0;
    var int13 = 0;
    var int14 = int8;
    int12 = PARAWIDTH(string0, int2, 58 as fontmetrics);
    while ((int12 > int14)) {
        int14 = (int14 + int9);
        int13 = (int13 + int9);
    };
    var int3 = (int3 + int4);
    var int15 = false;
    if (((int10 == 1) && (STRING_LENGTH(string0) <= 0))) {
        int15 = true;
    };
    CC_CREATE(int0, 5, int1);
    var int1 = (int1 + 1);
    CC_SETGRAPHIC(struct_getparam(int11, 4740));
    CC_SETSIZE(int7, int6, 0, 0);
    CC_SETPOSITION(int3, int5, 0, 0);
    CC_SETHIDE(int15);
    CC_CREATE(int0, 5, int1);
    int1 = (int1 + 1);
    CC_SETGRAPHIC(struct_getparam(int11, 4739));
    CC_SETSIZE((int8 + int13), int6, 0, 0);
    int3 = (int3 - int13);
    int3 = (int3 - (int7 * 2));
    CC_SETPOSITION(int3, int5, 0, 0);
    CC_SETHIDE(int15);
    CC_CREATE(int0, 5, int1);
    int1 = (int1 + 1);
    CC_SETGRAPHIC(struct_getparam(int11, 4738));
    CC_SETSIZE(int7, int6, 0, 0);
    int3 = (int3 - int7);
    CC_SETPOSITION(int3, int5, 0, 0);
    CC_SETHIDE(int15);
    CC_CREATE(int0, 4, int1);
    int1 = (int1 + 1);
    CC_SETSIZE((132 + int13), int6, 0, 0);
    CC_SETPOSITION(int3, (int5 - 8), 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(58 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(1, 1, 20);
    CC_SETHIDE(int15);
    CC_SETTEXTSHADOW(false);
    return int1;
}