//
function script2327(int0: number): void {
    if ((CLIENTCLOCK() >= (100 + int0))) {
        IF_SETONTIMER(callback(), 20054041);
        IF_SETHIDE(1, 20054041);
    };
    return;
}