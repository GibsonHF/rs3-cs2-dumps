//
function script15975(int0: number): void {
    var int1 = 48693256;
    IF_SETHIDE(0, int1);
    var int2 = dbrow_getfield(int0, 483424, 0);
    if ((int2 == 0)) {
        return;
    };
    var int3 = (CLIENTCLOCK() + (int2 * 30));
    IF_SETONTIMER(callback(script15976, int1, CLIENTCLOCK(), int3), int1);
    return;
}