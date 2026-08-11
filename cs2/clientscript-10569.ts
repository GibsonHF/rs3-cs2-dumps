//
function script10569(): void {
    if ((varbitplayer_24845 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 2000)) {
        return;
    };
    if ((INV_FREESPACE(93 as inv) == 0)) {
        return;
    };
    varbitplayer_24852 = 3;
    IF_SETGRAPHIC(23963 as graphic, comp(1533, 5));  // trh29_pirate_coins_shop:popup_icon
    IF_SETTEXT("A cape fashioned from a Jolly Roger flag. (No combat stats)", comp(1533, 33));  // trh29_pirate_coins_shop:popup_description
    IF_SETTEXT("Buy Jolly Roger cape?", comp(1533, 34));  // trh29_pirate_coins_shop:popup_question
    IF_SETHIDE(false, comp(1533, 29));  // trh29_pirate_coins_shop:popup_layer
    return;
}