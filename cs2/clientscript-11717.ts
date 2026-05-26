//
function script11717(): void {
    if ((varbitplayer_28715 == 1)) {
        IF_SETHIDE(false, comp(1649, 2));
    };
    if ((varbitplayer_28716 == 1)) {
        IF_SETHIDE(false, comp(1649, 1));
    };
    if (((varbitplayer_28714 < 6) && (varbitplayer_28714 > 0))) {
        IF_SETHIDE(false, comp(1649, 3));
    };
    if ((varbitplayer_28713 > 0)) {
        IF_SETHIDE(false, comp(1649, 5));
        IF_SETTEXT(inttostring(varbitplayer_28713, 10), comp(1649, 5));
        IF_SETHIDE(false, comp(1649, 4));
    };
    return;
}