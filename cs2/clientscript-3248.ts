//
function script3248(): void {
    if ((varclient_1201 == 1)) {
        IF_SETTEXT(varclient_2386, comp(933, 153));  // rand_dungeon_rewards_v2:player_4_name
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1221), 61145242);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1222), 61145243);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1223), 61145244);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1224), 61145245);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1225), 61145246);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1226), 61145247);
    } else {
        IF_SETTEXT("", comp(933, 153));  // rand_dungeon_rewards_v2:player_4_name
        IF_SETTEXT("", comp(933, 154));  // rand_dungeon_rewards_v2:player_4_title_1
        IF_SETTEXT("", comp(933, 155));  // rand_dungeon_rewards_v2:player_4_title_2
        IF_SETTEXT("", comp(933, 156));  // rand_dungeon_rewards_v2:player_4_title_3
        IF_SETTEXT("", comp(933, 157));  // rand_dungeon_rewards_v2:player_4_title_4
        IF_SETTEXT("", comp(933, 158));  // rand_dungeon_rewards_v2:player_4_title_5
        IF_SETTEXT("", comp(933, 159));  // rand_dungeon_rewards_v2:player_4_title_6
    };
    return;
}