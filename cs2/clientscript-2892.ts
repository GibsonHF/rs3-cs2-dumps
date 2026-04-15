//
function script2892(int0: unknown_int, int1: int): void {
    if (((CLIENTCLOCK() - int1) >= 180)) {
        varclient_1086 = 1;
    };
    if (((CLIENTCLOCK() - int1) >= 1000)) {
        IF_SETONTIMER(callback(), comp(476, 24));
        IF_SETHIDE(1, 31195160);
    };
    return;
}