//
function script17161(int0: number): void {
    IF_SETHIDE(int0, comp(1082, 43));  // trh189_overlay:probability_layer
    script19920(int0, 70909995);
    if ((IF_GETHIDE(comp(1082, 35)) == false)) {  // trh189_overlay:prize_claim_overlay
        return;
    };
    if ((int0 == false)) {
        IF_SETHIDE(true, comp(1082, 46));  // trh189_overlay:promo_prize_button
        IF_SETHIDE(true, comp(1082, 44));  // trh189_overlay:skin_select_button
        IF_SETHIDE(true, comp(1082, 45));  // trh189_overlay:shop_button
    } else {
        IF_SETHIDE(false, comp(1082, 46));  // trh189_overlay:promo_prize_button
        if ((script20104() == 1)) {
            IF_SETHIDE(false, comp(1082, 44));  // trh189_overlay:skin_select_button
        } else {
            IF_SETHIDE(false, comp(1082, 45));  // trh189_overlay:shop_button
        };
    };
    return;
}