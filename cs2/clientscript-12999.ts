//
function script12999(int0: number, int1: number): void {
    var int2 = IF_GETWIDTH(comp(1819, 1));  // quest_endgame_portal_health:health_bar_red
    var int3 = (30 + SCALE(195, 100, (100 - int1)));
    var int4 = (225 - SCALE(195, 100, (100 - int1)));
    var int5 = 1;
    if ((int2 < int0)) {
        if ((int2 < (int0 - 10))) {
            int5 = 5;
        };
        IF_SETSIZE((int2 + int5), 19, 0, 0, comp(1819, 1));  // quest_endgame_portal_health:health_bar_red
        IF_SETSIZE((int2 + int5), 19, 0, 0, comp(1819, 12));  // quest_endgame_portal_health:red_wave_effect
        IF_SETCOLOUR(script693(int3, int4, 0), comp(1819, 8));  // quest_endgame_portal_health:health_diamond_left
        IF_SETCOLOUR(script693(int3, int4, 0), comp(1819, 7));  // quest_endgame_portal_health:health_diamond_right
    } else if ((int2 > int0)) {
        if ((int2 > (int0 + 10))) {
            int5 = 5;
        };
        IF_SETSIZE((int2 - int5), 19, 0, 0, comp(1819, 1));  // quest_endgame_portal_health:health_bar_red
        IF_SETSIZE((int2 - int5), 19, 0, 0, comp(1819, 12));  // quest_endgame_portal_health:red_wave_effect
        IF_SETCOLOUR(script693(int3, int4, 0), comp(1819, 8));  // quest_endgame_portal_health:health_diamond_left
        IF_SETCOLOUR(script693(int3, int4, 0), comp(1819, 7));  // quest_endgame_portal_health:health_diamond_right
    } else {
        IF_SETONTIMER(callback(), comp(1819, 8));  // quest_endgame_portal_health:health_diamond_left
    };
    return;
}