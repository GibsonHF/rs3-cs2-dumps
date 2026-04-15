//
function script6577(int0: component, int1: component): void {
    if (((varbitplayer_15151 < 1) || (varbitplayer_15151 > 63))) {
        IF_SETHIDE(true, int0);
        IF_SETHIDE(true, int1);
        return;
    };
    if ((varbitplayer_15151 == 63)) {
        IF_SETTEXT("TzTok-Jad", int1);
    } else {
        IF_SETTEXT(`Wave ${inttostring(varbitplayer_15151, 10)}`, int1);
    };
    IF_SETHIDE(false, int0);
    IF_SETHIDE(false, int1);
    return;
}