//
function script13343(int0: int, int1: int, int2: int, int3: struct, string0: string): int {
    var int4 = ((IF_GETWIDTH(comp(1851, 41)) / 2) - 6);
    var string1 = "";
    CC_CREATE(comp(1851, 41), 4, IF_GETNEXTSUBID(comp(1851, 41)));
    if ((MODULO(int0, 2) == 0)) {
        CC_SETPOSITION(3, int1, 0, 0);
    } else {
        CC_SETPOSITION(3, int1, 2, 0);
    };
    var int5 = (PARAHEIGHT(string0, int4, 26 as fontmetrics) * 16);
    CC_SETSIZE(int4, int5, 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(int2);
    if ((int3 != -1 as struct)) {
        if ((struct_getparam(int3, 7960) == 1)) {
            CC_SETOP(1, "Go To");
            CC_SETONOP(callback(script13345, int3));
            CC_SETOPCURSOR(1, 210);
        };
        string1 = struct_getparam(int3, 6411);
        if (((STRING_LENGTH(struct_getparam(int3, 4586)) > 0) && (script4148() == true))) {
            string1 = struct_getparam(int3, 4586);
        };
        CC_SETONMOUSEREPEAT(callback(script8799, string1, 121307177, CC_GETID()));
    };
    if ((MODULO(int0, 2) == 1)) {
        if ((CC_FIND[1](comp(1851, 41), (CC_GETID() - 1)) == 1)) {
            var int1 = (int1 + MAX(CC_GETHEIGHT(), CC_GETHEIGHT[1]()));
        } else {
            int1 = (int1 + CC_GETHEIGHT());
        };
    };
    return int1;
}