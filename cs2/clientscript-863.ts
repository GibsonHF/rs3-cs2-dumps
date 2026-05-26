//
function script863(): void {
    if (((varbitplayer_5885 == 1) && (varbitplayer_5894 == 0))) {
        IF_SETMODEL(enum_getvalue(0, 31, 5079 as cs2enum, varbitplayer_5892), 64618499);
        IF_SETHIDE(1, 64618512);
        if ((varbitplayer_5893 != 0)) {
            IF_SETHIDE(0, 64618501);
        };
        if ((varbitplayer_5893 == 1)) {
            IF_SETPOSITION(30, 205, 0, 0, 64618501);
        } else if ((varbitplayer_5893 == 2)) {
            IF_SETPOSITION(112, 205, 0, 0, 64618501);
        } else if ((varbitplayer_5893 == 3)) {
            IF_SETPOSITION(196, 205, 0, 0, 64618501);
        } else {
            IF_SETHIDE(1, 64618501);
        };
    } else {
        IF_SETMODEL(-1 as model, 64618499);
    };
    return;
}