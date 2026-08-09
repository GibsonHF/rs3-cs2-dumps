//
function script5761(int0: number): void {
    var int1 = -1 as fontmetrics;
    var int2 = (ENUM_GETOUTPUTCOUNT(int0) - 1);
    while ((int2 >= 0)) {
        stack(0);
        stack(25);
        stack(int0);
        stack(int2);
        int2 = (int2 - 1);
        int1 = enum_getvalue();
        if (((CC_GETHEIGHT() > enum_getvalue(25, 0, 8549 as cs2enum, int1)) && (PARAWIDTH(CC_GETTEXT(), 9999, int1) < CC_GETWIDTH()))) {
            CC_SETTEXTFONT(int1);
            return;
        };
    };
    CC_SETTEXTFONT(enum_getvalue(0, 25, int0, 0));
    return;
}