//
function script1542(): void {
    script9554(1311006, 1311027, 1311007, "Load Preset", 21217);
    IF_SETHIDE(true, comp(20, 295));  // skillcape_customise:positive_button_disabled_layer
    IF_SETTEXT("Are you sure you wish to override your current colours?", comp(20, 288));  // skillcape_customise:description
    IF_SETHIDE(false, comp(20, 283));  // skillcape_customise:preset_confirmation_layer
    return;
}