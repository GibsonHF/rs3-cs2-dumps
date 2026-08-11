//
function script4647(): void {
    IF_SETHIDE(true, comp(173, 2));  // fremsaga_map:vengeance
    IF_SETHIDE(true, comp(173, 3));  // fremsaga_map:thok_maps
    IF_SETHIDE(false, comp(173, 1));  // fremsaga_map:signature_map
    IF_SETHIDE(false, comp(173, 62));  // fremsaga_map:sig_startroom
    IF_SETHIDE(false, comp(173, 63));  // fremsaga_map:sig_startroomstairs
    if ((TESTBIT(varplayer_1554, 0) == 1)) {
        IF_SETHIDE(false, comp(173, 64));  // fremsaga_map:sig_rubble
    } else {
        IF_SETHIDE(false, comp(173, 64));  // fremsaga_map:sig_rubble
        IF_SETGRAPHIC(2808 as graphic, comp(173, 64));  // fremsaga_map:sig_rubble
    };
    if ((TESTBIT(varplayer_1554, 1) == 1)) {
        IF_SETHIDE(false, comp(173, 66));  // fremsaga_map:sig_slidey
    } else if ((TESTBIT(varplayer_1554, 0) == 1)) {
        IF_SETHIDE(false, comp(173, 66));  // fremsaga_map:sig_slidey
        IF_SETGRAPHIC(2808 as graphic, comp(173, 66));  // fremsaga_map:sig_slidey
    } else {
        IF_SETHIDE(true, comp(173, 66));  // fremsaga_map:sig_slidey
    };
    if ((TESTBIT(varplayer_1554, 2) == 1)) {
        IF_SETHIDE(false, comp(173, 67));  // fremsaga_map:sig_summoning
    } else if ((TESTBIT(varplayer_1554, 1) == 1)) {
        IF_SETHIDE(false, comp(173, 67));  // fremsaga_map:sig_summoning
        IF_SETGRAPHIC(2807 as graphic, comp(173, 67));  // fremsaga_map:sig_summoning
    } else {
        IF_SETHIDE(true, comp(173, 67));  // fremsaga_map:sig_summoning
    };
    if ((TESTBIT(varplayer_1554, 3) == 1)) {
        IF_SETHIDE(false, comp(173, 68));  // fremsaga_map:sig_warriors
    } else if ((TESTBIT(varplayer_1554, 2) == 1)) {
        IF_SETHIDE(false, comp(173, 68));  // fremsaga_map:sig_warriors
        IF_SETGRAPHIC(2807 as graphic, comp(173, 68));  // fremsaga_map:sig_warriors
    } else {
        IF_SETHIDE(true, comp(173, 68));  // fremsaga_map:sig_warriors
    };
    if ((TESTBIT(varplayer_1554, 4) == 1)) {
        IF_SETHIDE(false, comp(173, 69));  // fremsaga_map:sig_library
    } else if ((TESTBIT(varplayer_1554, 3) == 1)) {
        IF_SETHIDE(false, comp(173, 69));  // fremsaga_map:sig_library
        IF_SETGRAPHIC(2806 as graphic, comp(173, 69));  // fremsaga_map:sig_library
    } else {
        IF_SETHIDE(true, comp(173, 69));  // fremsaga_map:sig_library
    };
    if ((TESTBIT(varplayer_1554, 5) == 1)) {
        IF_SETHIDE(false, comp(173, 72));  // fremsaga_map:sig_charged
    } else {
        IF_SETGRAPHIC(2807 as graphic, comp(173, 72));  // fremsaga_map:sig_charged
    };
    if ((TESTBIT(varplayer_1554, 6) == 1)) {
        IF_SETHIDE(false, comp(173, 73));  // fremsaga_map:sig_precog
    } else if ((TESTBIT(varplayer_1554, 5) == 1)) {
        IF_SETHIDE(false, comp(173, 73));  // fremsaga_map:sig_precog
        IF_SETGRAPHIC(2808 as graphic, comp(173, 73));  // fremsaga_map:sig_precog
    } else {
        IF_SETHIDE(true, comp(173, 73));  // fremsaga_map:sig_precog
    };
    if ((TESTBIT(varplayer_1554, 7) == 1)) {
        IF_SETHIDE(false, comp(173, 65));  // fremsaga_map:sig_2rangers
    } else {
        IF_SETGRAPHIC(2806 as graphic, comp(173, 65));  // fremsaga_map:sig_2rangers
    };
    if ((TESTBIT(varplayer_1554, 8) == 1)) {
        IF_SETHIDE(false, comp(173, 74));  // fremsaga_map:sig_guard
    } else if ((TESTBIT(varplayer_1554, 7) == 1)) {
        IF_SETHIDE(false, comp(173, 74));  // fremsaga_map:sig_guard
        IF_SETGRAPHIC(2807 as graphic, comp(173, 74));  // fremsaga_map:sig_guard
    } else {
        IF_SETHIDE(true, comp(173, 74));  // fremsaga_map:sig_guard
    };
    if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 75));  // fremsaga_map:sig_statues
    } else if ((TESTBIT(varplayer_1554, 8) == 1)) {
        IF_SETHIDE(false, comp(173, 75));  // fremsaga_map:sig_statues
        IF_SETGRAPHIC(2807 as graphic, comp(173, 75));  // fremsaga_map:sig_statues
    } else {
        IF_SETHIDE(true, comp(173, 75));  // fremsaga_map:sig_statues
    };
    if ((TESTBIT(varplayer_1554, 10) == 1)) {
        IF_SETHIDE(false, comp(173, 77));  // fremsaga_map:sig_pick
    } else if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 77));  // fremsaga_map:sig_pick
        IF_SETGRAPHIC(2807 as graphic, comp(173, 77));  // fremsaga_map:sig_pick
    } else {
        IF_SETHIDE(true, comp(173, 77));  // fremsaga_map:sig_pick
    };
    if ((TESTBIT(varplayer_1554, 11) == 1)) {
        IF_SETHIDE(false, comp(173, 78));  // fremsaga_map:sig_runeflip
    } else if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 78));  // fremsaga_map:sig_runeflip
        IF_SETGRAPHIC(2808 as graphic, comp(173, 78));  // fremsaga_map:sig_runeflip
    } else {
        IF_SETHIDE(true, comp(173, 78));  // fremsaga_map:sig_runeflip
    };
    if ((TESTBIT(varplayer_1554, 12) == 1)) {
        IF_SETHIDE(false, comp(173, 79));  // fremsaga_map:sig_crescent
    } else if ((TESTBIT(varplayer_1554, 11) == 1)) {
        IF_SETHIDE(false, comp(173, 79));  // fremsaga_map:sig_crescent
        IF_SETGRAPHIC(2807 as graphic, comp(173, 79));  // fremsaga_map:sig_crescent
    } else {
        IF_SETHIDE(true, comp(173, 79));  // fremsaga_map:sig_crescent
    };
    if ((TESTBIT(varplayer_1554, 13) == 1)) {
        IF_SETHIDE(false, comp(173, 76));  // fremsaga_map:sig_sword
    } else if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 76));  // fremsaga_map:sig_sword
        IF_SETGRAPHIC(2806 as graphic, comp(173, 76));  // fremsaga_map:sig_sword
    } else {
        IF_SETHIDE(true, comp(173, 76));  // fremsaga_map:sig_sword
    };
    if ((TESTBIT(varplayer_1554, 14) == 1)) {
        IF_SETHIDE(false, comp(173, 70));  // fremsaga_map:sig_boss
        IF_SETHIDE(false, comp(173, 71));  // fremsaga_map:sig_bossmark
    } else if ((TESTBIT(varplayer_1554, 7) == 1)) {
        IF_SETHIDE(false, comp(173, 70));  // fremsaga_map:sig_boss
        IF_SETGRAPHIC(2806 as graphic, comp(173, 70));  // fremsaga_map:sig_boss
        IF_SETHIDE(true, comp(173, 71));  // fremsaga_map:sig_bossmark
    } else {
        IF_SETHIDE(true, comp(173, 70));  // fremsaga_map:sig_boss
        IF_SETHIDE(true, comp(173, 71));  // fremsaga_map:sig_bossmark
    };
    script4653();
    return;
}