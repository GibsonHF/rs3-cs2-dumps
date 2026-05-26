//
function script6285(int0: number): void {
    var int1 = 0;
    if (((MODULO(CLIENTCLOCK(), 6) == 0) && (CC_FIND(84934670, int0) == 1))) {
        int1 = CC_GETTRANS();
        if ((int1 >= 235)) {
            CC_DELETE();
            IF_SETONTIMER(callback(), 84934670);
        } else {
            CC_SETTRANS((int1 + 20));
        };
    };
    return;
}