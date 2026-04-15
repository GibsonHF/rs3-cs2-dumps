//
function script18328(int0: dbrow, int1: int, int2: int): void {
    var int3 = comp(743, 8);
    IF_SETHIDE(false, int3);
    var int4 = dbrow_getfield(int0, 483424, 0);
    if ((int4 == 0)) {
        return;
    };
    var int5 = (CLIENTCLOCK() + (((int1 - int2) - int4) * 30));
    var int6 = (CLIENTCLOCK() + ((int1 - int2) * 30));
    IF_SETONTIMER(callback(script15976, int3, int5, int6), int3);
    return;
}