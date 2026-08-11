//
function script10972(): void {
    if ((varbitplayer_26868 == 1250)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(1250, 1)} (cap)`, comp(1583, 27));  // trh44_valentines15_milestones:total_hate
        IF_SETHIDE(false, comp(1583, 84));  // trh44_valentines15_milestones:resizable_3x3_button_disabled_layer_add_hate
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_26868, 1), comp(1583, 27));  // trh44_valentines15_milestones:total_hate
    };
    return;
}