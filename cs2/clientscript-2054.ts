//
function script2054(int0: number, int1: number, int2: number): void {
    if ((CLIENTCLOCK() >= int0)) {
        WORLDMAP_JUMPTOSOURCECOORD(int2);
        IF_SETONTIMER(callback(), int1);
    };
    return;
}