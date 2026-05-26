//
function script1708(): void {
    var int0 = varbitplayer_17121;
    if ((varbitplayer_17115 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_17116 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_17117 > 0)) {
        int0 = (int0 + 1);
    };
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script4187();
    var string0 = "";
    if ((int1 == 0)) {
        string0 = `${inttostring(int2, 10)}m`;
    } else {
        string0 = `${inttostring(int1, 10)}h`;
    };
    if ((int0 > 0)) {
        IF_SETTEXT(`Voyages available: ${inttostring(int0, 10)}`, 62259211);
    } else {
        IF_SETTEXT(`New voyages in ${string0}`, 62259211);
    };
    script13993(62259213, -1, 28556, `Add 5 rerolls (${inttostring(varbitplayer_17421, 10)})`);
    if (((varbitplayer_17421 < 1) || (varbitplayer_17121 > 15))) {
        IF_SETHIDE(0, 62259214);
    } else {
        IF_SETHIDE(1, 62259214);
    };
    if ((varbitplayer_17423 < 1)) {
        IF_SETHIDE(0, 62259477);
    } else {
        IF_SETHIDE(1, 62259477);
    };
    script1711(varbitplayer_17129, 1);
    script1711(varbitplayer_17129, 2);
    script1711(varbitplayer_17129, 3);
    IF_SETOPKEY(2, 96, 0, 62259306);
    IF_SETOPKEY(1, 97, 0, 62259306);
    IF_SETOPKEY(2, 98, 0, 62259202);
    IF_SETOPKEY(1, 99, 0, 62259202);
    IF_SETOPKEY(1, 13, 0, 62259418);
    script2192();
    script1885();
    var int3 = varplayer_3415;
    if (((varbitplayer_17495 >= 38) && (varbitplayer_17495 < 50))) {
        int3 = 1;
    };
    script13972(62259419, 62259420, 28595, `Special Voyages (${inttostring(int3, 10)})`, script9670(1, varbitplayer_17129));
    script13972(62259421, 62259422, 28595, "Standard Voyages", script9670(0, varbitplayer_17129));
    if ((varbitplayer_17121 < 1)) {
        script13960(62259235, 28693, 1, 0);
        script13960(62259255, 28693, 1, 0);
        script13960(62259275, 28693, 1, 0);
    } else {
        script13960(62259235, 28693, 0, 0);
        script13960(62259255, 28693, 0, 0);
        script13960(62259275, 28693, 0, 0);
    };
    if ((varbitplayer_17495 < 63)) {
        IF_SETHIDE(1, 62259310);
        IF_SETHIDE(1, 62259210);
        IF_SETHIDE(1, 62259207);
        IF_SETHIDE(1, 62259233);
        IF_SETHIDE(1, 62259253);
        IF_SETHIDE(1, 62259273);
        if ((varbitplayer_17495 < 38)) {
            IF_SETHIDE(1, 62259308);
        };
    };
    return;
}