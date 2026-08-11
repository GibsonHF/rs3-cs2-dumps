//
function script11059(): void {
    if ((varbitplayer_27142 == 1)) {
        IF_SETHIDE(false, comp(1591, 110));  // boss_instance:practicemode_checkbox_selected_layer
        IF_SETHIDE(true, comp(1591, 112));  // boss_instance:practicemode_checkbox_deselected_layer
    } else {
        IF_SETHIDE(true, comp(1591, 110));  // boss_instance:practicemode_checkbox_selected_layer
        IF_SETHIDE(false, comp(1591, 112));  // boss_instance:practicemode_checkbox_deselected_layer
    };
    return;
}