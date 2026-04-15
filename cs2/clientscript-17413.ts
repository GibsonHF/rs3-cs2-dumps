//
function script17413(int0: int, int1: int): void {
    if ((((MODULO(CLIENTCLOCK(), int1) == 0) && (CC_FINDBYCATEGORY(comp(1253, 3), int0, 0) == 1)) && (CC_GETY() < -511))) {
        CC_SETPOSITION(-1024, 512, 0, 0);
        cc_setparam(5926, -1024);
        cc_setparam(5927, 512);
    };
    return;
}