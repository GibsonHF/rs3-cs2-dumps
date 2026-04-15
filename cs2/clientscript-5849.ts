//
function script5849(int0: int): void {
    var int1 = comp(1043, 21);
    if ((int0 != -1)) {
        IF_SETPOSITION(0, 20, 2, 2, int1);
        IF_SETHIDE(false, int1);
        IF_SETTEXT(`- ${TOSTRING_LOCALISED(int0, 1)}`, int1);
        IF_SETTRANS(0, int1);
        IF_SETONTIMER(callback(script5853, int1, 20), int1);
    };
    IF_SETTEXT(`Renown points: ${inttostring(varbitplayer_22200, 10)}`, comp(1043, 20));
    return;
}