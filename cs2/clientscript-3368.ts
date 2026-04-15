//
function script3368(int0: int, int1: int, string0: string): void {
    if ((((CC_FIND(comp(1216, 6), int0) == 1) && (STRING_LENGTH(CC_GETTEXT()) == 0)) && (CLIENTCLOCK() > int1))) {
        var string0 = strconcat("New: ", string0);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(23 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(16101953);
        CC_SETTEXTALIGN(1, 1, 15);
    };
    script3370(int0, int1);
    return;
}