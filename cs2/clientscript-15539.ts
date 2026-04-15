//
function script15539(int0: cs2enum): void {
    var int1 = -1 as fontmetrics;
    var int2 = (ENUM_GETOUTPUTCOUNT(int0) - 1);
    while ((int2 >= 0)) {
        int1 = enum_getvalue(0, 25, int0, int2--);
        if (((CC_GETHEIGHT[1]() > enum_getvalue(25, 0, 8549 as cs2enum, int1)) && (PARAWIDTH(CC_GETTEXT[1](), 9999, int1) < CC_GETWIDTH[1]()))) {
            CC_SETTEXTFONT[1](int1);
            return;
        };
    };
    CC_SETTEXTFONT[1](enum_getvalue(0, 25, int0, 0));
    return;
}