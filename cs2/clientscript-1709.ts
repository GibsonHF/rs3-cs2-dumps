//
function script1709(): void {
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
    script13993(62259213, -1, 28556, `Add 5 rerolls (${inttostring(varbitplayer_17421, 10)})`);
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
    if ((varbitplayer_17121 < 1)) {
        script13960(62259235, 28693, 1, 0);
        script13960(62259255, 28693, 1, 0);
        script13960(62259275, 28693, 1, 0);
    } else {
        script13960(62259235, 28693, 0, 0);
        script13960(62259255, 28693, 0, 0);
        script13960(62259275, 28693, 0, 0);
    };
    var int3 = varplayer_3415;
    if (((varbitplayer_17495 >= 38) && (varbitplayer_17495 < 50))) {
        int3 = 1;
    };
    script13972(62259419, 62259420, 28595, `Special Voyages (${inttostring(int3, 10)})`, script9670(1, varbitplayer_17129));
    script13972(62259421, 62259422, 28595, "Standard Voyages", script9670(0, varbitplayer_17129));
    script13993(62259476, -1, 28556, `Reroll Voyages (${inttostring(varbitplayer_17423, 10)})`);
    return;
}