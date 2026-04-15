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
        IF_SETTEXT(`Voyages available: ${inttostring(int0, 10)}`, comp(950, 11));
    } else {
        IF_SETTEXT(`New voyages in ${string0}`, comp(950, 11));
    };
    script13993(comp(950, 13), comp(-1, 65535), 28556 as struct, `Add 5 rerolls (${inttostring(varbitplayer_17421, 10)})`);
    if (((varbitplayer_17421 < 1) || (varbitplayer_17121 > 15))) {
        IF_SETHIDE(false, comp(950, 14));
    } else {
        IF_SETHIDE(true, comp(950, 14));
    };
    if ((varbitplayer_17423 < 1)) {
        IF_SETHIDE(false, comp(950, 277));
    } else {
        IF_SETHIDE(true, comp(950, 277));
    };
    script1711(varbitplayer_17129, 1);
    script1711(varbitplayer_17129, 2);
    script1711(varbitplayer_17129, 3);
    IF_SETOPKEY(2, 96, 0, comp(950, 106));
    IF_SETOPKEY(1, 97, 0, comp(950, 106));
    IF_SETOPKEY(2, 98, 0, comp(950, 2));
    IF_SETOPKEY(1, 99, 0, comp(950, 2));
    IF_SETOPKEY(1, 13, 0, comp(950, 218));
    script2192();
    script1885();
    var int3 = varplayer_3415;
    if (((varbitplayer_17495 >= 38) && (varbitplayer_17495 < 50))) {
        int3 = 1;
    };
    script13972(comp(950, 219), comp(950, 220), 28595 as struct, `Special Voyages (${inttostring(int3, 10)})`, script9670(1, varbitplayer_17129));
    script13972(comp(950, 221), comp(950, 222), 28595 as struct, "Standard Voyages", script9670(0, varbitplayer_17129));
    if ((varbitplayer_17121 < 1)) {
        script13960(comp(950, 35), 28693 as struct, true, 0);
        script13960(comp(950, 55), 28693 as struct, true, 0);
        script13960(comp(950, 75), 28693 as struct, true, 0);
    } else {
        script13960(comp(950, 35), 28693 as struct, false, 0);
        script13960(comp(950, 55), 28693 as struct, false, 0);
        script13960(comp(950, 75), 28693 as struct, false, 0);
    };
    if ((varbitplayer_17495 < 63)) {
        IF_SETHIDE(true, comp(950, 110));
        IF_SETHIDE(true, comp(950, 10));
        IF_SETHIDE(true, comp(950, 7));
        IF_SETHIDE(true, comp(950, 33));
        IF_SETHIDE(true, comp(950, 53));
        IF_SETHIDE(true, comp(950, 73));
        if ((varbitplayer_17495 < 38)) {
            IF_SETHIDE(true, comp(950, 108));
        };
    };
    return;
}