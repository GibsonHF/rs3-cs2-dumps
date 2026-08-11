//
function script5514(): void {
    IF_SETTEXT(inttostring(varbitplayer_22905, 10), comp(754, 302));  // bslay_shop:points_boss
    IF_SETTEXT(inttostring(varbitplayer_9071, 10), comp(754, 304));  // bslay_shop:points_slayer
    if ((varbitplayer_22905 == 0)) {
        IF_SETCOLOUR(13249829, comp(754, 302));  // bslay_shop:points_boss
    };
    if ((varbitplayer_9071 == 0)) {
        IF_SETCOLOUR(13249829, comp(754, 304));  // bslay_shop:points_slayer
    };
    return;
}