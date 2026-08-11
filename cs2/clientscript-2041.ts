//[clientscript,blast_furnace_bar_stock]
function script2041(): void {
    IF_SETTEXT(`Steel: ${inttostring(varbitplayer_3629, 10)}`, comp(28, 3));  // blast_furnace_bar_stock:bf_steel
    if ((varbitplayer_3629 > 0)) {
        IF_SETCOLOUR(16750623, comp(28, 13));  // blast_furnace_bar_stock:bf_steelall
        IF_SETCOLOUR(16750623, comp(28, 3));  // blast_furnace_bar_stock:bf_steel
    } else {
        IF_SETCOLOUR(10066329, comp(28, 13));  // blast_furnace_bar_stock:bf_steelall
        IF_SETCOLOUR(10066329, comp(28, 3));  // blast_furnace_bar_stock:bf_steel
    };
    IF_SETTEXT(`Mithril: ${inttostring(varbitplayer_3630, 10)}`, comp(28, 2));  // blast_furnace_bar_stock:bf_mithril
    if ((varbitplayer_3630 > 0)) {
        IF_SETCOLOUR(16750623, comp(28, 11));  // blast_furnace_bar_stock:bf_mithrilall
        IF_SETCOLOUR(16750623, comp(28, 2));  // blast_furnace_bar_stock:bf_mithril
    } else {
        IF_SETCOLOUR(10066329, comp(28, 11));  // blast_furnace_bar_stock:bf_mithrilall
        IF_SETCOLOUR(10066329, comp(28, 2));  // blast_furnace_bar_stock:bf_mithril
    };
    IF_SETTEXT(`Adamant: ${inttostring(varbitplayer_3631, 10)}`, comp(28, 1));  // blast_furnace_bar_stock:bf_adamantite
    if ((varbitplayer_3631 > 0)) {
        IF_SETCOLOUR(16750623, comp(28, 9));  // blast_furnace_bar_stock:bf_adamantiteall
        IF_SETCOLOUR(16750623, comp(28, 1));  // blast_furnace_bar_stock:bf_adamantite
    } else {
        IF_SETCOLOUR(10066329, comp(28, 9));  // blast_furnace_bar_stock:bf_adamantiteall
        IF_SETCOLOUR(10066329, comp(28, 1));  // blast_furnace_bar_stock:bf_adamantite
    };
    IF_SETTEXT(`Rune: ${inttostring(varbitplayer_3632, 10)}`, comp(28, 0));  // blast_furnace_bar_stock:bf_runite
    if ((varbitplayer_3632 > 0)) {
        IF_SETCOLOUR(16750623, comp(28, 7));  // blast_furnace_bar_stock:bf_runiteall
        IF_SETCOLOUR(16750623, comp(28, 0));  // blast_furnace_bar_stock:bf_runite
    } else {
        IF_SETCOLOUR(10066329, comp(28, 7));  // blast_furnace_bar_stock:bf_runiteall
        IF_SETCOLOUR(10066329, comp(28, 0));  // blast_furnace_bar_stock:bf_runite
    };
    return;
}