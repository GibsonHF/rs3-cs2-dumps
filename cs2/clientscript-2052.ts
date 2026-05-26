//[proc,worldmap_setuptext]
function script2052(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string, string1: string, string2: string): void {
    CC_SETHIDE(false);
    CC_SETSIZE(int0, int1, 0, 0);
    CC_SETPOSITION(int2, int3, 1, 1);
    CC_SETCOLOUR(int4);
    CC_SETTEXTFONT(32 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 13);
    CC_SETTEXT(string0);
    if ((int5 != -1)) {
        CC_SETOPBASE(`<col=ff9040>${string1}</col>`);
        CC_SETOP(1, string2);
        CC_SETONOP(callback(script2053, -2147483644, -2147483645, int5));
    } else {
        CC_SETOP(1, "");
        CC_SETONOP(callback());
    };
    return;
}