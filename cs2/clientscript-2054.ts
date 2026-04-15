//
function script2054(int0: int, int1: component, int2: coordgrid): void {
    if ((CLIENTCLOCK() >= int0)) {
        WORLDMAP_JUMPTOSOURCECOORD(int2);
        IF_SETONTIMER(callback(), int1);
    };
    return;
}