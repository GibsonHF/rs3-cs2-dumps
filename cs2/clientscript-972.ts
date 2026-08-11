//
function script972(int0: number): void {
    IF_SETHIDE(true, comp(1890, 12));  // prayer_quick_preset_interface:create_preset_layer
    IF_SETHIDE(false, comp(1890, 19));  // prayer_quick_preset_interface:edit_preset_layer
    IF_SETONVARTRANSMIT(callback(script975, 7057, 1), comp(1890, 19));  // prayer_quick_preset_interface:edit_preset_layer
    IF_SETHIDE(true, comp(1890, 34));  // prayer_quick_preset_interface:tooltips
    IF_SETONOP(callback(script973, int0), comp(1890, 76));  // prayer_quick_preset_interface:save_preset_button_active_layer
    return;
}