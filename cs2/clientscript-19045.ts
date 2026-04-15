//
function script19045(int0: int, int1: int): void {
    if (((int0 == -1) || ((CLIENTCLOCK() - int0) >= int1))) {
        IF_TRIGGEROP(comp(1253, 556), 0, 4);
        IF_SETONTIMER(callback(), comp(1014, 37));
    };
    return;
}