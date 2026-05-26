//[clientscript,xbows_pouch_num]
function script396(): void {
    IF_SETTEXT(inttostring(varbitplayer_1693, 10), comp(433, 11));
    IF_SETTEXT(inttostring(varbitplayer_1694, 10), comp(433, 12));
    IF_SETTEXT(inttostring(varbitplayer_1695, 10), comp(433, 13));
    IF_SETTEXT(inttostring(varbitplayer_1696, 10), comp(433, 14));
    if ((varbitplayer_1693 == 0)) {
        IF_SETCOLOUR(16711731, comp(433, 11));
    } else {
        IF_SETCOLOUR(49152, comp(433, 11));
    };
    if ((varbitplayer_1694 == 0)) {
        IF_SETCOLOUR(16711731, comp(433, 12));
    } else {
        IF_SETCOLOUR(49152, comp(433, 12));
    };
    if ((varbitplayer_1695 == 0)) {
        IF_SETCOLOUR(16711731, comp(433, 13));
    } else {
        IF_SETCOLOUR(49152, comp(433, 13));
    };
    if ((varbitplayer_1696 == 0)) {
        IF_SETCOLOUR(16711731, comp(433, 14));
    } else {
        IF_SETCOLOUR(49152, comp(433, 14));
    };
    return;
}