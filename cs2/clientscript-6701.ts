//
function script6701(int0: component, int1: component, int2: int): void {
    if ((CLIENTCLOCK() < int2)) {
        return;
    };
    if ((varclient_2012 > 0)) {
        varclient_2012 = (varclient_2012 - 1);
        script6700(int0, int1, 30);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}