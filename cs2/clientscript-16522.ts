//
function script16522(int0: int, int1: int): void {
    if (((MODULO(CLIENTCLOCK(), int1) == 0) && (CC_FINDBYCATEGORY(comp(1253, 3), int0, 0) == 1))) {
        if ((CC_GETSCROLLX() > 0)) {
            CC_SETSCROLLPOS((CC_GETSCROLLX() - 1), 0);
        } else {
            CC_SETSCROLLPOS(CC_GETSCROLLWIDTH(), 0);
        };
    };
    return;
}