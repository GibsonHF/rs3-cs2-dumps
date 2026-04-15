//
function script6328(int0: component, int1: int): void {
    if ((CLIENTCLOCK() < int1)) {
        return;
    };
    var int2 = MIN((IF_GETTRANS(int0) + 20), 255);
    IF_SETTRANS(int2, int0);
    if ((int2 >= 255)) {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}