//
function script2891(int0: int, int1: component): void {
    if ((CLIENTCLOCK() >= int0)) {
        script1728(comp(476, 17));
        IF_SETHIDE(true, comp(476, 17));
        IF_SETONTIMER(callback(), int1);
    };
    return;
}