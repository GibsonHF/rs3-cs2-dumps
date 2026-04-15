//
function script10374(int0: component, int1: int): void {
    IF_SETHIDE(false, int0);
    var int1 = (int1 + CLIENTCLOCK());
    IF_SETONTIMER(callback(script10375, int1, -2147483645), int0);
    return;
}