//
function script1923(): void {
    var int0 = varclient_550;
    var int1 = varclient_554;
    var int2 = varclient_555;
    var int3 = 0;
    if ((int0 == 0)) {
        int1 = MAX(0, MIN((5 - int1), 5));
        int2 = MAX(0, MIN((5 - int2), 5));
        IF_SETTEXT(inttostring(int1, 10), comp(804, 14));  // sc_lobby_team_overlay:size
        IF_SETTEXT(inttostring(int2, 10), comp(804, 13));  // sc_lobby_team_overlay:enemy_size
        IF_SETHIDE(false, comp(804, 3));  // sc_lobby_team_overlay:player_count
        IF_SETHIDE(true, comp(804, 2));  // sc_lobby_team_overlay:start_time_text
    } else {
        IF_SETHIDE(true, comp(804, 3));  // sc_lobby_team_overlay:player_count
        if ((MODULO(int0, 100) != 0)) {
            int3 = 1;
        };
        int0 = (((int0 * 60) / 100) / 60);
        if ((int3 == 1)) {
            int0 = (int0 + 1);
        };
        IF_SETTEXT(`Game start : ${inttostring(int0, 10)} mins`, comp(804, 2));  // sc_lobby_team_overlay:start_time_text
        IF_SETHIDE(false, comp(804, 2));  // sc_lobby_team_overlay:start_time_text
    };
    return;
}