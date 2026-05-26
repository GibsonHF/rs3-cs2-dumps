//[clientscript,xbows_pouch_num]
function script396(): void {
    IF_SETTEXT(inttostring(varbitplayer_1693, 10), 28377099);
    IF_SETTEXT(inttostring(varbitplayer_1694, 10), 28377100);
    IF_SETTEXT(inttostring(varbitplayer_1695, 10), 28377101);
    IF_SETTEXT(inttostring(varbitplayer_1696, 10), 28377102);
    if ((varbitplayer_1693 == 0)) {
        IF_SETCOLOUR(16711731, 28377099);
    } else {
        IF_SETCOLOUR(49152, 28377099);
    };
    if ((varbitplayer_1694 == 0)) {
        IF_SETCOLOUR(16711731, 28377100);
    } else {
        IF_SETCOLOUR(49152, 28377100);
    };
    if ((varbitplayer_1695 == 0)) {
        IF_SETCOLOUR(16711731, 28377101);
    } else {
        IF_SETCOLOUR(49152, 28377101);
    };
    if ((varbitplayer_1696 == 0)) {
        IF_SETCOLOUR(16711731, 28377102);
    } else {
        IF_SETCOLOUR(49152, 28377102);
    };
    return;
}