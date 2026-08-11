//
function script1941(): void {
    var int0 = (((varplayer_1596 + varplayer_1598) + varplayer_1601) + (2 * (varplayer_1597 - varplayer_1599)));
    IF_SETTEXT(`Score: ${inttostring(int0, 10)}`, comp(809, 5));  // sc_in_game_overlay:score
    if ((varclient_556 == 0)) {
        return;
    };
    var int1 = (varclient_556 - CLIENTCLOCK());
    var int2 = (int1 / 3000);
    var int3 = MODULO((int1 / 50), 60);
    if (((int2 < 0) || (int3 < 0))) {
        IF_SETTEXT("Game ending", comp(809, 3));  // sc_in_game_overlay:time_remaining
        IF_SETTEXTSHADOW(1, comp(809, 3));  // sc_in_game_overlay:time_remaining
        script1942();
    } else if ((int2 == 0)) {
        if ((int3 == 0)) {
            IF_SETTEXT("Game ending", comp(809, 3));  // sc_in_game_overlay:time_remaining
        } else if ((int3 < 10)) {
            IF_SETTEXT(`${inttostring(int2, 10)}:0${inttostring(int3, 10)}`, comp(809, 3));  // sc_in_game_overlay:time_remaining
        } else {
            IF_SETTEXT(`${inttostring(int2, 10)}:${inttostring(int3, 10)}`, comp(809, 3));  // sc_in_game_overlay:time_remaining
        };
    } else if ((int3 < 10)) {
        IF_SETTEXT(`${inttostring(int2, 10)}:0${inttostring(int3, 10)}`, comp(809, 3));  // sc_in_game_overlay:time_remaining
    } else {
        IF_SETTEXT(`${inttostring(int2, 10)}:${inttostring(int3, 10)}`, comp(809, 3));  // sc_in_game_overlay:time_remaining
    };
    if ((int2 < 1)) {
        IF_SETCOLOUR(16711680, comp(809, 3));  // sc_in_game_overlay:time_remaining
        IF_SETTEXTSHADOW(1, comp(809, 3));  // sc_in_game_overlay:time_remaining
        script1942();
    } else if ((IF_GETHIDE(comp(809, 7)) == false)) {  // sc_in_game_overlay:panic_text
        IF_SETHIDE(true, comp(809, 7));  // sc_in_game_overlay:panic_text
    };
    return;
}