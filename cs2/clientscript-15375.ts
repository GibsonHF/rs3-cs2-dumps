//
function script15375(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, string0: string): number {
    var int12 = 0;
    var int13 = 0;
    var int14 = int8;
    int12 = PARAWIDTH(string0, int2, 58);
    while ((int12 > int14)) {
        int14 = (int14 + int9);
        int13 = (int13 + int9);
    };
    var int3 = (int3 + int4);
    var int15 = 0;
    if (((int10 == 1) && (STRING_LENGTH(string0) <= 0))) {
        int15 = 1;
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
    CC_SETTEXTFONT(58);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(1, 1, 20);
    CC_SETHIDE(int15);
    CC_SETTEXTSHADOW(0);
    return int1;
}