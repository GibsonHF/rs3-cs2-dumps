//
function script1168(int0: int, int1: unknown_int, string0: string): void {
    if ((MODULO(CLIENTCLOCK(), 50) != 0)) {
        return;
    };
    if ((CC_FIND(comp(885, 0), int0) == 1)) {
        CC_SETTEXT(script3930(string0, CC_GETWIDTH(), 4, CC_GETFONTMETRICS()));
    };
    return;
}