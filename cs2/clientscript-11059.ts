//
function script11059(): void {
    if ((varbitplayer_27142 == 1)) {
        IF_SETHIDE(false, comp(1591, 110));  // boss_instance:neutral_button_on_layer_1
        IF_SETHIDE(true, comp(1591, 112));  // boss_instance:neutral_button_hit_layer_1
    } else {
        IF_SETHIDE(true, comp(1591, 110));  // boss_instance:neutral_button_on_layer_1
        IF_SETHIDE(false, comp(1591, 112));  // boss_instance:neutral_button_hit_layer_1
    };
    return;
}