//
function script8570(int0: number): void {
    script8568(varbitplayer_36828);
    IF_SETHIDE(false, comp(1890, 12));  // prayer_quick_preset_interface:create_preset_layer
    IF_SETONVARTRANSMIT(callback(script8567, 7053, 1), comp(1890, 12));  // prayer_quick_preset_interface:create_preset_layer
    IF_SETHIDE(true, comp(1890, 34));  // prayer_quick_preset_interface:tooltips
    IF_SETONOP(callback(script8493, int0), comp(1890, 48));  // prayer_quick_preset_interface:create_preset_button_active_layer
    return;
}