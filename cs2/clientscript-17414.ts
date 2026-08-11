//
function script17414(int0: number, int1: number): void {
    if ((((MODULO(CLIENTCLOCK(), int1) == 0) && (CC_FINDBYCATEGORY(comp(1253, 37), int0, 0) == 1)) && (CC_GETY() < -511))) {  // wheel_of_fortune:foreground_wrapper
        CC_SETPOSITION(-1024, 512, 0, 0);
        cc_setparam(5926, -1024);
        cc_setparam(5927, 512);
    };
    return;
}