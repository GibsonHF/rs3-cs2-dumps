//
function script1541(): void {
    script9554(1311006, 1311027, 1311007, "Save Preset", 21217);
    IF_SETHIDE(true, comp(20, 295));  // skillcape_customise:positive_button_disabled_layer
    if ((varplayer_424 == 0)) {
        if ((varplayer_425 == 0)) {
            IF_SETTEXT("That colour combination can not be saved. Please select another set of colours.", comp(20, 288));  // skillcape_customise:description
            IF_SETHIDE(false, comp(20, 295));  // skillcape_customise:positive_button_disabled_layer
        } else {
            IF_SETTEXT("Are you sure you wish to override the current preset?", comp(20, 288));  // skillcape_customise:description
        };
    } else {
        IF_SETTEXT("Are you sure you wish to override the current preset?", comp(20, 288));  // skillcape_customise:description
    };
    IF_SETHIDE(false, comp(20, 283));  // skillcape_customise:preset_confirmation_layer
    return;
}