//
function script5514(): void {
    IF_SETTEXT(inttostring(varbitplayer_22905, 10), comp(754, 302));  // bslay_shop:points_choice_back_on_layer
    IF_SETTEXT(inttostring(varbitplayer_9071, 10), comp(754, 304));  // bslay_shop:points_choice_back_hit_layer
    if ((varbitplayer_22905 == 0)) {
        IF_SETCOLOUR(13249829, comp(754, 302));  // bslay_shop:points_choice_back_on_layer
    };
    if ((varbitplayer_9071 == 0)) {
        IF_SETCOLOUR(13249829, comp(754, 304));  // bslay_shop:points_choice_back_hit_layer
    };
    return;
}