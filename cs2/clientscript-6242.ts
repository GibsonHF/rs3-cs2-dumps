//
function script6242(): void {
    var int0 = IF_GETTRANS(comp(1285, 26));  // qbd2_energybar:red_middle
    if ((int0 >= 243)) {
        IF_SETHIDE(true, comp(1285, 24));  // qbd2_energybar:layer_bar_red
        IF_SETONTIMER(callback(), comp(1285, 4));  // qbd2_energybar:layer_bar_green
    } else {
        IF_SETTRANS((int0 + 11), comp(1285, 25));  // qbd2_energybar:red_left
        IF_SETTRANS((int0 + 11), comp(1285, 26));  // qbd2_energybar:red_middle
        IF_SETTRANS((int0 + 11), comp(1285, 27));  // qbd2_energybar:red_right
    };
    return;
}