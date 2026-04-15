//
function script841(int0: int): void {
    var int1 = 0;
    varbitplayer_12213 = int0;
    if ((varbitplayer_12212 != 10)) {
        IF_SETHIDE(true, enum_getvalue(0, 9, 1355 as cs2enum, varbitplayer_12212));
        IF_SETHIDE(true, enum_getvalue(0, 9, 1358 as cs2enum, varbitplayer_12212));
    };
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(681, 5));
        IF_SETHIDE(true, comp(681, 8));
    } else {
        IF_SETHIDE(false, comp(681, 8));
        IF_SETHIDE(true, comp(681, 5));
    };
    while ((int1 < 10)) {
        if ((script855(int1) == int0)) {
            if (((script851(int1) != 7) || (script852(int1) != 2))) {
                IF_SETHIDE(false, enum_getvalue(0, 9, 1354 as cs2enum, int1));
            };
        } else {
            IF_SETHIDE(true, enum_getvalue(0, 9, 1354 as cs2enum, int1));
        };
        int1 = (int1 + 1);
    };
    return;
}