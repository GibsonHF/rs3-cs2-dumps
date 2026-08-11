//
function script10576(): void {
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 100)) {
        return;
    };
    if ((INV_FREESPACE(93 as inv) == 0)) {
        return;
    };
    varbitplayer_24852 = 10;
    IF_SETGRAPHIC(23962 as graphic, comp(1533, 5));  // trh29_pirate_coins_shop:popup_icon
    IF_SETTEXT("Good old-fashioned pirate food. Eat for healing and a random stat boost. (+2 stat boost. Heals the same as a mackerel)", comp(1533, 33));  // trh29_pirate_coins_shop:popup_description
    IF_SETTEXT("Buy a ship's biscuit?", comp(1533, 34));  // trh29_pirate_coins_shop:popup_question
    IF_SETHIDE(false, comp(1533, 29));  // trh29_pirate_coins_shop:popup_layer
    return;
}