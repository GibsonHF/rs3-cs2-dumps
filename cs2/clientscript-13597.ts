//
function script13597(): void {
    var int0 = 19716 as graphic;
    var int1 = script10495(0);
    if ((TESTBIT(varplayer_7156, 0) == 1)) {
        IF_SETGRAPHIC(int0, comp(1892, 28));  // achievements_player_inspect:mqc_cape_icon
        IF_SETCOLOUR(int1, comp(1892, 29));  // achievements_player_inspect:mqc_cape_text
    };
    if ((TESTBIT(varplayer_7156, 1) == 1)) {
        IF_SETGRAPHIC(int0, comp(1892, 30));  // achievements_player_inspect:max_cape_icon
        IF_SETCOLOUR(int1, comp(1892, 31));  // achievements_player_inspect:max_cape_text
    };
    if ((TESTBIT(varplayer_7156, 7) == 1)) {
        IF_SETGRAPHIC(int0, comp(1892, 32));  // achievements_player_inspect:master_max_cape_icon
        IF_SETCOLOUR(int1, comp(1892, 33));  // achievements_player_inspect:master_max_cape_text
    };
    if ((TESTBIT(varplayer_7156, 2) == 1)) {
        IF_SETGRAPHIC(int0, comp(1892, 34));  // achievements_player_inspect:comp_cape_icon
        IF_SETCOLOUR(int1, comp(1892, 35));  // achievements_player_inspect:comp_cape_text
    };
    if ((TESTBIT(varplayer_7156, 3) == 1)) {
        IF_SETGRAPHIC(int0, comp(1892, 36));  // achievements_player_inspect:comp_t_cape_icon
        IF_SETCOLOUR(int1, comp(1892, 37));  // achievements_player_inspect:comp_t_cape_text
    };
    if ((TESTBIT(varplayer_7156, 8) == 1)) {
        IF_SETGRAPHIC(int0, comp(1892, 38));  // achievements_player_inspect:master_comp_cape_icon
        IF_SETCOLOUR(int1, comp(1892, 115));  // achievements_player_inspect:master_comp_cape_text
    };
    if ((TESTBIT(varplayer_7156, 9) == 1)) {
        IF_SETGRAPHIC(int0, comp(1892, 116));  // achievements_player_inspect:master_comp_t_cape_icon
        IF_SETCOLOUR(int1, comp(1892, 117));  // achievements_player_inspect:master_comp_t_cape_text
    };
    return;
}