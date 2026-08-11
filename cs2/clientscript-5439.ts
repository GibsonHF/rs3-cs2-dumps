//
function script5439(): void {
    if ((varbitplayer_3658 == 0)) {
        IF_SETHIDE(true, comp(1168, 291));  // dom_free:checkbox_selected_layer
        IF_SETHIDE(false, comp(1168, 292));  // dom_free:checkbox_deselected_layer
    } else {
        IF_SETHIDE(false, comp(1168, 291));  // dom_free:checkbox_selected_layer
        IF_SETHIDE(true, comp(1168, 292));  // dom_free:checkbox_deselected_layer
    };
    if ((varbitplayer_3797 == 0)) {
        IF_SETHIDE(true, comp(1168, 359));  // dom_free:checkbox_selected_layer_1
        IF_SETHIDE(false, comp(1168, 360));  // dom_free:checkbox_deselected_layer_1
    } else {
        IF_SETHIDE(false, comp(1168, 359));  // dom_free:checkbox_selected_layer_1
        IF_SETHIDE(true, comp(1168, 360));  // dom_free:checkbox_deselected_layer_1
    };
    if ((varbitplayer_3798 == 0)) {
        IF_SETHIDE(true, comp(1168, 362));  // dom_free:checkbox_selected_layer_2
        IF_SETHIDE(false, comp(1168, 363));  // dom_free:checkbox_deselected_layer_2
    } else {
        IF_SETHIDE(false, comp(1168, 362));  // dom_free:checkbox_selected_layer_2
        IF_SETHIDE(true, comp(1168, 363));  // dom_free:checkbox_deselected_layer_2
    };
    IF_SETHIDE(true, comp(1168, 13));  // dom_free:scroll_layer_boss_info
    IF_SETHIDE(true, comp(1168, 12));  // dom_free:scroll_layer_handicaps
    script5441();
    script5444(1);
    varclient_2 = 0;
    return;
}