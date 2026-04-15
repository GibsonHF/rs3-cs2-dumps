//
function script12791(int0: component, int1: int, int2: unknown_int): void {
    var int3 = comp(1792, 2);
    var int4 = (int1 - CLIENTCLOCK());
    if ((int4 <= 0)) {
        if ((int2 == 0)) {
            IF_SETTRANS(0, int3);
        } else if ((int2 == 1)) {
            IF_SETTRANS(255, int3);
        };
        IF_SETONTIMER(callback(), int0);
        return;
    };
    var int5 = IF_GETTRANS(int3);
    if ((int2 == 0)) {
        IF_SETTRANS(MAX((int5 - (int5 / int4)), 1), int3);
    } else if ((int2 == 1)) {
        IF_SETTRANS(MAX((int5 + (int5 / int4)), 254), int3);
    };
    return;
}