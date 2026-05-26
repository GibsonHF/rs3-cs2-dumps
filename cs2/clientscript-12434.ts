//
function script12434(): void {
    IF_SETTEXT(`Current charges: ${TOSTRING_LOCALISED(varbitplayer_31033, 1)}`, 114950159);
    IF_SETCOLOUR(16777215, 114950150);
    IF_SETCOLOUR(16777215, 114950151);
    if ((varbitplayer_31032 >= 2)) {
        IF_SETHIDE(1, 114950162);
        IF_SETCOLOUR(16777215, 114950163);
        IF_SETCOLOUR(16777215, 114950164);
    };
    if ((varbitplayer_31032 >= 3)) {
        IF_SETHIDE(1, 114950165);
        IF_SETCOLOUR(16777215, 114950166);
        IF_SETCOLOUR(16777215, 114950167);
    };
    if ((varbitplayer_31032 >= 4)) {
        IF_SETHIDE(1, 114950168);
        IF_SETCOLOUR(16777215, 114950169);
        IF_SETCOLOUR(16777215, 114950170);
    };
    return;
}