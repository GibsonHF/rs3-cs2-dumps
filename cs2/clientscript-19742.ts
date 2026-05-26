//
function script19742(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = IF_GETWIDTH(int0);
    var int5 = IF_GETWIDTH(int2);
    if ((int4 < 200)) {
        int4 = MIN(200, (int4 + 25));
        IF_SETSIZE(int4, IF_GETHEIGHT(int0), 0, 0, int0);
        IF_SETONTIMER(callback(script19742, int0, int1, int2, int3), int0);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    if ((int4 >= 175)) {
        IF_SETHIDE(false, int3);
    } else if ((int4 > 100)) {
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, int2);
    };
    return;
}