//
function script10572(): void {
    if ((varbitplayer_24848 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 500)) {
        return;
    };
    varbitplayer_24852 = 7;
    IF_SETGRAPHIC(24010 as graphic, comp(1533, 5));  // trh29_pirate_coins_shop:popup_icon
    IF_SETTEXT("Pirate titles: Peg Leg, Cutthroat, Swashbuckler, One-Eyed and Dread Pirate.", comp(1533, 33));  // trh29_pirate_coins_shop:popup_description
    IF_SETTEXT("Buy the first set of pirate titles?", comp(1533, 34));  // trh29_pirate_coins_shop:popup_question
    IF_SETHIDE(false, comp(1533, 29));  // trh29_pirate_coins_shop:popup_layer
    return;
}