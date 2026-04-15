//
function script1813(int0: int, int1: component): void {
    if ((CLIENTCLOCK() >= int0)) {
        IF_SETTEXT("", int1);
        IF_SETONTIMER(callback(), int1);
    };
    return;
}