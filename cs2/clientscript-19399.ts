//
function script19399(int0: number): void {
    if ((WORLDLIST_FETCH() == 1)) {
        varclient_6542 = CLIENTCLOCK();
        IF_SETONTIMER(callback(), int0);
        script19402();
    };
    return;
}