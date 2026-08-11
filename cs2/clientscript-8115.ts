//
function script8115(int0: number, int1: number): void {
    if ((int0 == 0)) {
        if ((int1 == 0)) {
            IF_SETPOSITION(0, 3, 0, 0, comp(1430, 6));  // toplevel_v2_combat_bar:combat_bar_player_info
            if ((varbitplayer_27169 == 1)) {
                IF_SETSIZE((504 + 14), 30, 0, 0, comp(1430, 6));  // toplevel_v2_combat_bar:combat_bar_player_info
            } else {
                IF_SETSIZE(504, 30, 0, 0, comp(1430, 6));  // toplevel_v2_combat_bar:combat_bar_player_info
            };
        } else {
            IF_SETPOSITION(3, 16, 2, 0, comp(1430, 6));  // toplevel_v2_combat_bar:combat_bar_player_info
            IF_SETSIZE(30, (504 - 16), 0, 0, comp(1430, 6));  // toplevel_v2_combat_bar:combat_bar_player_info
        };
    } else if ((int1 == 0)) {
        IF_SETPOSITION(0, 0, 0, 0, comp(1430, 6));  // toplevel_v2_combat_bar:combat_bar_player_info
        IF_SETSIZE(245, 50, 0, 0, comp(1430, 6));  // toplevel_v2_combat_bar:combat_bar_player_info
    } else {
        IF_SETPOSITION(3, 16, 2, 0, comp(1430, 6));  // toplevel_v2_combat_bar:combat_bar_player_info
        IF_SETSIZE(50, (245 - 16), 0, 0, comp(1430, 6));  // toplevel_v2_combat_bar:combat_bar_player_info
    };
    var int2 = 0;
    define_array(4);
    define_array[65536](4);
    var int3 = 0;
    var int4 = 0;
    IF_SETHIDE(false, comp(1430, 55));  // toplevel_v2_combat_bar:player_adrenaline
    IF_SETHIDE(true, comp(1430, 60));  // toplevel_v2_combat_bar:player_adrenaline_legacy
    IF_SETHIDE(false, comp(1430, 7));  // toplevel_v2_combat_bar:player_health
    IF_SETHIDE(false, comp(1430, 14));  // toplevel_v2_combat_bar:player_prayer
    IF_SETHIDE(false, comp(1430, 20));  // toplevel_v2_combat_bar:player_summoning
    if ((int1 == 0)) {
        if ((int0 == 0)) {
            int2 = (IF_GETWIDTH(comp(1430, 6)) / 4);  // toplevel_v2_combat_bar:combat_bar_player_info
            pop_array(0, 0);
            pop_array(1, int2);
            pop_array(2, (int2 * 2));
            pop_array(3, (int2 * 3));
            pop_array[1](0, 0);
            pop_array[1](1, 0);
            pop_array[1](2, 0);
            pop_array[1](3, 0);
            int3 = int2;
            int4 = 30;
        } else {
            int2 = (IF_GETWIDTH(comp(1430, 6)) / 2);  // toplevel_v2_combat_bar:combat_bar_player_info
            pop_array(0, 0);
            pop_array(1, int2);
            pop_array(2, 0);
            pop_array(3, int2);
            pop_array[1](0, 0);
            pop_array[1](1, 0);
            pop_array[1](2, 24);
            pop_array[1](3, 24);
            int3 = int2;
            int4 = 30;
        };
    } else if ((int0 == 0)) {
        int2 = (IF_GETHEIGHT(comp(1430, 6)) / 4);  // toplevel_v2_combat_bar:combat_bar_player_info
        pop_array(0, 0);
        pop_array(1, 0);
        pop_array(2, 0);
        pop_array(3, 0);
        pop_array[1](0, 0);
        pop_array[1](1, int2);
        pop_array[1](2, (int2 * 2));
        pop_array[1](3, (int2 * 3));
        int3 = 30;
        int4 = int2;
    } else {
        int2 = (IF_GETHEIGHT(comp(1430, 6)) / 2);  // toplevel_v2_combat_bar:combat_bar_player_info
        pop_array(0, 0);
        pop_array(1, 0);
        pop_array(2, 24);
        pop_array(3, 24);
        pop_array[1](0, 0);
        pop_array[1](1, int2);
        pop_array[1](2, 0);
        pop_array[1](3, int2);
        int3 = 30;
        int4 = int2;
    };
    IF_SETPOSITION(push_array(0), push_array[1](0), 0, 0, comp(1430, 7));  // toplevel_v2_combat_bar:player_health
    IF_SETPOSITION(push_array(1), push_array[1](1), 0, 0, comp(1430, 55));  // toplevel_v2_combat_bar:player_adrenaline
    IF_SETPOSITION(push_array(2), push_array[1](2), 0, 0, comp(1430, 14));  // toplevel_v2_combat_bar:player_prayer
    IF_SETPOSITION(push_array(3), push_array[1](3), 0, 0, comp(1430, 20));  // toplevel_v2_combat_bar:player_summoning
    IF_SETSIZE(int3, int4, 0, 0, comp(1430, 7));  // toplevel_v2_combat_bar:player_health
    IF_SETSIZE(int3, int4, 0, 0, comp(1430, 55));  // toplevel_v2_combat_bar:player_adrenaline
    IF_SETSIZE(int3, int4, 0, 0, comp(1430, 14));  // toplevel_v2_combat_bar:player_prayer
    IF_SETSIZE(int3, int4, 0, 0, comp(1430, 20));  // toplevel_v2_combat_bar:player_summoning
    if ((int1 == 0)) {
        if ((int0 == 0)) {
            int4 = 24;
        } else {
            int4 = 22;
        };
        int3 = MAX(0, ((IF_GETWIDTH(comp(1430, 7)) - 30) - 2));  // toplevel_v2_combat_bar:player_health
        pop_array(0, 30);
        pop_array[1](0, MAX(0, ((IF_GETHEIGHT(comp(1430, 7)) - int4) / 2)));  // toplevel_v2_combat_bar:player_health
    } else {
        if ((int0 == 0)) {
            int3 = 24;
        } else {
            int3 = 22;
        };
        int4 = MAX(0, ((IF_GETHEIGHT(comp(1430, 7)) - 30) - 2));  // toplevel_v2_combat_bar:player_health
        pop_array[1](0, 30);
        pop_array(0, MAX(0, ((IF_GETWIDTH(comp(1430, 7)) - int3) / 2)));  // toplevel_v2_combat_bar:player_health
    };
    IF_SETPOSITION(push_array(0), push_array[1](0), 0, 0, comp(1430, 9));  // toplevel_v2_combat_bar:player_health_bar
    IF_SETPOSITION(push_array(0), push_array[1](0), 0, 0, comp(1430, 16));  // toplevel_v2_combat_bar:player_prayer_bar
    IF_SETPOSITION(push_array(0), push_array[1](0), 0, 0, comp(1430, 57));  // toplevel_v2_combat_bar:player_adrenaline_bar
    IF_SETPOSITION(push_array(0), push_array[1](0), 0, 0, comp(1430, 22));  // toplevel_v2_combat_bar:player_summoning_bar
    IF_SETSIZE(int3, int4, 0, 0, comp(1430, 9));  // toplevel_v2_combat_bar:player_health_bar
    IF_SETSIZE(int3, int4, 0, 0, comp(1430, 16));  // toplevel_v2_combat_bar:player_prayer_bar
    IF_SETSIZE(int3, int4, 0, 0, comp(1430, 57));  // toplevel_v2_combat_bar:player_adrenaline_bar
    IF_SETSIZE(int3, int4, 0, 0, comp(1430, 22));  // toplevel_v2_combat_bar:player_summoning_bar
    return;
}