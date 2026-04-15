//
function script13476(int0: component, int1: int): void {
    if ((CLIENTCLOCK() < int1)) {
        return;
    };
    if ((varclient_6065 < 510)) {
        script13475(int0, 30);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}