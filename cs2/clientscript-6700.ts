//
function script6700(int0: component, int1: component, int2: int): void {
    IF_SETTEXT(script6702(varclient_2012), int1);
    if ((varclient_2012 > 0)) {
        IF_SETONTIMER(callback(script6701, int0, int1, (CLIENTCLOCK() + int2)), int0);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}