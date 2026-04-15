//
function script4234(int0: unknown_int, int1: component, int2: component, int3: int, int4: int): void {
    var int5 = 0;
    var int6 = (65353 / int4);
    int5 = MAX(0, (int4 - (CLIENTCLOCK() - int3)));
    if (((int5 >= (int4 / 2)) && (int5 <= int4))) {
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, int2);
        IF_SET2DANGLE(MIN((int5 * int6), 65353), int2);
        IF_SET2DANGLE(0, int1);
    } else if (((int5 > 0) && (int5 < (int4 / 2)))) {
        IF_SETHIDE(true, int2);
        IF_SETHIDE(false, int1);
        IF_SET2DANGLE(32768, int2);
        IF_SET2DANGLE(MIN((32768 + (int5 * int6)), 65353), int1);
    } else {
        IF_SET2DANGLE(32768, int2);
        IF_SET2DANGLE(32768, int1);
        IF_SETONOP(callback(script4233, int0, int1, int2, int4), int0);
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(1, int1);
        IF_SETHIDE(1, int2);
    };
    return;
}