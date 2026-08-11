//
function script20032(): void {
    IF_SETTEXT(script11601(varplayer_12241, 1), comp(1340, 62));  // trh210_overlay:currency_count
    var int0 = false;
    if ((varplayer_12241 >= 400)) {
        int0 = true;
    };
    if ((int0 == true)) {
        IF_SETOP(1, "Buy Bonus", comp(1340, 63));  // trh210_overlay:currency_buy_button
    } else {
        IF_SETOP(1, "", comp(1340, 63));  // trh210_overlay:currency_buy_button
    };
    IF_SETENABLED(int0, comp(1340, 63));  // trh210_overlay:currency_buy_button
    return;
}