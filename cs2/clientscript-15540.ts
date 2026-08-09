//
function script15540(int0: number, int1: number, string0: string): void {
    var int2 = -1 as fontmetrics;
    var int3 = (ENUM_GETOUTPUTCOUNT(int0) - 1);
    while ((int3 >= 0)) {
        stack(0);
        stack(25);
        stack(int0);
        stack(int3);
        int3 = (int3 - 1);
        int2 = enum_getvalue();
        if ((CC_GETHEIGHT() > script7593(string0, CC_GETWIDTH(), int2, int1))) {
            CC_SETTEXTFONT(int2);
            return;
        };
    };
    CC_SETTEXTFONT(enum_getvalue(0, 25, int0, 0));
    return;
}