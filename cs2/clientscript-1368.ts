//
function script1368(): void {
    IF_SETTEXT(inttostring(varbitplayer_4196, 10), comp(59, 9));  // castlewars_status_overlay_zamorak:zamorak_score
    IF_SETTEXT(inttostring(varbitplayer_4186, 10), comp(59, 4));  // castlewars_status_overlay_zamorak:saradomin_score
    if ((varplayer_1417 == 1)) {
        IF_SETTEXT(`${inttostring(varplayer_1417, 10)} Min`, comp(59, 12));  // castlewars_status_overlay_zamorak:time_remaining
    } else {
        IF_SETTEXT(`${inttostring(varplayer_1417, 10)} Mins`, comp(59, 12));  // castlewars_status_overlay_zamorak:time_remaining
    };
    IF_SETTEXT("", comp(59, 6));  // castlewars_status_overlay_zamorak:taken_by_zam_player
    if ((varbitplayer_4184 == 0)) {
        IF_SETTEXT("Safe", comp(59, 5));  // castlewars_status_overlay_zamorak:saradomin_flag
        IF_SETCOLOUR(65280, comp(59, 5));  // castlewars_status_overlay_zamorak:saradomin_flag
        IF_SETTEXT("", comp(59, 6));  // castlewars_status_overlay_zamorak:taken_by_zam_player
    } else if ((varbitplayer_4184 == 1)) {
        IF_SETTEXT("Taken", comp(59, 5));  // castlewars_status_overlay_zamorak:saradomin_flag
        IF_SETCOLOUR(16711680, comp(59, 5));  // castlewars_status_overlay_zamorak:saradomin_flag
    } else if ((varbitplayer_4184 == 2)) {
        IF_SETTEXT("Dropped", comp(59, 5));  // castlewars_status_overlay_zamorak:saradomin_flag
        IF_SETCOLOUR(16776960, comp(59, 5));  // castlewars_status_overlay_zamorak:saradomin_flag
        IF_SETTEXT("", comp(59, 6));  // castlewars_status_overlay_zamorak:taken_by_zam_player
    };
    IF_SETTEXT("", comp(59, 11));  // castlewars_status_overlay_zamorak:taken_by_sara_player
    if ((varbitplayer_4194 == 0)) {
        IF_SETTEXT("Safe", comp(59, 10));  // castlewars_status_overlay_zamorak:zamorak_flag
        IF_SETCOLOUR(65280, comp(59, 10));  // castlewars_status_overlay_zamorak:zamorak_flag
    } else if ((varbitplayer_4194 == 1)) {
        IF_SETTEXT("Taken", comp(59, 10));  // castlewars_status_overlay_zamorak:zamorak_flag
        IF_SETCOLOUR(16711680, comp(59, 10));  // castlewars_status_overlay_zamorak:zamorak_flag
        IF_SETTEXT(`by ${varclient_2731}`, comp(59, 11));  // castlewars_status_overlay_zamorak:taken_by_sara_player
    } else if ((varbitplayer_4194 == 2)) {
        IF_SETTEXT("Dropped", comp(59, 10));  // castlewars_status_overlay_zamorak:zamorak_flag
        IF_SETCOLOUR(16776960, comp(59, 10));  // castlewars_status_overlay_zamorak:zamorak_flag
    };
    if ((varbitplayer_4187 == 0)) {
        IF_SETTEXT(`Health: ${inttostring(varbitplayer_4187, 10)}%`, comp(59, 18));  // castlewars_status_overlay_zamorak:health
        IF_SETCOLOUR(16711680, comp(59, 18));  // castlewars_status_overlay_zamorak:health
        IF_SETGRAPHIC(16874 as graphic, comp(59, 23));  // castlewars_status_overlay_zamorak:main_door_pic
    } else {
        IF_SETTEXT(`Health ${inttostring(varbitplayer_4187, 10)}%`, comp(59, 18));  // castlewars_status_overlay_zamorak:health
        IF_SETCOLOUR(65280, comp(59, 18));  // castlewars_status_overlay_zamorak:health
        IF_SETGRAPHIC(16875 as graphic, comp(59, 23));  // castlewars_status_overlay_zamorak:main_door_pic
    };
    if ((varbitplayer_4188 == 1)) {
        IF_SETTEXT("Unlocked", comp(59, 19));  // castlewars_status_overlay_zamorak:door
        IF_SETCOLOUR(16711680, comp(59, 19));  // castlewars_status_overlay_zamorak:door
        IF_SETGRAPHIC(16873 as graphic, comp(59, 24));  // castlewars_status_overlay_zamorak:side_door_pic
    } else {
        IF_SETTEXT("Locked", comp(59, 19));  // castlewars_status_overlay_zamorak:door
        IF_SETCOLOUR(65280, comp(59, 19));  // castlewars_status_overlay_zamorak:door
        IF_SETGRAPHIC(16872 as graphic, comp(59, 24));  // castlewars_status_overlay_zamorak:side_door_pic
    };
    if ((varbitplayer_4189 == 1)) {
        IF_SETTEXT("Cleared", comp(59, 20));  // castlewars_status_overlay_zamorak:tunnel1
        IF_SETCOLOUR(16711680, comp(59, 20));  // castlewars_status_overlay_zamorak:tunnel1
    } else {
        IF_SETTEXT("Collapsed", comp(59, 20));  // castlewars_status_overlay_zamorak:tunnel1
        IF_SETCOLOUR(65280, comp(59, 20));  // castlewars_status_overlay_zamorak:tunnel1
    };
    if ((varbitplayer_4190 == 1)) {
        IF_SETTEXT("Cleared", comp(59, 21));  // castlewars_status_overlay_zamorak:tunnel2
        IF_SETCOLOUR(16711680, comp(59, 21));  // castlewars_status_overlay_zamorak:tunnel2
    } else {
        IF_SETTEXT("Collapsed", comp(59, 21));  // castlewars_status_overlay_zamorak:tunnel2
        IF_SETCOLOUR(65280, comp(59, 21));  // castlewars_status_overlay_zamorak:tunnel2
    };
    IF_SETGRAPHIC(16870 as graphic, comp(59, 25));  // castlewars_status_overlay_zamorak:tunnel1_pic
    IF_SETGRAPHIC(16870 as graphic, comp(59, 26));  // castlewars_status_overlay_zamorak:tunnel2_pic
    if ((varbitplayer_4191 == 1)) {
        IF_SETTEXT("Destroyed", comp(59, 22));  // castlewars_status_overlay_zamorak:catapult
        IF_SETCOLOUR(16711680, comp(59, 22));  // castlewars_status_overlay_zamorak:catapult
    } else {
        IF_SETTEXT("Operational", comp(59, 22));  // castlewars_status_overlay_zamorak:catapult
        IF_SETCOLOUR(65280, comp(59, 22));  // castlewars_status_overlay_zamorak:catapult
    };
    IF_SETGRAPHIC(16871 as graphic, comp(59, 27));  // castlewars_status_overlay_zamorak:catapult_pic
    return;
}