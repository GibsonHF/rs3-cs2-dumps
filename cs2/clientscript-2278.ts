//
function script2278(): void {
    if ((varclient_1198 == 1)) {
        IF_SETTEXT(varclient_2383, comp(933, 117));  // rand_dungeon_rewards_v2:player_1_name
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1203), 61145206);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1204), 61145207);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1205), 61145208);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1206), 61145209);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1207), 61145210);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1208), 61145211);
    } else {
        IF_SETTEXT("", comp(933, 117));  // rand_dungeon_rewards_v2:player_1_name
        IF_SETTEXT("", comp(933, 118));  // rand_dungeon_rewards_v2:player_1_title_1
        IF_SETTEXT("", comp(933, 119));  // rand_dungeon_rewards_v2:player_1_title_2
        IF_SETTEXT("", comp(933, 120));  // rand_dungeon_rewards_v2:player_1_title_3
        IF_SETTEXT("", comp(933, 121));  // rand_dungeon_rewards_v2:player_1_title_4
        IF_SETTEXT("", comp(933, 122));  // rand_dungeon_rewards_v2:player_1_title_5
        IF_SETTEXT("", comp(933, 123));  // rand_dungeon_rewards_v2:player_1_title_6
    };
    return;
}