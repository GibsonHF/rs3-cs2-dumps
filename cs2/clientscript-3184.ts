//
function script3184(): void {
    if ((varclient_1200 == 1)) {
        IF_SETTEXT(varclient_2385, comp(933, 141));  // rand_dungeon_rewards_v2:player_3_name
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1215), 61145230);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1216), 61145231);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1217), 61145232);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1218), 61145233);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1219), 61145234);
        IF_SETTEXT(enum_getvalue(0, 36, 2857, varclient_1220), 61145235);
    } else {
        IF_SETTEXT("", comp(933, 141));  // rand_dungeon_rewards_v2:player_3_name
        IF_SETTEXT("", comp(933, 142));  // rand_dungeon_rewards_v2:player_3_title_1
        IF_SETTEXT("", comp(933, 143));  // rand_dungeon_rewards_v2:player_3_title_2
        IF_SETTEXT("", comp(933, 144));  // rand_dungeon_rewards_v2:player_3_title_3
        IF_SETTEXT("", comp(933, 145));  // rand_dungeon_rewards_v2:player_3_title_4
        IF_SETTEXT("", comp(933, 146));  // rand_dungeon_rewards_v2:player_3_title_5
        IF_SETTEXT("", comp(933, 147));  // rand_dungeon_rewards_v2:player_3_title_6
    };
    return;
}