//
function script6238(): void {
    if ((varclient_1925 == 1)) {
        IF_SETHIDE(false, comp(1285, 30));  // qbd2_energybar:timestop_overlay
        IF_SETHIDE(false, comp(1285, 29));  // qbd2_energybar:layer_grey
    } else {
        IF_SETHIDE(true, comp(1285, 30));  // qbd2_energybar:timestop_overlay
        IF_SETHIDE(true, comp(1285, 29));  // qbd2_energybar:layer_grey
    };
    return;
}