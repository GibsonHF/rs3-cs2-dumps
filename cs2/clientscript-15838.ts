//
function script15838(int0: int, int1: int, int2: unknown_int): void {
    var int3 = IF_GETWIDTH(comp(976, 7));
    if ((int0 == -1)) {
        if ((int3 == 0)) {
            return;
        };
        IF_SETONTIMER(callback(script15838, int3, 0, 0), 63963141);
        return;
    };
    var int4 = IF_GETWIDTH(comp(976, 8));
    var int5 = IF_GETWIDTH(comp(976, 5));
    var int6 = SCALE(3, 100, int5);
    if ((int2 == 1)) {
        if ((int4 >= int3)) {
            int4 = 0;
            IF_SETONTIMER(callback(script15838, int3, 0, 0), 63963141);
        } else {
            int4 = MIN(int3, (int4 + int6));
            IF_SETONTIMER(callback(script15838, int3, 0, 1), 63963141);
        };
        IF_SETSIZE(int4, 0, 0, 1, comp(976, 8));
        return;
    };
    if ((int0 != int3)) {
        IF_SETONTIMER(callback(script15838, int3, 0, 0), 63963141);
        return;
    };
    if ((int1 >= 50)) {
        IF_SETONTIMER(callback(script15838, int3, 0, 1), 63963141);
        return;
    };
    IF_SETONTIMER(callback(script15838, int3, (int1 + 1), 0), 63963141);
    return;
}