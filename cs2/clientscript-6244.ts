//
function script6244(): void {
    varclient_1923 = (varclient_1923 - (25000 / 50));
    var int0 = MAX(1, (100 - SCALE(varclient_1923, 25000, 100)));
    if ((varclient_1923 <= 0)) {
        varclient_1923 = 0;
        IF_SETONTIMER(callback(), comp(1285, 2));  // qbd2_energybar:layer_bar_bounds
        IF_SETHIDE(false, comp(1285, 32));  // qbd2_energybar:layer_bar_text
        IF_SETTEXT(TOSTRING_LOCALISED((25000 - varclient_1923), 1), comp(1285, 32));  // qbd2_energybar:layer_bar_text
    } else {
        script4542(int0, 84213764, -1);
        IF_SETHIDE(false, comp(1285, 32));  // qbd2_energybar:layer_bar_text
        IF_SETTEXT(TOSTRING_LOCALISED((25000 - varclient_1923), 1), comp(1285, 32));  // qbd2_energybar:layer_bar_text
    };
    return;
}