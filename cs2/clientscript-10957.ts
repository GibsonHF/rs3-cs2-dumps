//
function script10957(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(INV_TOTAL(93 as inv, 33968 as obj), 1), comp(1583, 25));
    IF_SETTEXT(TOSTRING_LOCALISED(200, 1), comp(1583, 35));
    IF_SETTEXT(TOSTRING_LOCALISED(200, 1), comp(1583, 36));
    IF_SETTEXT(TOSTRING_LOCALISED(400, 1), comp(1583, 33));
    IF_SETTEXT(TOSTRING_LOCALISED(400, 1), comp(1583, 34));
    IF_SETTEXT(TOSTRING_LOCALISED(600, 1), comp(1583, 31));
    IF_SETTEXT(TOSTRING_LOCALISED(600, 1), comp(1583, 32));
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(1583, 30));
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(1583, 29));
    IF_SETTEXT(`${TOSTRING_LOCALISED(1250, 1)} & ${TOSTRING_LOCALISED(1250, 1)}`, comp(1583, 28));
    if ((varbitplayer_26867 == 1250)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(1250, 1)} (cap)`, comp(1583, 26));
        IF_SETHIDE(false, comp(1583, 76));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_26867, 1), comp(1583, 26));
    };
    if ((varbitplayer_26868 == 1250)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(1250, 1)} (cap)`, comp(1583, 27));
        IF_SETHIDE(false, comp(1583, 84));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_26868, 1), comp(1583, 27));
    };
    return;
}