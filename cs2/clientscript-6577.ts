//
function script6577(int0: number, int1: number): void {
    if (((varbitplayer_15151 < 1) || (varbitplayer_15151 > 63))) {
        IF_SETHIDE(1, int0);
        IF_SETHIDE(1, int1);
        return;
    };
    if ((varbitplayer_15151 == 63)) {
        IF_SETTEXT("TzTok-Jad", int1);
    } else {
        IF_SETTEXT(`Wave ${inttostring(varbitplayer_15151, 10)}`, int1);
    };
    IF_SETHIDE(0, int0);
    IF_SETHIDE(0, int1);
    return;
}