//
function script10751(): void {
    IF_SETHIDE(true, comp(1547, 5));  // house_keyhole_overlay:house_keyhole_enter_button_legacy
    IF_SETHIDE(true, comp(1547, 6));  // house_keyhole_overlay:house_keyhole_back_button_legacy
    IF_SETHIDE(false, comp(1547, 3));  // house_keyhole_overlay:house_keyhole_enter_button
    IF_SETHIDE(false, comp(1547, 4));  // house_keyhole_overlay:house_keyhole_back_button
    return;
}