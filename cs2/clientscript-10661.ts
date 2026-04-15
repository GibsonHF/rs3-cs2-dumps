//
function script10661(int0: component, int1: component): void {
    if (((varbitplayer_3909 < 1) || (varbitplayer_3909 > 37))) {
        IF_SETHIDE(true, int0);
        IF_SETHIDE(true, int1);
        return;
    };
    if ((varbitplayer_3909 == 37)) {
        IF_SETTEXT("Har-Aken", int1);
    } else {
        IF_SETTEXT(`Wave ${inttostring(varbitplayer_3909, 10)}`, int1);
    };
    IF_SETHIDE(false, int0);
    IF_SETHIDE(false, int1);
    return;
}