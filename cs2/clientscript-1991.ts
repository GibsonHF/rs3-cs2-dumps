//
function script1991(): void {
    if ((varbitplayer_21646 == 1)) {
        IF_SETHIDE(false, comp(1037, 14));
        IF_SETHIDE(true, comp(1037, 23));
    } else if ((varbitplayer_21646 == 2)) {
        IF_SETHIDE(false, comp(1037, 23));
        IF_SETHIDE(true, comp(1037, 14));
    };
    IF_SETTEXT(inttostring(varbitplayer_21647, 10), comp(1037, 13));
    IF_SETTEXT(inttostring(varbitplayer_21648, 10), comp(1037, 22));
    return;
}