//
function script16051(): void {
    if ((varbitplayer_50129 == 1)) {
        IF_SETGRAPHIC(15198 as graphic, comp(865, 8));  // egwd_wen_lobby_overlay:mechanic1
        IF_SETGRAPHIC(15172 as graphic, comp(865, 1));  // egwd_wen_lobby_overlay:mechanic1_check
    } else {
        IF_SETGRAPHIC(15202 as graphic, comp(865, 8));  // egwd_wen_lobby_overlay:mechanic1
        IF_SETGRAPHIC(15173 as graphic, comp(865, 1));  // egwd_wen_lobby_overlay:mechanic1_check
    };
    if ((varbitplayer_50132 == 1)) {
        IF_SETGRAPHIC(15195 as graphic, comp(865, 9));  // egwd_wen_lobby_overlay:mechanic2
        IF_SETGRAPHIC(15172 as graphic, comp(865, 2));  // egwd_wen_lobby_overlay:mechanic2_check
    } else {
        IF_SETGRAPHIC(15196 as graphic, comp(865, 9));  // egwd_wen_lobby_overlay:mechanic2
        IF_SETGRAPHIC(15173 as graphic, comp(865, 2));  // egwd_wen_lobby_overlay:mechanic2_check
    };
    if ((varbitplayer_50128 == 1)) {
        IF_SETGRAPHIC(15185 as graphic, comp(865, 10));  // egwd_wen_lobby_overlay:mechanic3
        IF_SETGRAPHIC(15172 as graphic, comp(865, 3));  // egwd_wen_lobby_overlay:mechanic3_check
    } else {
        IF_SETGRAPHIC(15186 as graphic, comp(865, 10));  // egwd_wen_lobby_overlay:mechanic3
        IF_SETGRAPHIC(15173 as graphic, comp(865, 3));  // egwd_wen_lobby_overlay:mechanic3_check
    };
    if ((varbitplayer_50130 == 1)) {
        IF_SETGRAPHIC(15188 as graphic, comp(865, 11));  // egwd_wen_lobby_overlay:mechanic4
        IF_SETGRAPHIC(15172 as graphic, comp(865, 4));  // egwd_wen_lobby_overlay:mechanic4_check
    } else {
        IF_SETGRAPHIC(15189 as graphic, comp(865, 11));  // egwd_wen_lobby_overlay:mechanic4
        IF_SETGRAPHIC(15173 as graphic, comp(865, 4));  // egwd_wen_lobby_overlay:mechanic4_check
    };
    if ((varbitplayer_50131 == 1)) {
        IF_SETGRAPHIC(15191 as graphic, comp(865, 12));  // egwd_wen_lobby_overlay:mechanic5
        IF_SETGRAPHIC(15172 as graphic, comp(865, 5));  // egwd_wen_lobby_overlay:mechanic5_check
    } else {
        IF_SETGRAPHIC(15192 as graphic, comp(865, 12));  // egwd_wen_lobby_overlay:mechanic5
        IF_SETGRAPHIC(15173 as graphic, comp(865, 5));  // egwd_wen_lobby_overlay:mechanic5_check
    };
    if ((varbitplayer_50136 == 1)) {
        IF_SETTEXT("Enable Hardmode:", comp(865, 29));  // egwd_wen_lobby_overlay:egwd_wen_interface_text_hm
        IF_SETCOLOUR(11837586, comp(865, 29));  // egwd_wen_lobby_overlay:egwd_wen_interface_text_hm
        if ((varbitplayer_50127 == 1)) {
            IF_SETGRAPHIC(15168 as graphic, comp(865, 22));  // egwd_wen_lobby_overlay:hm_checkbox
        } else {
            IF_SETGRAPHIC(15166 as graphic, comp(865, 22));  // egwd_wen_lobby_overlay:hm_checkbox
        };
    } else {
        IF_SETTEXT("Hardmode locked", comp(865, 29));  // egwd_wen_lobby_overlay:egwd_wen_interface_text_hm
        IF_SETCOLOUR(9342606, comp(865, 29));  // egwd_wen_lobby_overlay:egwd_wen_interface_text_hm
        IF_SETGRAPHIC(15170 as graphic, comp(865, 22));  // egwd_wen_lobby_overlay:hm_checkbox
    };
    if ((varbitplayer_50178 > 0)) {
        IF_SETTEXT(`${inttostring(varbitplayer_50178, 10)}% Enrage`, comp(865, 13));  // egwd_wen_lobby_overlay:egwd_wen_interface_text_highest_difficulty
    } else {
        IF_SETTEXT(`${inttostring(varbitplayer_50143, 10)} ${script4583(varbitplayer_50143, "Active Mechanic", "Active Mechanics")}`, comp(865, 13));  // egwd_wen_lobby_overlay:egwd_wen_interface_text_highest_difficulty
    };
    return;
}