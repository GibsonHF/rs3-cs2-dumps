//
function script12791(int0: number, int1: number, int2: number): void {
    var int3 = 117440514;
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