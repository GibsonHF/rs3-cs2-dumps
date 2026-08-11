//
function script13901(): void {
    if ((script5918() != 1)) {
        IF_SETHIDE(true, comp(1925, 0));  // toplevel_v2_combat_bar_mobile_revo:combat_bar_root_wrapper
        return;
    };
    var int0 = script15873();
    var int1 = (int0 + IF_GETX(comp(1924, 4)));  // toplevel_v2_combat_bar_mobile_buttons:revo_bar_start
    var int2 = (((IF_GETWIDTH(comp(1477, 60)) - 250) - 50) + int0);  // toplevel_v2:plugin_build_layer_bottom
    var int3 = (6 + (28 * varbitplayer_38639));
    var int4 = ((IF_GETX(comp(1477, 60)) + (IF_GETWIDTH(comp(1477, 60)) / 2)) - (int3 / 2));  // toplevel_v2:plugin_build_layer_bottom
    var int5 = MIN(-12, (int2 - (int4 + int3)));
    var int6 = varbitplayer_38639;
    var int7 = 0;
    if (((int4 + int5) < int1)) {
        int7 = (int1 - (int4 + int5));
        int6 = (int6 - ((int7 / 28) + MIN(1, MODULO(int7, 28))));
        int3 = (6 + (28 * int6));
        int5 = (int5 + ((28 * (varbitplayer_38639 - int6)) / 2));
    };
    var int8 = 14;
    while ((int8 > 0)) {
        if ((int8 > int6)) {
            IF_SETHIDE(true, enum_getvalue(0, 9, 13332 as cs2enum, int8));
        } else {
            IF_SETHIDE(false, enum_getvalue(0, 9, 13332 as cs2enum, int8));
        };
        int8 = (int8 - 1);
    };
    IF_SETHIDE(false, comp(1925, 0));  // toplevel_v2_combat_bar_mobile_revo:combat_bar_root_wrapper
    IF_SETSIZE(int3, 34, 0, 0, comp(1925, 13));  // toplevel_v2_combat_bar_mobile_revo:combat_bar_root
    IF_SETPOSITION(int5, 0, 1, 2, comp(1925, 13));  // toplevel_v2_combat_bar_mobile_revo:combat_bar_root
    return;
}