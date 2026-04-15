//[proc,clanwars_updateside_textbox]
function script1785(int0: int, int1: int, int2: int, int3: unknown_int, string0: string): [int, int] {
    CC_CREATE(comp(792, 3), 4, int1);
    CC_SETPOSITION(0, int0, 0, 0);
    CC_SETTEXTFONT(67 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETSIZE(int2, ((PARAHEIGHT(string0, int2, 67 as fontmetrics) * 12) + 5), 0, 0);
    CC_SETTEXT(string0);
    if ((int3 == 1)) {
        CC_SETTEXTALIGN(1, 0, 0);
        script2731(comp(792, 3), int1, 0);
        return [((int0 + CC_GETHEIGHT()) + 12), (int1 + 1)];
    };
    CC_SETTEXTALIGN(0, 0, 0);
    script2731(comp(792, 3), int1, 3);
    return [((int0 + CC_GETHEIGHT()) + 5), (int1 + 1)];
}