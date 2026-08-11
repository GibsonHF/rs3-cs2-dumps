//
function script5270(int0: number, int1: number, int2: number): void {
    IF_SETTEXT(inttostring(int0, 10), comp(1137, 54));  // cmtool_if:player_number
    IF_SETTEXT(inttostring((int1 + int2), 10), comp(1137, 45));  // cmtool_if:npc_number
    IF_SETTEXT(inttostring(int1, 10), comp(1137, 70));  // cmtool_if:team1_number
    IF_SETTEXT(inttostring(int2, 10), comp(1137, 76));  // cmtool_if:team2_number
    return;
}