//
function script8568(int0: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(1890, 24));  // prayer_quick_preset_interface:prayerbook_normal_radio_deselected
        IF_SETHIDE(false, comp(1890, 25));  // prayer_quick_preset_interface:prayerbook_normal_radio_selected
        IF_SETHIDE(false, comp(1890, 26));  // prayer_quick_preset_interface:prayerbook_curse_radio_deselected
        IF_SETHIDE(true, comp(1890, 27));  // prayer_quick_preset_interface:prayerbook_curse_radio_selected
    } else {
        if ((MAP_MEMBERS() == 0)) {
            printmessage("You can only create curse presets on a members world.");
            return;
        };
        if ((script20179() == 0)) {
            printmessage("You need to complete The Temple at Senntisten before you can access the curse prayer book.");
            return;
        };
        IF_SETHIDE(true, comp(1890, 26));  // prayer_quick_preset_interface:prayerbook_curse_radio_deselected
        IF_SETHIDE(false, comp(1890, 27));  // prayer_quick_preset_interface:prayerbook_curse_radio_selected
        IF_SETHIDE(false, comp(1890, 24));  // prayer_quick_preset_interface:prayerbook_normal_radio_deselected
        IF_SETHIDE(true, comp(1890, 25));  // prayer_quick_preset_interface:prayerbook_normal_radio_selected
    };
    return;
}