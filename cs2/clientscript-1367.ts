//
function script1367(): void {
    IF_SETTEXT(inttostring(varbitplayer_4196, 10), comp(58, 15));  // castlewars_status_overlay_saradomin:zamorak_score
    IF_SETTEXT(inttostring(varbitplayer_4186, 10), comp(58, 11));  // castlewars_status_overlay_saradomin:saradomin_score
    if ((varplayer_1417 == 1)) {
        IF_SETTEXT(`${inttostring(varplayer_1417, 10)} Min`, comp(58, 20));  // castlewars_status_overlay_saradomin:time_remaining
    } else {
        IF_SETTEXT(`${inttostring(varplayer_1417, 10)} Mins`, comp(58, 20));  // castlewars_status_overlay_saradomin:time_remaining
    };
    IF_SETTEXT("", comp(58, 13));  // castlewars_status_overlay_saradomin:taken_by_zam_player
    if ((varbitplayer_4184 == 0)) {
        IF_SETTEXT("Safe", comp(58, 12));  // castlewars_status_overlay_saradomin:saradomin_flag
        IF_SETCOLOUR(65280, comp(58, 12));  // castlewars_status_overlay_saradomin:saradomin_flag
        IF_SETTEXT("", comp(58, 13));  // castlewars_status_overlay_saradomin:taken_by_zam_player
    } else if ((varbitplayer_4184 == 1)) {
        IF_SETTEXT("Taken", comp(58, 12));  // castlewars_status_overlay_saradomin:saradomin_flag
        IF_SETCOLOUR(16711680, comp(58, 12));  // castlewars_status_overlay_saradomin:saradomin_flag
        IF_SETTEXT(`by ${varclient_2731}`, comp(58, 13));  // castlewars_status_overlay_saradomin:taken_by_zam_player
    } else if ((varbitplayer_4184 == 2)) {
        IF_SETTEXT("Dropped", comp(58, 12));  // castlewars_status_overlay_saradomin:saradomin_flag
        IF_SETCOLOUR(16776960, comp(58, 12));  // castlewars_status_overlay_saradomin:saradomin_flag
        IF_SETTEXT("", comp(58, 13));  // castlewars_status_overlay_saradomin:taken_by_zam_player
    };
    IF_SETTEXT("", comp(58, 17));  // castlewars_status_overlay_saradomin:taken_by_sara_player
    if ((varbitplayer_4194 == 0)) {
        IF_SETTEXT("Safe", comp(58, 16));  // castlewars_status_overlay_saradomin:zamorak_flag
        IF_SETCOLOUR(65280, comp(58, 16));  // castlewars_status_overlay_saradomin:zamorak_flag
    } else if ((varbitplayer_4194 == 1)) {
        IF_SETTEXT("Taken", comp(58, 16));  // castlewars_status_overlay_saradomin:zamorak_flag
        IF_SETCOLOUR(16711680, comp(58, 16));  // castlewars_status_overlay_saradomin:zamorak_flag
    } else if ((varbitplayer_4194 == 2)) {
        IF_SETTEXT("Dropped", comp(58, 16));  // castlewars_status_overlay_saradomin:zamorak_flag
        IF_SETCOLOUR(16776960, comp(58, 16));  // castlewars_status_overlay_saradomin:zamorak_flag
    };
    if ((varbitplayer_4177 == 0)) {
        IF_SETTEXT(`Health: ${inttostring(varbitplayer_4177, 10)}%`, comp(58, 0));  // castlewars_status_overlay_saradomin:health
        IF_SETCOLOUR(16711680, comp(58, 0));  // castlewars_status_overlay_saradomin:health
        IF_SETGRAPHIC(16874 as graphic, comp(58, 5));  // castlewars_status_overlay_saradomin:main_door_pic
    } else {
        IF_SETTEXT(`Health ${inttostring(varbitplayer_4177, 10)}%`, comp(58, 0));  // castlewars_status_overlay_saradomin:health
        IF_SETCOLOUR(65280, comp(58, 0));  // castlewars_status_overlay_saradomin:health
        IF_SETGRAPHIC(16875 as graphic, comp(58, 5));  // castlewars_status_overlay_saradomin:main_door_pic
    };
    if ((varbitplayer_4178 == 1)) {
        IF_SETTEXT("Unlocked", comp(58, 1));  // castlewars_status_overlay_saradomin:door
        IF_SETCOLOUR(16711680, comp(58, 1));  // castlewars_status_overlay_saradomin:door
        IF_SETGRAPHIC(16873 as graphic, comp(58, 6));  // castlewars_status_overlay_saradomin:side_door_pic
    } else {
        IF_SETTEXT("Locked", comp(58, 1));  // castlewars_status_overlay_saradomin:door
        IF_SETCOLOUR(65280, comp(58, 1));  // castlewars_status_overlay_saradomin:door
        IF_SETGRAPHIC(16872 as graphic, comp(58, 6));  // castlewars_status_overlay_saradomin:side_door_pic
    };
    if ((varbitplayer_4179 == 1)) {
        IF_SETTEXT("Cleared", comp(58, 2));  // castlewars_status_overlay_saradomin:tunnel1
        IF_SETCOLOUR(16711680, comp(58, 2));  // castlewars_status_overlay_saradomin:tunnel1
    } else {
        IF_SETTEXT("Collapsed", comp(58, 2));  // castlewars_status_overlay_saradomin:tunnel1
        IF_SETCOLOUR(65280, comp(58, 2));  // castlewars_status_overlay_saradomin:tunnel1
    };
    if ((varbitplayer_4180 == 1)) {
        IF_SETTEXT("Cleared", comp(58, 3));  // castlewars_status_overlay_saradomin:tunnel2
        IF_SETCOLOUR(16711680, comp(58, 3));  // castlewars_status_overlay_saradomin:tunnel2
    } else {
        IF_SETTEXT("Collapsed", comp(58, 3));  // castlewars_status_overlay_saradomin:tunnel2
        IF_SETCOLOUR(65280, comp(58, 3));  // castlewars_status_overlay_saradomin:tunnel2
    };
    IF_SETGRAPHIC(16870 as graphic, comp(58, 7));  // castlewars_status_overlay_saradomin:tunnel1_pic
    IF_SETGRAPHIC(16870 as graphic, comp(58, 8));  // castlewars_status_overlay_saradomin:tunnel2_pic
    if ((varbitplayer_4181 == 1)) {
        IF_SETTEXT("Destroyed", comp(58, 4));  // castlewars_status_overlay_saradomin:catapult
        IF_SETCOLOUR(16711680, comp(58, 4));  // castlewars_status_overlay_saradomin:catapult
    } else {
        IF_SETTEXT("Operational", comp(58, 4));  // castlewars_status_overlay_saradomin:catapult
        IF_SETCOLOUR(65280, comp(58, 4));  // castlewars_status_overlay_saradomin:catapult
    };
    IF_SETGRAPHIC(16871 as graphic, comp(58, 9));  // castlewars_status_overlay_saradomin:catapult_pic
    return;
}