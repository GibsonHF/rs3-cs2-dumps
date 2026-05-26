//
function script7203(int0: number, int1: number): void {
    var int2 = 0;
    if ((IF_GETHIDE(int1) == 1)) {
        IF_SETHIDE(0, int0);
        int2 = (CLIENTCLOCK() + 30);
        IF_SETONTIMER(callback(script7204, int0, int1, int2), int0);
    };
    return;
}