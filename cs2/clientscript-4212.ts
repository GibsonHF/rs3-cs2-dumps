//
function script4212(int0: component, int1: fontmetrics, int2: int, int3: int, string0: string): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int4 = IF_GETLAYER(int0);
    IF_SETTEXT(string0, int0);
    IF_SETTEXTFONT(int1, int0);
    IF_SETCOLOUR(int2, int0);
    IF_SETTEXTSHADOW(1, int0);
    return;
}