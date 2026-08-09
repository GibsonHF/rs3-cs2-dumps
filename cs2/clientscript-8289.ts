//
function script8289(int0: number, int1: number): void {
    var int2 = 21301;
    var int3 = script8418(int2, 0);
    if ((int3 == -1)) {
        return;
    };
    var int4 = script13415(int0);
    if ((int4 == -1)) {
        return;
    };
    var int5 = struct_getparam(int2, 3506);
    if ((int5 == comp(-1, 65535))) {
        return;
    };
    var string0 = struct_getparam(int4, 3493);
    if (((int1 != -1) && (strcmp(struct_getparam(int1, 3493), "") != 0))) {
        string0 = struct_getparam(int1, 3493);
    };
    var int6 = 0;
    var int7 = 0;
    if ((CC_FIND(int5, 3) == 1)) {
        CC_SETPOSITION(struct_getparam(int3, 3552), 0, 0, 0);
        CC_SETSIZE((int6 + (int7 * 2)), struct_getparam(int3, 3548), 0, 0);
    };
    if ((CC_FIND(int5, 5) == 1)) {
        CC_SETPOSITION(((struct_getparam(int3, 3552) + int6) + (int7 * 2)), 0, 0, 0);
        CC_SETSIZE(struct_getparam(int3, 3558), struct_getparam(int3, 3548), 0, 0);
    };
    if ((CC_FIND(int5, 4) == 1)) {
        CC_SETSIZE(((((struct_getparam(int3, 3552) + int6) + (int7 * 2)) + struct_getparam(int3, 3554)) + struct_getparam(int3, 3558)), struct_getparam(int3, 3548), 1, 0);
    };
    if ((CC_FIND(int5, 14) == 1)) {
        CC_SETPOSITION(64, -4, 0, 0);
        CC_SETSIZE(MAX(struct_getparam(int3, 3557), STRINGWIDTH(string0, 60 as fontmetrics)), struct_getparam(int3, 3548), 0, 0);
        CC_SETTEXTFONT(60 as fontmetrics);
        CC_SETTEXT(string0);
        CC_SETTEXTALIGN(0, 1, 0);
    };
    if ((CC_FIND(int5, 15) == 1)) {
        if ((int1 != -1)) {
            if ((struct_getparam(int1, 3495) != -1)) {
                CC_SETGRAPHIC(struct_getparam(int1, 3495));
            } else {
                CC_SETGRAPHIC(struct_getparam(int4, 3495));
            };
        } else {
            CC_SETGRAPHIC(struct_getparam(int4, 3495));
        };
    };
    return;
}