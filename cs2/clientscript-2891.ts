//
function script2891(int0: number, int1: number): void {
    if ((CLIENTCLOCK() >= int0)) {
        script1728(31195153);
        IF_SETHIDE(true, comp(476, 17));  // sfa:alert
        IF_SETONTIMER(callback(), int1);
    };
    return;
}