//
function script10567(): void {
    if ((varbitplayer_24919 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 3000)) {
        return;
    };
    varbitplayer_24852 = 1;
    IF_SETGRAPHIC(24007 as graphic, comp(1533, 5));  // trh29_pirate_coins_shop:popup_icon
    IF_SETTEXT("A pirate sheep companion pet, who keeps calm even when things get woolly out at sea.", comp(1533, 33));  // trh29_pirate_coins_shop:popup_description
    IF_SETTEXT("Buy pirate sheep?", comp(1533, 34));  // trh29_pirate_coins_shop:popup_question
    IF_SETHIDE(false, comp(1533, 29));  // trh29_pirate_coins_shop:popup_layer
    return;
}