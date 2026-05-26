//
function script4212(int0: number, int1: number, int2: number, int3: number, string0: string): void {
    if ((int0 == -1)) {
        return;
    };
    var int4 = IF_GETLAYER(int0);
    IF_SETTEXT(string0, int0);
    IF_SETTEXTFONT(int1, int0);
    IF_SETCOLOUR(int2, int0);
    IF_SETTEXTSHADOW(1, int0);
    return;
}