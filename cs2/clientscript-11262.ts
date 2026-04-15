//
function script11262(int0: component, int1: unknown_int): void {
    var int2 = IF_GETWIDTH(int0);
    var int3 = IF_GETHEIGHT(int0);
    if ((int2 > 30)) {
        int2 = MAX((int2 - 6), 30);
    };
    if ((int3 > 30)) {
        int3 = MAX((int3 - 6), 30);
    };
    IF_SETSIZE(int2, int3, 0, 0, int0);
    if (((int2 == 30) && (int3 == 30))) {
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(1, int1);
    };
    return;
}