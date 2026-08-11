//
function script2892(int0: number, int1: number): void {
    if (((CLIENTCLOCK() - int1) >= 180)) {
        varclient_1086 = 1;
    };
    if (((CLIENTCLOCK() - int1) >= 1000)) {
        IF_SETONTIMER(callback(), comp(476, 24));  // sfa:initial
        IF_SETHIDE(true, comp(476, 24));  // sfa:initial
    };
    return;
}