//
function script5829(): void {
    IF_SETTEXT(inttostring(varbitplayer_22223, 10), comp(677, 20));  // 6awe3_score_board:myscore_kills_player
    IF_SETTEXT(inttostring(varbitplayer_22227, 10), comp(677, 7));  // 6awe3_score_board:myscore_gathering_points
    IF_SETTEXT(inttostring(varbitplayer_22225, 10), comp(677, 3));  // 6awe3_score_board:myscore_kills_monkey_weak
    IF_SETTEXT(inttostring((varbitplayer_22224 - varbitplayer_22226), 10), comp(677, 19));  // 6awe3_score_board:myscore_deaths_player
    IF_SETTEXT(inttostring(varbitplayer_22228, 10), comp(677, 12));  // 6awe3_score_board:myscore_wave_points
    IF_SETTEXT(script9383(varbitplayer_22223, varbitplayer_22229), comp(677, 21));  // 6awe3_score_board:myscore_ratio_player
    IF_SETTEXT(inttostring(varbitplayer_22226, 10), comp(677, 13));  // 6awe3_score_board:myscore_game_points
    return;
}