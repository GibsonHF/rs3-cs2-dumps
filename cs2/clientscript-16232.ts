//
function script16232(int0: component, int1: int, int2: struct, int3: struct, int4: struct, int5: unknown_int): void {
    if ((int1 == 0)) {
        script18126(int0);
    };
    if ((int5 == 1)) {
        script18125(int0, int1, int3);
        return;
    };
    var int6 = 0;
    var int7 = 0;
    var int8 = (3 * 5);
    var int9 = struct_getparam(int3, 4851);
    var int10 = script13501(int3);
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    if ((IF_FIND(int0) == 1)) {
        int15 = cc_getparam(8236);
    };
    int11 = (int1 * 10);
    CC_CREATE(int0, 5, int11);
    CC_SETGRAPHIC(11697 as graphic);
    CC_SETSIZE(126, 126, 0, 0);
    int16 = (int1 + (int15 * (6 - 1)));
    int14 = MODULO(int16, 3);
    int6 = ((20 + (int14 * 20)) + (int14 * 126));
    var int17 = struct_getparam(int2, 9331);
    if ((script12477() <= int17)) {
        int6 = (int6 + 20);
    };
    int13 = (MODULO(int16, int8) / 3);
    int7 = ((100 + ((int16 / int8) * 660)) + (int13 * (660 / 5)));
    CC_SETPOSITION(int7, int6, 0, 0);
    int11 = (int11 + 1);
    var int18 = -1;
    var int19 = -1;
    CC_CREATE(int0, 5, int11);
    if ((struct_getparam(int3, 4852) != -1 as graphic)) {
        int18 = ((int7 + (126 / 2)) - (72 / 2));
        int19 = (int6 + SCALE(126, 100, 2));
        CC_SETGRAPHIC(struct_getparam(int3, 4852));
        CC_SETPOSITION(int18, int19, 0, 0);
        CC_SETSIZE(72, 72, 0, 0);
    } else if ((int9 != -1 as obj)) {
        int18 = ((int7 + (126 / 2)) - (44 / 2));
        int19 = (int6 + SCALE(126, 100, 12));
        int9 = script14453(int3, int9);
        CC_SETOBJECT(int9, struct_getparam(int3, 4448));
        CC_SETPOSITION(int18, int19, 0, 0);
        CC_SETSIZE(44, 39, 0, 0);
    };
    int11 = (int11 + 1);
    var int20 = struct_getparam(int3, 9332);
    if ((int20 != -1 as graphic)) {
        CC_CREATE(int0, 5, int11);
        CC_SETPOSITION((int7 + 2), (int6 + 2), 0, 0);
        CC_SETSIZE(122, 72, 0, 0);
        CC_SETGRAPHIC(int20);
    };
    int11 = (int11 + 1);
    var string0 = script13337(int3);
    var int21 = struct_getparam(int3, 4448);
    string0 = script325(int21, string0, 1, 0);
    string0 = script3930(string0, (126 - 10), 2, 55 as fontmetrics);
    CC_CREATE(int0, 4, int11);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(55 as fontmetrics);
    CC_SETCOLOUR(14734449);
    CC_SETSIZE((126 - 10), SCALE(126, 100, 30), 0, 0);
    CC_SETPOSITION((int7 + 5), (int6 + SCALE(126, 100, 55)), 0, 0);
    CC_SETTEXTALIGN(1, 1, 10);
    int11 = (int11 + 1);
    CC_CREATE(int0, 4, int11);
    int12 = script9095(int3, int10);
    if (((PLAYERMEMBER() == false) && (struct_getparam(int3, 5147) > 0))) {
        int12 = struct_getparam(int3, 5147);
    };
    var string1 = TOSTRING_LOCALISED(int12, 1);
    if ((int12 == 0)) {
        string1 = "FREE!";
    };
    CC_SETTEXT(string1);
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETCOLOUR(14737632);
    CC_SETSIZE(126, SCALE(126, 100, 15), 0, 0);
    CC_SETPOSITION(int7, (int6 + SCALE(126, 100, 83)), 0, 0);
    CC_SETTEXTALIGN(1, 1, 20);
    int11 = (int11 + 1);
    CC_CREATE(int0, 5, int11);
    CC_SETGRAPHIC(struct_getparam(int2, 8661));
    CC_SETSIZE(20, 20, 0, 0);
    CC_SETPOSITION((int7 + 10), (int6 + SCALE(126, 100, 83)), 0, 0);
    if ((int12 == 0)) {
        CC_SETHIDE(true);
    };
    int11 = (int11 + 1);
    CC_CREATE(int0, 5, int11);
    CC_SETGRAPHIC(struct_getparam(int4, 4738));
    CC_SETSIZE(16, 28, 0, 0);
    CC_SETPOSITION(((int7 + 126) - 16), (int6 - 2), 0, 0);
    CC_SETHIDE(true);
    int11 = (int11 + 1);
    CC_CREATE(int0, 5, int11);
    CC_SETGRAPHIC(struct_getparam(int4, 4739));
    CC_SETSIZE(0, 28, 0, 0);
    CC_SETPOSITION((int7 + 126), (int6 - 2), 0, 0);
    CC_SETHIDE(true);
    int11 = (int11 + 1);
    CC_CREATE(int0, 5, int11);
    CC_SETGRAPHIC(struct_getparam(int4, 4740));
    CC_SETSIZE(12, 28, 0, 0);
    CC_SETPOSITION((int7 + 126), (int6 - 2), 0, 0);
    CC_SETHIDE(true);
    int11 = (int11 + 1);
    CC_CREATE(int0, 4, int11);
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETSIZE(0, 23, 0, 0);
    CC_SETPOSITION((int7 + 126), (int6 - 2), 0, 0);
    CC_SETHIDE(true);
    int11 = (int11 + 1);
    return;
}