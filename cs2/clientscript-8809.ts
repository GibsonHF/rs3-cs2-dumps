//
function script8809(): void {
    if ((PLAYERMEMBER() == false)) {
        IF_SETOBJECT(29933 as obj, 1, comp(246, 31));  // oct13_reward_shop:oct13_item_gfx_1
        IF_SETTEXT("Small<br>Rebuildathon<br>lamp", comp(246, 29));  // oct13_reward_shop:oct13_reward_name_1
        IF_SETOBJECT(29934 as obj, 1, comp(246, 62));  // oct13_reward_shop:oct13_item_gfx_2
        IF_SETTEXT("Medium<br>Rebuildathon<br>lamp", comp(246, 60));  // oct13_reward_shop:oct13_reward_name_2
    } else {
        IF_SETOBJECT(29934 as obj, 1, comp(246, 31));  // oct13_reward_shop:oct13_item_gfx_1
        IF_SETTEXT("Medium<br>Rebuildathon<br>lamp", comp(246, 29));  // oct13_reward_shop:oct13_reward_name_1
        IF_SETOBJECT(29935 as obj, 1, comp(246, 62));  // oct13_reward_shop:oct13_item_gfx_2
        IF_SETTEXT("Large<br>Rebuildathon<br>lamp", comp(246, 60));  // oct13_reward_shop:oct13_reward_name_2
    };
    IF_SETOBJECT(29929 as obj, 1, comp(246, 75));  // oct13_reward_shop:oct13_item_gfx_3
    if ((varbitplayer_20702 == 1)) {
        switch (varbitplayer_20714) {
            case 1: {
                IF_SETHIDE(false, comp(246, 23));  // oct13_reward_shop:item_box_3
                IF_SETHIDE(true, comp(246, 17));  // oct13_reward_shop:oct13_locked_1
                break;
            }
            case 2: {
                IF_SETHIDE(false, comp(246, 23));  // oct13_reward_shop:item_box_3
                IF_SETHIDE(true, comp(246, 17));  // oct13_reward_shop:oct13_locked_1
                IF_SETHIDE(false, comp(246, 22));  // oct13_reward_shop:item_box_4
                IF_SETHIDE(true, comp(246, 15));  // oct13_reward_shop:oct13_locked_2
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(246, 23));  // oct13_reward_shop:item_box_3
                IF_SETHIDE(true, comp(246, 17));  // oct13_reward_shop:oct13_locked_1
                IF_SETHIDE(false, comp(246, 22));  // oct13_reward_shop:item_box_4
                IF_SETHIDE(true, comp(246, 15));  // oct13_reward_shop:oct13_locked_2
                IF_SETHIDE(false, comp(246, 21));  // oct13_reward_shop:item_box_5
                IF_SETHIDE(true, comp(246, 13));  // oct13_reward_shop:oct13_locked_3
                break;
            }
        };
    };
    if ((varbitplayer_20713 < 150)) {
        IF_SETHIDE(true, comp(246, 38));  // oct13_reward_shop:oct13_buy_1
        IF_SETHIDE(false, comp(246, 39));  // oct13_reward_shop:oct13_button_disable_1
    };
    if ((varbitplayer_20713 < 300)) {
        IF_SETHIDE(true, comp(246, 67));  // oct13_reward_shop:oct13_buy_2
        IF_SETHIDE(false, comp(246, 68));  // oct13_reward_shop:oct13_button_disable_2
    };
    if (((varbitplayer_20703 == 1) && (varbitplayer_20724 != 1))) {
        IF_SETHIDE(true, comp(246, 80));  // oct13_reward_shop:oct13_buy_3
        IF_SETHIDE(false, comp(246, 81));  // oct13_reward_shop:oct13_button_disable_3
        IF_SETTEXT("Claimed", comp(246, 83));  // oct13_reward_shop:oct13_buy_button_text_3
    };
    if ((varbitplayer_20704 == 1)) {
        IF_SETHIDE(true, comp(246, 93));  // oct13_reward_shop:oct13_buy_4
        IF_SETHIDE(false, comp(246, 94));  // oct13_reward_shop:oct13_button_disable_4
        IF_SETTEXT("Claimed", comp(246, 96));  // oct13_reward_shop:oct13_buy_button_text_4
    };
    if ((varbitplayer_20705 == 1)) {
        IF_SETHIDE(true, comp(246, 106));  // oct13_reward_shop:oct13_buy_5
        IF_SETHIDE(false, comp(246, 107));  // oct13_reward_shop:oct13_button_disable_5
        IF_SETTEXT("Claimed", comp(246, 109));  // oct13_reward_shop:oct13_buy_button_text_5
    };
    IF_SETTEXT(`Your contribution points: ${inttostring(varbitplayer_20713, 10)}`, comp(246, 20));  // oct13_reward_shop:oct13_shop_total
    return;
}