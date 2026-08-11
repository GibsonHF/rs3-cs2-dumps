//
function script8569(): void {
    if ((varbitplayer_16789 == 1)) {
        IF_SETHIDE(true, comp(1890, 24));  // prayer_quick_preset_interface:prayerbook_normal_radio_deselected
        IF_SETHIDE(false, comp(1890, 25));  // prayer_quick_preset_interface:prayerbook_normal_radio_selected
        IF_SETHIDE(false, comp(1890, 26));  // prayer_quick_preset_interface:prayerbook_curse_radio_deselected
        IF_SETHIDE(true, comp(1890, 27));  // prayer_quick_preset_interface:prayerbook_curse_radio_selected
    } else {
        IF_SETHIDE(true, comp(1890, 26));  // prayer_quick_preset_interface:prayerbook_curse_radio_deselected
        IF_SETHIDE(false, comp(1890, 27));  // prayer_quick_preset_interface:prayerbook_curse_radio_selected
        IF_SETHIDE(false, comp(1890, 24));  // prayer_quick_preset_interface:prayerbook_normal_radio_deselected
        IF_SETHIDE(true, comp(1890, 25));  // prayer_quick_preset_interface:prayerbook_normal_radio_selected
    };
    return;
}