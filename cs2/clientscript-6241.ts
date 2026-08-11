//
function script6241(): void {
    var int0 = IF_GETWIDTH(comp(1285, 4));  // qbd2_energybar:layer_bar_green
    var int1 = MAX(1, (100 - SCALE(varclient_1923, 25000, 100)));
    script4542(int1, 84213764, -1);
    IF_SETTEXT(TOSTRING_LOCALISED((25000 - varclient_1923), 1), comp(1285, 32));  // qbd2_energybar:layer_bar_text
    var int2 = IF_GETWIDTH(comp(1285, 4));  // qbd2_energybar:layer_bar_green
    var int3 = (int0 - int2);
    if ((int3 > 0)) {
        IF_SETSIZE(int3, IF_GETHEIGHT(comp(1285, 24)), 0, 0, comp(1285, 24));  // qbd2_energybar:layer_bar_red
        IF_SETTRANS(0, comp(1285, 25));  // qbd2_energybar:red_left
        IF_SETTRANS(0, comp(1285, 26));  // qbd2_energybar:red_middle
        IF_SETTRANS(0, comp(1285, 27));  // qbd2_energybar:red_right
        IF_SETPOSITION(IF_GETWIDTH(comp(1285, 4) /*qbd2_energybar:layer_bar_green*/), IF_GETY(comp(1285, 24) /*qbd2_energybar:layer_bar_red*/), 0, 0, comp(1285, 24) /*qbd2_energybar:layer_bar_red*/);
        IF_SETHIDE(false, comp(1285, 24));  // qbd2_energybar:layer_bar_red
        IF_SETONTIMER(callback(script6242), comp(1285, 4));  // qbd2_energybar:layer_bar_green
    };
    return;
}