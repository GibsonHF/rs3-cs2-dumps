//
function script9278(): void {
    var int0 = 0;
    if (((2147483647 - varplayer_4024) > varplayer_4025)) {
        int0 = (varplayer_4024 + varplayer_4025);
    } else {
        int0 = 2147483647;
    };
    IF_SETTEXT(`Total points: <col=EBD090>${inttostring(int0, 10)}</col>`, 33619970);
    if (((varbitplayer_21253 == 1) || (int0 < 500))) {
        IF_SETCOLOUR(12134690, 33619994);
        if ((varbitplayer_21253 == 1)) {
            IF_SETTEXT("Already unlocked.", 33619994);
        };
        IF_SETHIDE(1, 33619995);
        IF_SETHIDE(0, 33619996);
    };
    if ((((varbitplayer_21254 == 1) || (int0 < 1000)) || (MAP_MEMBERS() == 0))) {
        IF_SETCOLOUR(12134690, 33620008);
        if ((varbitplayer_21254 == 1)) {
            IF_SETTEXT("Already unlocked.", 33620008);
        } else if ((MAP_MEMBERS() == 0)) {
            IF_SETTEXT("Members' only.", 33620008);
        };
        IF_SETHIDE(1, 33620009);
        IF_SETHIDE(0, 33620010);
    };
    if (((((varbitplayer_21255 == 1) || (int0 < 2000)) || (MAP_MEMBERS() == 0)) || (TESTBIT(varplayer_1778, MODULO(42, 32)) == 1))) {
        IF_SETCOLOUR(12134690, 33620016);
        if ((varbitplayer_21255 == 1)) {
            IF_SETTEXT("Already unlocked.", 33620016);
        } else if ((MAP_MEMBERS() == 0)) {
            IF_SETTEXT("Members' only.", 33620016);
        };
        IF_SETHIDE(1, 33620017);
        IF_SETHIDE(0, 33620018);
    };
    return;
}