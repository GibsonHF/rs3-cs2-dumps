//
function script16623(int0: number, int1: number): void {
    if ((MODULO(CLIENTCLOCK(), 50) != 0)) {
        return;
    };
    if ((CC_FINDBYCATEGORY(82116611, int0, int1) == 1)) {
        CC_SETTEXT(script16625(script16626(), varclient_4753));
    };
    return;
}