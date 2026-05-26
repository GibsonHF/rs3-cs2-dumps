//
function script16522(int0: number, int1: number): void {
    if (((MODULO(CLIENTCLOCK(), int1) == 0) && (CC_FINDBYCATEGORY(82116611, int0, 0) == 1))) {
        if ((CC_GETSCROLLX() > 0)) {
            CC_SETSCROLLPOS((CC_GETSCROLLX() - 1), 0);
        } else {
            CC_SETSCROLLPOS(CC_GETSCROLLWIDTH(), 0);
        };
    };
    return;
}