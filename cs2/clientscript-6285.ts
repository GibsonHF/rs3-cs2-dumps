//
function script6285(int0: int): void {
    var int1 = 0;
    if (((MODULO(CLIENTCLOCK(), 6) == 0) && (CC_FIND(comp(1296, 14), int0) == 1))) {
        int1 = CC_GETTRANS();
        if ((int1 >= 235)) {
            CC_DELETE();
            IF_SETONTIMER(callback(), comp(1296, 14));
        } else {
            CC_SETTRANS((int1 + 20));
        };
    };
    return;
}