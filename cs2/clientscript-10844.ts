//
function script10844(): void {
    IF_SETTEXT(inttostring(varbitplayer_3661, 10), comp(1163, 33));
    if ((varbitplayer_3661 > 0)) {
        IF_SETTEXT(inttostring((varbitplayer_3661 / 3), 10), comp(1163, 37));
    } else {
        IF_SETTEXT(inttostring(varbitplayer_3655, 10), comp(1163, 37));
    };
    return;
}