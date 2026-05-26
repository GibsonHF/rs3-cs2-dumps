//
function script1813(int0: number, int1: number): void {
    if ((CLIENTCLOCK() >= int0)) {
        IF_SETTEXT("", int1);
        IF_SETONTIMER(callback(), int1);
    };
    return;
}