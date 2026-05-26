//
function script10661(int0: number, int1: number): void {
    if (((varbitplayer_3909 < 1) || (varbitplayer_3909 > 37))) {
        IF_SETHIDE(1, int0);
        IF_SETHIDE(1, int1);
        return;
    };
    if ((varbitplayer_3909 == 37)) {
        IF_SETTEXT("Har-Aken", int1);
    } else {
        IF_SETTEXT(`Wave ${inttostring(varbitplayer_3909, 10)}`, int1);
    };
    IF_SETHIDE(0, int0);
    IF_SETHIDE(0, int1);
    return;
}