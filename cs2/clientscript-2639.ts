//
function script2639(): void {
    IF_SETHIDE(false, comp(1924, 95));  // toplevel_v2_combat_bar_mobile_buttons:blocking_layer_right
    IF_SETHIDE(false, comp(1924, 94));  // toplevel_v2_combat_bar_mobile_buttons:button_layer_right
    IF_SETHIDE(false, comp(1924, 7));  // toplevel_v2_combat_bar_mobile_buttons:blocking_layer_left
    IF_SETHIDE(false, comp(1924, 6));  // toplevel_v2_combat_bar_mobile_buttons:button_layer_left
    if ((TESTBIT(varbitplayer_43335, (script11800(1043) - 1)) == 1)) {
        IF_SETPOSITION(70, 0, 2, 0, comp(1924, 6));  // toplevel_v2_combat_bar_mobile_buttons:button_layer_left
        IF_SETPOSITION(0, 0, 2, 0, comp(1924, 82));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_1
        IF_SETPOSITION(0, 72, 2, 0, comp(1924, 58));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_3
        IF_SETPOSITION(0, 72, 0, 0, comp(1924, 34));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_5
        IF_SETPOSITION(0, 144, 0, 0, comp(1924, 10));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_7
        IF_SETPOSITION(0, 0, 2, 0, comp(1924, 8));  // toplevel_v2_combat_bar_mobile_buttons:blocking_layer_1
        IF_SETPOSITION(0, 0, 0, 2, comp(1924, 9));  // toplevel_v2_combat_bar_mobile_buttons:blocking_layer_2
        IF_SETPOSITION(70, 0, 0, 0, comp(1924, 94));  // toplevel_v2_combat_bar_mobile_buttons:button_layer_right
        IF_SETPOSITION(0, 0, 0, 0, comp(1924, 170));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_8
        IF_SETPOSITION(0, 72, 0, 0, comp(1924, 146));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_10
        IF_SETPOSITION(0, 72, 2, 0, comp(1924, 122));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_12
        IF_SETPOSITION(0, 144, 2, 0, comp(1924, 98));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_14
        IF_SETPOSITION(0, 0, 0, 0, comp(1924, 96));  // toplevel_v2_combat_bar_mobile_buttons:blocking_layer_3
        IF_SETPOSITION(0, 0, 2, 2, comp(1924, 97));  // toplevel_v2_combat_bar_mobile_buttons:blocking_layer_4
    } else {
        IF_SETPOSITION(70, 0, 0, 0, comp(1924, 6));  // toplevel_v2_combat_bar_mobile_buttons:button_layer_left
        IF_SETPOSITION(0, 0, 0, 0, comp(1924, 82));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_1
        IF_SETPOSITION(0, 72, 0, 0, comp(1924, 58));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_3
        IF_SETPOSITION(0, 72, 2, 0, comp(1924, 34));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_5
        IF_SETPOSITION(0, 144, 2, 0, comp(1924, 10));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_7
        IF_SETPOSITION(0, 0, 0, 0, comp(1924, 8));  // toplevel_v2_combat_bar_mobile_buttons:blocking_layer_1
        IF_SETPOSITION(0, 0, 2, 2, comp(1924, 9));  // toplevel_v2_combat_bar_mobile_buttons:blocking_layer_2
        IF_SETPOSITION(70, 0, 2, 0, comp(1924, 94));  // toplevel_v2_combat_bar_mobile_buttons:button_layer_right
        IF_SETPOSITION(0, 0, 2, 0, comp(1924, 170));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_8
        IF_SETPOSITION(0, 72, 2, 0, comp(1924, 146));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_10
        IF_SETPOSITION(0, 72, 0, 0, comp(1924, 122));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_12
        IF_SETPOSITION(0, 144, 0, 0, comp(1924, 98));  // toplevel_v2_combat_bar_mobile_buttons:button_holder_14
        IF_SETPOSITION(0, 0, 2, 0, comp(1924, 96));  // toplevel_v2_combat_bar_mobile_buttons:blocking_layer_3
        IF_SETPOSITION(0, 0, 0, 2, comp(1924, 97));  // toplevel_v2_combat_bar_mobile_buttons:blocking_layer_4
    };
    script2638();
    script15872();
    return;
}