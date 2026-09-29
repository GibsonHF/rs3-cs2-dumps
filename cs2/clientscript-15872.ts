//
function script15872(): void {
    var int0 = comp(1924, 6);  // toplevel_v2_combat_bar_mobile_buttons:button_layer_left
    if ((TESTBIT(varbitplayer_43335, (script11800(1043) - 1)) == 1)) {
        int0 = comp(1924, 94);  // toplevel_v2_combat_bar_mobile_buttons:button_layer_right
    };
    if ((IF_GETHIDE(comp(276, 27)) == false)) {  // toplevel_v2_mobile:chat_panel
        IF_SETHIDE(true, comp(279, 0));  // mobile_ribbon_left:root
        IF_SETHIDE(true, comp(1923, 0));  // toplevel_v2_combat_bar_mobile:combat_toggle
        IF_SETHIDE(true, int0);
        IF_SETHIDE(true, comp(1924, 183));  // toplevel_v2_combat_bar_mobile_buttons:selection_layer
        IF_SETHIDE(true, comp(1477, 595));  // toplevel_v2:holiday_event_window_background
        IF_SETHIDE(false, comp(1477, 57));  // toplevel_v2:mobile_block_right
    } else {
        IF_SETHIDE(false, comp(279, 0));  // mobile_ribbon_left:root
        IF_SETHIDE(false, comp(1923, 0));  // toplevel_v2_combat_bar_mobile:combat_toggle
        IF_SETHIDE(false, int0);
        IF_SETHIDE(false, comp(1924, 183));  // toplevel_v2_combat_bar_mobile_buttons:selection_layer
        IF_SETHIDE(false, comp(1477, 595));  // toplevel_v2:holiday_event_window_background
        IF_SETHIDE(true, comp(1477, 57));  // toplevel_v2:mobile_block_right
        if ((script11205(2442) == 1)) {
            script13017(varplayer_9017, varplayer_11481, varbitplayer_47683);
        };
    };
    return;
}