//
function script14716(int0: int, string0: string): void {
    CC_CREATE[1](comp(1218, 247), 4, IF_GETNEXTSUBID(comp(1218, 247)));
    CC_SETPOSITION[1](105, (int0 + 18), 0, 0);
    if ((STRINGWIDTH(string0, 28 as fontmetrics) <= 455)) {
        CC_SETTEXTFONT[1](28 as fontmetrics);
    } else {
        CC_SETTEXTFONT[1](26 as fontmetrics);
    };
    CC_SETTEXTSHADOW[1](true);
    CC_SETTEXT[1](string0);
    CC_SETCOLOUR[1](14389248);
    CC_SETTEXTALIGN[1](1, 1, 13);
    CC_SETMAXLINES[1](1);
    CC_SETSIZE[1](455, 16, 0, 0);
    return;
}