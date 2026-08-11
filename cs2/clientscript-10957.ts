//
function script10957(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(INV_TOTAL(93 as inv, 33968 as obj), 1), comp(1583, 25));  // trh44_valentines15_milestones:petals
    IF_SETTEXT(TOSTRING_LOCALISED(200, 1), comp(1583, 35));  // trh44_valentines15_milestones:love_low_cost
    IF_SETTEXT(TOSTRING_LOCALISED(200, 1), comp(1583, 36));  // trh44_valentines15_milestones:hate_low_cost
    IF_SETTEXT(TOSTRING_LOCALISED(400, 1), comp(1583, 33));  // trh44_valentines15_milestones:love_med_cost
    IF_SETTEXT(TOSTRING_LOCALISED(400, 1), comp(1583, 34));  // trh44_valentines15_milestones:hate_med_cost
    IF_SETTEXT(TOSTRING_LOCALISED(600, 1), comp(1583, 31));  // trh44_valentines15_milestones:love_high_cost
    IF_SETTEXT(TOSTRING_LOCALISED(600, 1), comp(1583, 32));  // trh44_valentines15_milestones:hate_high_cost
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(1583, 30));  // trh44_valentines15_milestones:love_absurd_cost
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(1583, 29));  // trh44_valentines15_milestones:hate_absurd_cost
    IF_SETTEXT(`${TOSTRING_LOCALISED(1250, 1)} & ${TOSTRING_LOCALISED(1250, 1)}`, comp(1583, 28));  // trh44_valentines15_milestones:insane_cost
    if ((varbitplayer_26867 == 1250)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(1250, 1)} (cap)`, comp(1583, 26));  // trh44_valentines15_milestones:total_love
        IF_SETHIDE(false, comp(1583, 76));  // trh44_valentines15_milestones:resizable_3x3_button_disabled_layer_add_love
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_26867, 1), comp(1583, 26));  // trh44_valentines15_milestones:total_love
    };
    if ((varbitplayer_26868 == 1250)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(1250, 1)} (cap)`, comp(1583, 27));  // trh44_valentines15_milestones:total_hate
        IF_SETHIDE(false, comp(1583, 84));  // trh44_valentines15_milestones:resizable_3x3_button_disabled_layer_add_hate
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_26868, 1), comp(1583, 27));  // trh44_valentines15_milestones:total_hate
    };
    return;
}