//
function script10573(): void {
    if ((varbitplayer_24849 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 500)) {
        return;
    };
    varbitplayer_24852 = 8;
    IF_SETGRAPHIC(24011 as graphic, comp(1533, 5));  // trh29_pirate_coins_shop:popup_icon
    IF_SETTEXT("Pirate titles: Red-Hand, Blackbeard, Runebeard, the Rum Thief and Pirate King/Queen.", comp(1533, 33));  // trh29_pirate_coins_shop:popup_description
    IF_SETTEXT("Buy the second set of pirate titles?", comp(1533, 34));  // trh29_pirate_coins_shop:popup_question
    IF_SETHIDE(false, comp(1533, 29));  // trh29_pirate_coins_shop:popup_layer
    return;
}