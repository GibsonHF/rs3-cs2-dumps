//
function script9278(): void {
    var int0 = 0;
    if (((2147483647 - varplayer_4024) > varplayer_4025)) {
        int0 = (varplayer_4024 + varplayer_4025);
    } else {
        int0 = 2147483647;
    };
    IF_SETTEXT(`Total points: <col=EBD090>${inttostring(int0, 10)}</col>`, comp(513, 2));
    if (((varbitplayer_21253 == 1) || (int0 < 500))) {
        IF_SETCOLOUR(12134690, comp(513, 26));
        if ((varbitplayer_21253 == 1)) {
            IF_SETTEXT("Already unlocked.", comp(513, 26));
        };
        IF_SETHIDE(true, comp(513, 27));
        IF_SETHIDE(false, comp(513, 28));
    };
    if ((((varbitplayer_21254 == 1) || (int0 < 1000)) || (MAP_MEMBERS() == 0))) {
        IF_SETCOLOUR(12134690, comp(513, 40));
        if ((varbitplayer_21254 == 1)) {
            IF_SETTEXT("Already unlocked.", comp(513, 40));
        } else if ((MAP_MEMBERS() == 0)) {
            IF_SETTEXT("Members' only.", comp(513, 40));
        };
        IF_SETHIDE(true, comp(513, 41));
        IF_SETHIDE(false, comp(513, 42));
    };
    if (((((varbitplayer_21255 == 1) || (int0 < 2000)) || (MAP_MEMBERS() == 0)) || (TESTBIT(varplayer_1778, MODULO(42, 32)) == 1))) {
        IF_SETCOLOUR(12134690, comp(513, 48));
        if ((varbitplayer_21255 == 1)) {
            IF_SETTEXT("Already unlocked.", comp(513, 48));
        } else if ((MAP_MEMBERS() == 0)) {
            IF_SETTEXT("Members' only.", comp(513, 48));
        };
        IF_SETHIDE(true, comp(513, 49));
        IF_SETHIDE(false, comp(513, 50));
    };
    return;
}