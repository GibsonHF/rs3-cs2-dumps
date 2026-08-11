//
function script12205(): void {
    if ((varbitplayer_30365 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(8000, 1), comp(1715, 62));  // trh80_corrupt:helmet_price
    } else {
        IF_SETTEXT("Owned", comp(1715, 62));  // trh80_corrupt:helmet_price
        IF_SETHIDE(false, comp(1715, 59));  // trh80_corrupt:helmet_button_disabled
    };
    if ((varbitplayer_30366 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), comp(1715, 84));  // trh80_corrupt:chestplate_price
    } else {
        IF_SETTEXT("Owned", comp(1715, 84));  // trh80_corrupt:chestplate_price
        IF_SETHIDE(false, comp(1715, 81));  // trh80_corrupt:chestplate_button_disabled
    };
    if ((varbitplayer_30367 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(8000, 1), comp(1715, 74));  // trh80_corrupt:legplates_price
    } else {
        IF_SETTEXT("Owned", comp(1715, 74));  // trh80_corrupt:legplates_price
        IF_SETHIDE(false, comp(1715, 70));  // trh80_corrupt:legplates_button_disabled
    };
    if ((varbitplayer_30368 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(4000, 1), comp(1715, 42));  // trh80_corrupt:gauntlets_price
    } else {
        IF_SETTEXT("Owned", comp(1715, 42));  // trh80_corrupt:gauntlets_price
        IF_SETHIDE(false, comp(1715, 39));  // trh80_corrupt:gauntlets_button_disabled
    };
    if ((varbitplayer_30369 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(4000, 1), comp(1715, 52));  // trh80_corrupt:boots_price
    } else {
        IF_SETTEXT("Owned", comp(1715, 52));  // trh80_corrupt:boots_price
        IF_SETHIDE(false, comp(1715, 49));  // trh80_corrupt:boots_button_disabled
    };
    if ((varbitplayer_30370 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(6000, 1), comp(1715, 116));  // trh80_corrupt:cape_price
    } else {
        IF_SETTEXT("Owned", comp(1715, 116));  // trh80_corrupt:cape_price
        IF_SETHIDE(false, comp(1715, 112));  // trh80_corrupt:cape_button_disabled
    };
    if ((varbitplayer_30371 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(8000, 1), comp(1715, 95));  // trh80_corrupt:wings_price
    } else {
        IF_SETTEXT("Owned", comp(1715, 95));  // trh80_corrupt:wings_price
        IF_SETHIDE(false, comp(1715, 92));  // trh80_corrupt:wings_button_disabled
    };
    IF_SETTEXT(TOSTRING_LOCALISED(500, 1), comp(1715, 105));  // trh80_corrupt:soulgem_price
    return;
}