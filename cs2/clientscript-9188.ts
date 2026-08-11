//
function script9188(): void {
    if ((varbitplayer_20797 == 1)) {
        IF_SETHIDE(true, comp(1344, 107));  // minigames_main:checkbox_deselected_layer
        IF_SETHIDE(false, comp(1344, 106));  // minigames_main:checkbox_selected_layer
        IF_SETHIDE(true, comp(1344, 88));  // minigames_main:checkbox_deselected_layer_1
        IF_SETHIDE(false, comp(1344, 87));  // minigames_main:checkbox_selected_layer_1
    } else {
        IF_SETHIDE(false, comp(1344, 107));  // minigames_main:checkbox_deselected_layer
        IF_SETHIDE(true, comp(1344, 106));  // minigames_main:checkbox_selected_layer
        IF_SETHIDE(false, comp(1344, 88));  // minigames_main:checkbox_deselected_layer_1
        IF_SETHIDE(true, comp(1344, 87));  // minigames_main:checkbox_selected_layer_1
    };
    return;
}