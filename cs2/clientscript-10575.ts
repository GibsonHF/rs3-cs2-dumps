//
function script10575(): void {
    if ((varbitplayer_24848 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 1500)) {
        return;
    };
    if ((INV_FREESPACE(93 as inv) == 0)) {
        return;
    };
    varbitplayer_24852 = 5;
    IF_SETGRAPHIC(24009 as graphic, comp(1533, 5));  // trh29_pirate_coins_shop:popup_icon
    IF_SETTEXT("Slay your enemies with this stuffed hunter of the seas. (Two-handed sword with level 1 and level 40 versions)", comp(1533, 33));  // trh29_pirate_coins_shop:popup_description
    IF_SETTEXT("Buy the two-handed swordfish?", comp(1533, 34));  // trh29_pirate_coins_shop:popup_question
    IF_SETHIDE(false, comp(1533, 29));  // trh29_pirate_coins_shop:popup_layer
    return;
}