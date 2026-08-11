//
function script9382(): void {
    IF_SETTEXT(inttostring(varplayer_3946, 10), comp(702, 73));  // 6awe2_pvp_board:myscore_kills_phase
    IF_SETTEXT(inttostring(varplayer_3944, 10), comp(702, 74));  // 6awe2_pvp_board:myscore_kills_event
    IF_SETTEXT(inttostring(varplayer_3947, 10), comp(702, 75));  // 6awe2_pvp_board:myscore_deaths_phase
    IF_SETTEXT(inttostring(varplayer_3945, 10), comp(702, 76));  // 6awe2_pvp_board:myscore_deaths_event
    IF_SETTEXT(script9383(varplayer_3946, varplayer_3947), comp(702, 77));  // 6awe2_pvp_board:myscore_ratio_phase
    IF_SETTEXT(script9383(varplayer_3944, varplayer_3945), comp(702, 78));  // 6awe2_pvp_board:myscore_ratio_event
    return;
}