//
function script12697(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    while ((int0 < 5)) {
        if ((TESTBIT(varbitplayer_33674, int0) == 1)) {
            int1 = (int1 + 1);
        };
        int0 = (int0 + 1);
    };
    int0 = 0;
    while ((int0 < 5)) {
        IF_SETHIDE(script734((1 - TESTBIT(varbitplayer_33674, int0))), enum_getvalue(0, 9, 11561 as cs2enum, int0));
        if ((TESTBIT(varbitplayer_33674, int0) == 0)) {
            if ((int1 == 3)) {
                IF_SETHIDE(false, enum_getvalue(0, 9, 11562 as cs2enum, int0));
            } else {
                IF_SETHIDE(true, enum_getvalue(0, 9, 11562 as cs2enum, int0));
            };
        };
        int0 = (int0 + 1);
    };
    IF_SETTEXT(`+${inttostring((script12690() - 100), 10)}%`, comp(1785, 62));
    if ((varbitplayer_33675 == 1)) {
        IF_SETHIDE(false, comp(1785, 53));
        IF_SETHIDE(false, comp(1785, 129));
        IF_SETTEXT("Caught!", comp(1785, 131));
    } else {
        IF_SETHIDE(true, comp(1785, 53));
        IF_SETHIDE(true, comp(1785, 129));
        IF_SETTEXT("Catch!", comp(1785, 131));
    };
    if ((PLAYERMEMBER() == false)) {
        IF_SETHIDE(false, comp(1785, 129));
        IF_SETHIDE(false, comp(1785, 76));
        IF_SETHIDE(false, comp(1785, 87));
        IF_SETHIDE(false, comp(1785, 98));
        IF_SETHIDE(false, comp(1785, 109));
        IF_SETHIDE(false, comp(1785, 120));
    };
    return;
}