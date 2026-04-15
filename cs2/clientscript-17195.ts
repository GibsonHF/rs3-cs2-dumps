//
function script17195(int0: component, int1: unknown_int): void {
    var int2 = IF_GETTRANS(int0);
    if (((int1 == 0) && (int2 == 255))) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    if ((int1 == 1)) {
        int2 = MAX((int2 - 5), 0);
    } else {
        int2 = MIN((int2 + 5), 255);
    };
    IF_SETTRANS(int2, int0);
    if (((int1 == 1) && (int2 == 0))) {
        IF_SETONTIMER(callback(script17195, int0, 0), int0);
    };
    return;
}