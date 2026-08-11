//
function script3257(): void {
    if ((varclient_1202 == 1)) {
        IF_SETTEXT(varclient_2387, comp(933, 165));  // rand_dungeon_rewards_v2:player_5_name
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1227), 61145254);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1228), 61145255);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1229), 61145256);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1230), 61145257);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1231), 61145258);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1232), 61145259);
    } else {
        IF_SETTEXT("", comp(933, 165));  // rand_dungeon_rewards_v2:player_5_name
        IF_SETTEXT("", comp(933, 166));  // rand_dungeon_rewards_v2:player_5_title_1
        IF_SETTEXT("", comp(933, 167));  // rand_dungeon_rewards_v2:player_5_title_2
        IF_SETTEXT("", comp(933, 168));  // rand_dungeon_rewards_v2:player_5_title_3
        IF_SETTEXT("", comp(933, 169));  // rand_dungeon_rewards_v2:player_5_title_4
        IF_SETTEXT("", comp(933, 170));  // rand_dungeon_rewards_v2:player_5_title_5
        IF_SETTEXT("", comp(933, 171));  // rand_dungeon_rewards_v2:player_5_title_6
    };
    return;
}