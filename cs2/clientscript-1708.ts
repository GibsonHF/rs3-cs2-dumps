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
        IF_SETTEXT(`Voyages available: ${inttostring(int0, 10)}`, comp(950, 11));  // pop_voyage_list:list_rerolls
    } else {
        IF_SETTEXT(`New voyages in ${string0}`, comp(950, 11));  // pop_voyage_list:list_rerolls
    };
    script13993(62259213, -1, 28556, `Add 5 rerolls (${inttostring(varbitplayer_17421, 10)})`);
    if (((varbitplayer_17421 < 1) || (varbitplayer_17121 > 15))) {
        IF_SETHIDE(false, comp(950, 14));  // pop_voyage_list:add_rerolls_no
    } else {
        IF_SETHIDE(true, comp(950, 14));  // pop_voyage_list:add_rerolls_no
    };
    if ((varbitplayer_17423 < 1)) {
        IF_SETHIDE(false, comp(950, 277));  // pop_voyage_list:reroll_special_voyages_disable_layer
    } else {
        IF_SETHIDE(true, comp(950, 277));  // pop_voyage_list:reroll_special_voyages_disable_layer
    };
    script1711(varbitplayer_17129, 1);
    script1711(varbitplayer_17129, 2);
    script1711(varbitplayer_17129, 3);
    IF_SETOPKEY(2, 96, 0, comp(950, 106));  // pop_voyage_list:ship_list_selector
    IF_SETOPKEY(1, 97, 0, comp(950, 106));  // pop_voyage_list:ship_list_selector
    IF_SETOPKEY(2, 98, 0, comp(950, 2));  // pop_voyage_list:voyage_list_selector
    IF_SETOPKEY(1, 99, 0, comp(950, 2));  // pop_voyage_list:voyage_list_selector
    IF_SETOPKEY(1, 13, 0, comp(950, 218));  // pop_voyage_list:mainmodal_window_close_button
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
        IF_SETHIDE(true, comp(950, 110));  // pop_voyage_list:effects_button
        IF_SETHIDE(true, comp(950, 10));  // pop_voyage_list:reroll_layer
        IF_SETHIDE(true, comp(950, 7));  // pop_voyage_list:more_layer
        IF_SETHIDE(true, comp(950, 33));  // pop_voyage_list:list_1_reroll
        IF_SETHIDE(true, comp(950, 53));  // pop_voyage_list:list_2_reroll
        IF_SETHIDE(true, comp(950, 73));  // pop_voyage_list:list_3_reroll
        if ((varbitplayer_17495 < 38)) {
            IF_SETHIDE(true, comp(950, 108));  // pop_voyage_list:crew_roster
        };
    };
    return;
}