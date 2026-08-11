//
function script5463(): void {
    if ((varclient_1676 == 0)) {
        varclient_1676 = 1;
        IF_SETHIDE(true, comp(1159, 31));  // dom_battle_overlay:handicap_icons_layer
        IF_SETSIZE(IF_GETWIDTH(comp(1159, 23)), 37, 0, 0, comp(1159, 23));  // dom_battle_overlay:stats_layer
        IF_SET2DANGLE(16384, comp(1159, 55));  // dom_battle_overlay:expand_graphic
    } else {
        varclient_1676 = 0;
        IF_SETHIDE(false, comp(1159, 31));  // dom_battle_overlay:handicap_icons_layer
        IF_SET2DANGLE(49152, comp(1159, 55));  // dom_battle_overlay:expand_graphic
        script5464();
    };
    return;
}