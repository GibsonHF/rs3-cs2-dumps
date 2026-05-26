//
function script10972(): void {
    if ((varbitplayer_26868 == 1250)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(1250, 1)} (cap)`, comp(1583, 27));
        IF_SETHIDE(false, comp(1583, 84));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_26868, 1), comp(1583, 27));
    };
    return;
}