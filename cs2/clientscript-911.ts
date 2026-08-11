//
function script911(): void {
    if ((varbitplayer_14341 == 1)) {
        if ((varclient_118 < 253)) {
            varclient_118 = (varclient_118 + 3);
            IF_SETTRANS((255 - varclient_118), comp(721, 3));  // easter08_chocatrice_hatching:blackout_rect
        } else if (((varbitplayer_14341 == 0) && (varclient_118 > 3))) {
            varclient_118 = (varclient_118 - 3);
            IF_SETTRANS((255 - varclient_118), comp(721, 3));  // easter08_chocatrice_hatching:blackout_rect
        };
    } else if (((varbitplayer_14341 == 0) && (varclient_118 > 3))) {
        varclient_118 = (varclient_118 - 3);
        IF_SETTRANS((255 - varclient_118), comp(721, 3));  // easter08_chocatrice_hatching:blackout_rect
    };
    return;
}