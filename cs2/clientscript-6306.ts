//
function script6306(int0: unknown_int, int1: component): void {
    if ((WORLDLIST_FETCH() == 1)) {
        varclient_6542 = CLIENTCLOCK();
        IF_SETONTIMER(callback(), int1);
        script6307(int0);
    };
    return;
}