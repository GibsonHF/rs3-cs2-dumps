//
function script863(): void {
    if (((varbitplayer_5885 == 1) && (varbitplayer_5894 == 0))) {
        IF_SETMODEL(enum_getvalue(0, 31, 5079 as cs2enum, varbitplayer_5892), comp(986, 3));
        IF_SETHIDE(true, comp(986, 16));
        if ((varbitplayer_5893 != 0)) {
            IF_SETHIDE(false, comp(986, 5));
        };
        if ((varbitplayer_5893 == 1)) {
            IF_SETPOSITION(30, 205, 0, 0, comp(986, 5));
        } else if ((varbitplayer_5893 == 2)) {
            IF_SETPOSITION(112, 205, 0, 0, comp(986, 5));
        } else if ((varbitplayer_5893 == 3)) {
            IF_SETPOSITION(196, 205, 0, 0, comp(986, 5));
        } else {
            IF_SETHIDE(true, comp(986, 5));
        };
    } else {
        IF_SETMODEL(-1 as model, comp(986, 3));
    };
    return;
}