//
function script3368(int0: number, int1: number, string0: string): void {
    if ((((CC_FIND(79691782, int0) == 1) && (STRING_LENGTH(CC_GETTEXT()) == 0)) && (CLIENTCLOCK() > int1))) {
        var string0 = strconcat("New: ", string0);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(23);
        CC_SETTEXTSHADOW(1);
        CC_SETCOLOUR(16101953);
        CC_SETTEXTALIGN(1, 1, 15);
    };
    script3370(int0, int1);
    return;
}