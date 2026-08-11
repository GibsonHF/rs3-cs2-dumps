//
function script10970(int0: number): void {
    if ((int0 > INV_TOTAL(93 as inv, 33968 as obj))) {
        var int0 = INV_TOTAL(93 as inv, 33968 as obj);
    };
    if ((int0 > 1250)) {
        int0 = 1250;
    };
    if ((varbitplayer_26870 == 0)) {
        if (((int0 + varbitplayer_26867) > 1250)) {
            int0 = (1250 - varbitplayer_26867);
        };
    } else if (((int0 + varbitplayer_26868) > 1250)) {
        int0 = (1250 - varbitplayer_26868);
    };
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), comp(1583, 129));  // trh44_valentines15_milestones:text_input_display
    if ((int0 > 0)) {
        IF_SETHIDE(true, comp(1583, 110));  // trh44_valentines15_milestones:resizable_3x3_button_disabled_layer_accept
    } else {
        IF_SETHIDE(false, comp(1583, 110));  // trh44_valentines15_milestones:resizable_3x3_button_disabled_layer_accept
    };
    return;
}