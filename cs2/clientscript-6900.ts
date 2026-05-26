//
function script6900(int0: number, int1: number): void {
    if ((CLIENTCLOCK() < int1)) {
        return;
    };
    IF_SETHIDE(0, 89456654);
    IF_SETONTIMER(callback(), int0);
    return;
}