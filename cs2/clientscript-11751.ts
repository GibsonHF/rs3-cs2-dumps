//
function script11751(): void {
    var int0 = 0;
    IF_SETTEXT(`Prestige Level - ${inttostring(varbitplayer_28941, 10)}`, comp(1660, 9));  // trh65_ninja_training:prestige_title
    while ((int0 <= varbitplayer_28942)) {
        script11752(int0);
        int0 = (int0 + 1);
    };
    if ((varbitplayer_28941 == 1)) {
        if ((varbitplayer_28941 == varbitplayer_28942)) {
            IF_SETHIDE(false, comp(1660, 89));  // trh65_ninja_training:smoke_bomb_unlocked
        };
        IF_SETHIDE(true, comp(1660, 94));  // trh65_ninja_training:smoke_bomb_disabled
        IF_SETHIDE(false, comp(1660, 83));  // trh65_ninja_training:sai_disabled
        IF_SETHIDE(false, comp(1660, 6));  // trh65_ninja_training:glaive_disabled
        IF_SETHIDE(false, comp(1660, 103));  // trh65_ninja_training:staff_disabled
    };
    if ((varbitplayer_28941 == 2)) {
        IF_SETHIDE(false, comp(1660, 89));  // trh65_ninja_training:smoke_bomb_unlocked
        IF_SETHIDE(true, comp(1660, 94));  // trh65_ninja_training:smoke_bomb_disabled
        if ((varbitplayer_28941 == varbitplayer_28942)) {
            IF_SETHIDE(false, comp(1660, 79));  // trh65_ninja_training:sai_unlocked
        };
        IF_SETHIDE(true, comp(1660, 83));  // trh65_ninja_training:sai_disabled
        IF_SETHIDE(false, comp(1660, 6));  // trh65_ninja_training:glaive_disabled
        IF_SETHIDE(false, comp(1660, 103));  // trh65_ninja_training:staff_disabled
    };
    if ((varbitplayer_28941 == 3)) {
        IF_SETHIDE(false, comp(1660, 89));  // trh65_ninja_training:smoke_bomb_unlocked
        IF_SETHIDE(true, comp(1660, 94));  // trh65_ninja_training:smoke_bomb_disabled
        IF_SETHIDE(false, comp(1660, 79));  // trh65_ninja_training:sai_unlocked
        IF_SETHIDE(true, comp(1660, 83));  // trh65_ninja_training:sai_disabled
        if ((varbitplayer_28941 == varbitplayer_28942)) {
            IF_SETHIDE(false, comp(1660, 3));  // trh65_ninja_training:glaive_unlocked
        };
        IF_SETHIDE(true, comp(1660, 6));  // trh65_ninja_training:glaive_disabled
        IF_SETHIDE(false, comp(1660, 103));  // trh65_ninja_training:staff_disabled
    };
    if ((varbitplayer_28941 == 4)) {
        IF_SETHIDE(false, comp(1660, 89));  // trh65_ninja_training:smoke_bomb_unlocked
        IF_SETHIDE(true, comp(1660, 94));  // trh65_ninja_training:smoke_bomb_disabled
        IF_SETHIDE(false, comp(1660, 79));  // trh65_ninja_training:sai_unlocked
        IF_SETHIDE(true, comp(1660, 83));  // trh65_ninja_training:sai_disabled
        IF_SETHIDE(false, comp(1660, 3));  // trh65_ninja_training:glaive_unlocked
        IF_SETHIDE(true, comp(1660, 6));  // trh65_ninja_training:glaive_disabled
        if ((varbitplayer_28941 == varbitplayer_28942)) {
            IF_SETHIDE(false, comp(1660, 98));  // trh65_ninja_training:staff_unlocked
        };
        IF_SETHIDE(true, comp(1660, 103));  // trh65_ninja_training:staff_disabled
    };
    if ((varbitplayer_28941 > varbitplayer_28942)) {
        IF_SETHIDE(false, comp(1660, 69));  // trh65_ninja_training:prize_layer
        IF_SETHIDE(false, comp(1660, 202));  // trh65_ninja_training:confirm_button_disabled_layer
    } else {
        IF_SETHIDE(true, comp(1660, 69));  // trh65_ninja_training:prize_layer
    };
    return;
}