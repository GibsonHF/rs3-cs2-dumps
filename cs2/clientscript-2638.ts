//
function script2638(): void {
    if ((script6431() == 0)) {
        return;
    };
    var int0 = comp(1924, 94);  // toplevel_v2_combat_bar_mobile_buttons:button_layer_right
    if ((TESTBIT(varbitplayer_43335, (script11800(1043) - 1)) == 1)) {
        int0 = comp(1924, 6);  // toplevel_v2_combat_bar_mobile_buttons:button_layer_left
    };
    var int1 = IF_GETHEIGHT(comp(1477, 60));  // toplevel_v2:plugin_build_layer_bottom
    var int2 = IF_GETHEIGHT(comp(276, 16));  // toplevel_v2_mobile:settings_mobile
    var int3 = (((int1 - 410) - int2) - 10);
    if (((((varbitplayer_51268 == 0) && (varbitclient_38843 > 0)) && (varplayer_7879 == 1)) && (int3 <= IF_GETHEIGHT(int0)))) {
        IF_SETHIDE(true, int0);
        return;
    };
    IF_SETHIDE(false, int0);
    return;
}