//
function script4761(int0: int): unknown_int {
    if ((varclient_1 < (CLIENTCLOCK() + int0))) {
        if ((varclient_1 < CLIENTCLOCK())) {
            varclient_1 = CLIENTCLOCK();
        };
        varclient_1 = (varclient_1 + 2);
        return 0;
    };
    varclient_1 = ((CLIENTCLOCK() + int0) + 10);
    return 1;
}