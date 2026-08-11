//
function script15838(int0: number, int1: number, int2: number): void {
    var int3 = IF_GETWIDTH(comp(976, 7));  // options_firstrun:progress_fill
    if ((int0 == -1)) {
        if ((int3 == 0)) {
            return;
        };
        IF_SETONTIMER(callback(script15838, int3, 0, 0), comp(976, 5));  // options_firstrun:inner
        return;
    };
    var int4 = IF_GETWIDTH(comp(976, 8));  // options_firstrun:progress_anim_fill
    var int5 = IF_GETWIDTH(comp(976, 5));  // options_firstrun:inner
    var int6 = SCALE(3, 100, int5);
    if ((int2 == 1)) {
        if ((int4 >= int3)) {
            int4 = 0;
            IF_SETONTIMER(callback(script15838, int3, 0, 0), comp(976, 5));  // options_firstrun:inner
        } else {
            int4 = MIN(int3, (int4 + int6));
            IF_SETONTIMER(callback(script15838, int3, 0, 1), comp(976, 5));  // options_firstrun:inner
        };
        IF_SETSIZE(int4, 0, 0, 1, comp(976, 8));  // options_firstrun:progress_anim_fill
        return;
    };
    if ((int0 != int3)) {
        IF_SETONTIMER(callback(script15838, int3, 0, 0), comp(976, 5));  // options_firstrun:inner
        return;
    };
    if ((int1 >= 50)) {
        IF_SETONTIMER(callback(script15838, int3, 0, 1), comp(976, 5));  // options_firstrun:inner
        return;
    };
    IF_SETONTIMER(callback(script15838, int3, (int1 + 1), 0), comp(976, 5));  // options_firstrun:inner
    return;
}