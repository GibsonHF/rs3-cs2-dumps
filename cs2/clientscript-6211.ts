//
function script6211(int0: component, int1: int): void {
    var int2 = (CLIENTCLOCK() + 2);
    IF_SETONTIMER(callback(script8804, int0, int1, int2), script10075());
    return;
}