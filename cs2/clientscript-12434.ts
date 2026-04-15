//
function script12434(): void {
    IF_SETTEXT(`Current charges: ${TOSTRING_LOCALISED(varbitplayer_31033, 1)}`, comp(1754, 15));
    IF_SETCOLOUR(16777215, comp(1754, 6));
    IF_SETCOLOUR(16777215, comp(1754, 7));
    if ((varbitplayer_31032 >= 2)) {
        IF_SETHIDE(true, comp(1754, 18));
        IF_SETCOLOUR(16777215, comp(1754, 19));
        IF_SETCOLOUR(16777215, comp(1754, 20));
    };
    if ((varbitplayer_31032 >= 3)) {
        IF_SETHIDE(true, comp(1754, 21));
        IF_SETCOLOUR(16777215, comp(1754, 22));
        IF_SETCOLOUR(16777215, comp(1754, 23));
    };
    if ((varbitplayer_31032 >= 4)) {
        IF_SETHIDE(true, comp(1754, 24));
        IF_SETCOLOUR(16777215, comp(1754, 25));
        IF_SETCOLOUR(16777215, comp(1754, 26));
    };
    return;
}