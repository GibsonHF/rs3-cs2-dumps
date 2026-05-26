//
function script5068(int0: number, string0: string): number {
    CC_CREATE(72810523, 4, IF_GETNEXTSUBID(72810523));
    CC_SETTEXTFONT(66);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(14667711);
    var int1 = ((PARAHEIGHT(string0, IF_GETWIDTH(72810523), 66) * 10) + 2);
    CC_SETSIZE(0, int1, 1, 0);
    CC_SETTEXT(string0);
    CC_SETPOSITION(0, int0, 1, 0);
    return int1;
}