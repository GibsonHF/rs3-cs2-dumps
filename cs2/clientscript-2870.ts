//
function script2870(int0: component, int1: int): void {
    if ((CLIENTCLOCK() >= int1)) {
        IF_SETHIDE(true, int0);
        IF_SETONTIMER(callback(), int0);
    };
    return;
}