//
function script19048(int0: int, int1: unknown_int): void {
    if ((CLIENTCLOCK() > int0)) {
        if ((int1 == 1)) {
            IF_SETHIDE(false, comp(1014, 48));
            IF_SETONTIMER(callback(script19049, (CLIENTCLOCK() + 36), int1), comp(1014, 46));
        } else {
            IF_SETHIDE(false, comp(1014, 101));
            IF_SETONTIMER(callback(script19049, (CLIENTCLOCK() + 36), int1), comp(1014, 47));
        };
    };
    return;
}