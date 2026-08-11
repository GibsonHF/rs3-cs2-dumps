//
function script13593(): void {
    script13310(123994122, 123994157, 10, 10000);
    script13595();
    script13310(123994176, 123994177, 11, 10000);
    script13310(123994184, 123994185, 12, 10000);
    script13310(123994222, 123994223, 13, 10000);
    script13310(123994192, 123994193, 14, 10000);
    script13310(123994212, 123994213, 15, 10000);
    script13310(123994202, 123994203, 16, 10000);
    var int0 = 19717 as graphic;
    var int1 = script10495(5);
    IF_SETGRAPHIC(int0, comp(1892, 28));  // achievements_player_inspect:mqc_cape_icon
    IF_SETCOLOUR(int1, comp(1892, 29));  // achievements_player_inspect:mqc_cape_text
    IF_SETGRAPHIC(int0, comp(1892, 30));  // achievements_player_inspect:max_cape_icon
    IF_SETCOLOUR(int1, comp(1892, 31));  // achievements_player_inspect:max_cape_text
    IF_SETGRAPHIC(int0, comp(1892, 32));  // achievements_player_inspect:master_max_cape_icon
    IF_SETCOLOUR(int1, comp(1892, 33));  // achievements_player_inspect:master_max_cape_text
    IF_SETGRAPHIC(int0, comp(1892, 34));  // achievements_player_inspect:comp_cape_icon
    IF_SETCOLOUR(int1, comp(1892, 35));  // achievements_player_inspect:comp_cape_text
    IF_SETGRAPHIC(int0, comp(1892, 36));  // achievements_player_inspect:comp_t_cape_icon
    IF_SETCOLOUR(int1, comp(1892, 37));  // achievements_player_inspect:comp_t_cape_text
    IF_SETGRAPHIC(int0, comp(1892, 38));  // achievements_player_inspect:master_comp_cape_icon
    IF_SETCOLOUR(int1, comp(1892, 115));  // achievements_player_inspect:master_comp_cape_text
    IF_SETGRAPHIC(int0, comp(1892, 116));  // achievements_player_inspect:master_comp_t_cape_icon
    IF_SETCOLOUR(int1, comp(1892, 117));  // achievements_player_inspect:master_comp_t_cape_text
    IF_SETONVARTRANSMIT(callback(script13597, 7156, 1), comp(1892, 25));  // achievements_player_inspect:cape_wrapper
    IF_SETONVARTRANSMIT(callback(script13596, 123994115, 0, 9628, 1), comp(1892, 3));  // achievements_player_inspect:recent_1
    IF_SETONVARTRANSMIT(callback(script13596, 123994116, 1, 9629, 1), comp(1892, 4));  // achievements_player_inspect:recent_2
    IF_SETONVARTRANSMIT(callback(script13596, 123994117, 2, 9630, 1), comp(1892, 5));  // achievements_player_inspect:recent_3
    IF_SETONVARTRANSMIT(callback(script13596, 123994118, 3, 9631, 1), comp(1892, 6));  // achievements_player_inspect:recent_4
    return;
}