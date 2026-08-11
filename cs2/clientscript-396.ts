//[clientscript,xbows_pouch_num]
function script396(): void {
    IF_SETTEXT(inttostring(varbitplayer_1693, 10), comp(433, 11));  // xbows_pouch:num1
    IF_SETTEXT(inttostring(varbitplayer_1694, 10), comp(433, 12));  // xbows_pouch:num2
    IF_SETTEXT(inttostring(varbitplayer_1695, 10), comp(433, 13));  // xbows_pouch:num3
    IF_SETTEXT(inttostring(varbitplayer_1696, 10), comp(433, 14));  // xbows_pouch:num4
    if ((varbitplayer_1693 == 0)) {
        IF_SETCOLOUR(16711731, comp(433, 11));  // xbows_pouch:num1
    } else {
        IF_SETCOLOUR(49152, comp(433, 11));  // xbows_pouch:num1
    };
    if ((varbitplayer_1694 == 0)) {
        IF_SETCOLOUR(16711731, comp(433, 12));  // xbows_pouch:num2
    } else {
        IF_SETCOLOUR(49152, comp(433, 12));  // xbows_pouch:num2
    };
    if ((varbitplayer_1695 == 0)) {
        IF_SETCOLOUR(16711731, comp(433, 13));  // xbows_pouch:num3
    } else {
        IF_SETCOLOUR(49152, comp(433, 13));  // xbows_pouch:num3
    };
    if ((varbitplayer_1696 == 0)) {
        IF_SETCOLOUR(16711731, comp(433, 14));  // xbows_pouch:num4
    } else {
        IF_SETCOLOUR(49152, comp(433, 14));  // xbows_pouch:num4
    };
    return;
}