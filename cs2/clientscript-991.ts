//
function script991(int0: number): void {
    IF_SETHIDE(0, 13369411);
    if ((CLIENTCLOCK() > int0)) {
        IF_SETHIDE(1, 13369411);
        IF_SETONTIMER(callback(), 13369422);
    };
    return;
}