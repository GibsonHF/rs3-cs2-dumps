//
function script1023(int0: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1890, 95));  // prayer_quick_preset_interface:this_preset_radio_deselected
        IF_SETHIDE(true, comp(1890, 96));  // prayer_quick_preset_interface:this_preset_radio_selected
        IF_SETHIDE(false, comp(1890, 92));  // prayer_quick_preset_interface:last_used_normal_radio_deselected
        IF_SETHIDE(true, comp(1890, 93));  // prayer_quick_preset_interface:last_used_normal_radio_selected
    } else if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1890, 95));  // prayer_quick_preset_interface:this_preset_radio_deselected
        IF_SETHIDE(false, comp(1890, 96));  // prayer_quick_preset_interface:this_preset_radio_selected
        IF_SETHIDE(false, comp(1890, 92));  // prayer_quick_preset_interface:last_used_normal_radio_deselected
        IF_SETHIDE(true, comp(1890, 93));  // prayer_quick_preset_interface:last_used_normal_radio_selected
    } else {
        IF_SETHIDE(true, comp(1890, 92));  // prayer_quick_preset_interface:last_used_normal_radio_deselected
        IF_SETHIDE(false, comp(1890, 93));  // prayer_quick_preset_interface:last_used_normal_radio_selected
        IF_SETHIDE(false, comp(1890, 95));  // prayer_quick_preset_interface:this_preset_radio_deselected
        IF_SETHIDE(true, comp(1890, 96));  // prayer_quick_preset_interface:this_preset_radio_selected
    };
    return;
}