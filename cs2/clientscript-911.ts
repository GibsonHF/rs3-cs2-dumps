//
function script911(): void {
    if (((varbitplayer_14341 == 1) && (varclient_118 < 253))) {
        varclient_118 = (varclient_118 + 3);
        IF_SETTRANS((255 - varclient_118), comp(721, 3));
    } else if (((varbitplayer_14341 == 0) && (varclient_118 > 3))) {
        varclient_118 = (varclient_118 - 3);
        IF_SETTRANS((255 - varclient_118), comp(721, 3));
    };
    return;
}