//
function script14101(int0: component, int1: unknown_int, int2: unknown_int, int3: unknown_int): void {
    if ((int3 != 1)) {
        return;
    };
    var int4 = 111;
    if (((int2 == 1) || (IF_GETHEIGHT(int0) < int4))) {
        IF_SETHIDE(false, int0);
        script14093(int0, -1, 16, 1, int4, 0, 10, 2);
        IF_SETONTIMER(callback(script14102, int0, int1, 10), int1);
    } else {
        script14133(int0, int1);
    };
    return;
}