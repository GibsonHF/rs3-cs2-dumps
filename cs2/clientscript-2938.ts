//
function script2938(): void {
    if ((varclient_1199 == 1)) {
        IF_SETTEXT(varclient_2384, comp(933, 129));  // rand_dungeon_rewards_v2:player_2_name
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1209), 61145218);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1210), 61145219);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1211), 61145220);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1212), 61145221);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1213), 61145222);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1214), 61145223);
    } else {
        IF_SETTEXT("", comp(933, 129));  // rand_dungeon_rewards_v2:player_2_name
        IF_SETTEXT("", comp(933, 130));  // rand_dungeon_rewards_v2:player_2_title_1
        IF_SETTEXT("", comp(933, 131));  // rand_dungeon_rewards_v2:player_2_title_2
        IF_SETTEXT("", comp(933, 132));  // rand_dungeon_rewards_v2:player_2_title_3
        IF_SETTEXT("", comp(933, 133));  // rand_dungeon_rewards_v2:player_2_title_4
        IF_SETTEXT("", comp(933, 134));  // rand_dungeon_rewards_v2:player_2_title_5
        IF_SETTEXT("", comp(933, 135));  // rand_dungeon_rewards_v2:player_2_title_6
    };
    return;
}