//
function script10971(): void {
    if ((varbitplayer_26867 == 1250)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(1250, 1)} (cap)`, comp(1583, 26));
        IF_SETHIDE(false, comp(1583, 76));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_26867, 1), comp(1583, 26));
    };
    return;
}