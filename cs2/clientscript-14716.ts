//
function script14716(int0: number, string0: string): void {
    CC_CREATE[1](79823095, 4, IF_GETNEXTSUBID(79823095));
    CC_SETPOSITION[1](105, (int0 + 18), 0, 0);
    if ((STRINGWIDTH(string0, 28) <= 455)) {
        CC_SETTEXTFONT[1](28);
    } else {
        CC_SETTEXTFONT[1](26);
    };
    CC_SETTEXTSHADOW[1](1);
    CC_SETTEXT[1](string0);
    CC_SETCOLOUR[1](14389248);
    CC_SETTEXTALIGN[1](1, 1, 13);
    CC_SETMAXLINES[1](1);
    CC_SETSIZE[1](455, 16, 0, 0);
    return;
}