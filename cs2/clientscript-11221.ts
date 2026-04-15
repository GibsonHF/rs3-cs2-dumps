//
function script11221(int0: struct, int1: int, int2: unknown_int): int {
    var int3 = comp(1139, 10);
    var string0 = "";
    CC_CREATE(int3, 4, int1);
    CC_SETSIZE((IF_GETWIDTH(int3) - 8), 20, 0, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(script10495(0));
    if ((int0 != -1 as struct)) {
        CC_SETTEXT(struct_getparam(int0, 4950));
        if ((script11226(int0, int2) == 1)) {
            CC_SETTEXT("");
            CC_SETHIDE(true);
        };
    } else {
        CC_SETTEXT("");
        CC_SETHIDE(true);
    };
    return ++int1;
}