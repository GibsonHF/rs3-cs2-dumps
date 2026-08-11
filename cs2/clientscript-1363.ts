//
function script1363(int0: number, int1: number, int2: number): void {
    var int3 = comp(1924, 189);  // toplevel_v2_combat_bar_mobile_buttons:bar_selection_layer
    var int4 = IF_GETHEIGHT(int3);
    var int5 = MAX(1, SCALE(10, 50, int4));
    var int6 = 0;
    var int2 = (int2 + int5);
    if ((int1 == 1)) {
        int6 = MIN(0, ((0 - int4) + int2));
    } else {
        int6 = MAX((0 - int4), (0 - int2));
    };
    IF_SETPOSITION(0, int6, 1, 2, int3);
    if ((int2 >= int4)) {
        IF_SETONTIMER(callback(), int0);
        if ((int1 == 0)) {
            IF_SETHIDE(true, int3);
        };
        return;
    };
    IF_SETONTIMER(callback(script1363, int0, int1, int2), int0);
    return;
}