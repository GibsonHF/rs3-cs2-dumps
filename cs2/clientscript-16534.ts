//
function script16534(): void {
    if ((varbitplayer_51238 == 1)) {
        IF_SETMODELANIM(34767 as seq, comp(970, 15));  // trh180_overlay:bonus_prize_model
        IF_SETONTIMER(callback(script16535, 75), comp(970, 15));  // trh180_overlay:bonus_prize_model
    } else {
        IF_SETHIDE(true, comp(970, 32));  // trh180_overlay:claim_layer
    };
    return;
}