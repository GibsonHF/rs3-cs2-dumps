//
function script9506(int0: number, int1: number): void {
    if (((int0 == 0) || (int1 == 0))) {
        IF_SETHIDE(true, comp(749, 62));  // 6awe2_hud:golem_layer
        return;
    };
    IF_SETHIDE(false, comp(749, 62));  // 6awe2_hud:golem_layer
    if ((int0 > int1)) {
        var int0 = int1;
    };
    var int2 = IF_GETWIDTH(comp(749, 71));  // 6awe2_hud:golem_status_layer
    int2 = SCALE(int0, int1, int2);
    if ((int2 < 1)) {
        int2 = 1;
    };
    IF_SETSIZE(int2, 0, 0, 1, comp(749, 5));  // 6awe2_hud:golem_status
    IF_SETONMOUSEREPEAT(callback(script9508, -2147483645, -2147483647, -2147483646, int0), comp(749, 62));  // 6awe2_hud:golem_layer
    return;
}