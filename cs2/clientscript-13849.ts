//
function script13849(): void {
    IF_SETHIDE(true, comp(567, 11));  // toplevel_v2_ribbon_select:size_display_1
    IF_SETHIDE(true, comp(567, 12));  // toplevel_v2_ribbon_select:size_display_2
    IF_SETHIDE(true, comp(567, 13));  // toplevel_v2_ribbon_select:size_display_3
    var int0 = 0;
    var int1 = 0;
    if ((IF_FIND(comp(1431, 1)) == 1)) {  // toplevel_v2_ribbon:ribbon_root
        int0 = cc_getparam(6837);
        int1 = MIN(cc_getparam(6838), 30);
    };
    var int2 = ((44 * MODULO(int0, 15)) - 7);
    switch ((int0 / 15)) {
        case 0: {
            script13850(0, 1, 1, int2, 0, 0);
            break;
        }
        case 1: {
            script13850(0, 0, 1, 653, int2, 0);
            break;
        }
        case 2: {
            script13850(0, 0, 0, 653, 653, int2);
            break;
        }
        case 3: {
            script13850(0, 0, 0, 653, 653, 653);
            break;
        }
    };
    if ((script6431() == 1)) {
        IF_SETHIDE(true, comp(567, 3));  // toplevel_v2_ribbon_select:mode
        IF_SETPOSITION(0, 0, 2, 0, comp(567, 2));  // toplevel_v2_ribbon_select:reset_button_layer
        IF_SETTEXT(`Ribbon Bar - Displays up to ${inttostring(8, 10)} icons.`, comp(567, 8));  // toplevel_v2_ribbon_select:ribbon_bar_title
    } else {
        IF_SETHIDE(false, comp(567, 3));  // toplevel_v2_ribbon_select:mode
        IF_SETPOSITION(0, 0, 1, 0, comp(567, 2));  // toplevel_v2_ribbon_select:reset_button_layer
        script10416(37158916, 37158917, "Use custom ribbon", "", "", varbitclient_42113);
        IF_SETTEXT(`Ribbon Bar - Displays up to ${TOSTRING_LOCALISED(int1, 1)} icons at current size.`, comp(567, 8));  // toplevel_v2_ribbon_select:ribbon_bar_title
    };
    return;
}