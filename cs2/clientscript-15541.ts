//
function script15541(int0: cs2enum, int1: int, string0: string): void {
    var int2 = -1 as fontmetrics;
    var int3 = (ENUM_GETOUTPUTCOUNT(int0) - 1);
    while ((int3 >= 0)) {
        int2 = enum_getvalue(0, 25, int0, int3--);
        if ((CC_GETHEIGHT[1]() > script7593(string0, CC_GETWIDTH[1](), int2, int1))) {
            CC_SETTEXTFONT[1](int2);
            return;
        };
    };
    CC_SETTEXTFONT[1](enum_getvalue(0, 25, int0, 0));
    return;
}