//
function script10374(int0: number, int1: number): void {
    IF_SETHIDE(0, int0);
    var int1 = (int1 + CLIENTCLOCK());
    IF_SETONTIMER(callback(script10375, int1, -2147483645), int0);
    return;
}