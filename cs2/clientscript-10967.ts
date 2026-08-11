//
function script10967(int0: number): void {
    if ((int0 == 103743563)) {
        if ((INV_TOTAL(93 as inv, 33968 as obj) == 0)) {
            printmessage("You don't have any rose petals in your inventory to sprinkle.");
            return;
        };
        if ((varbitplayer_26867 < 1250)) {
            IF_SETGRAPHIC(21732 as graphic, comp(1583, 103));  // trh44_valentines15_milestones:popup_icon
            IF_SETTEXT("How many rose petals would you like to add to the love side?", comp(1583, 131));  // trh44_valentines15_milestones:popup_description
            IF_SETTEXT("0", comp(1583, 129));  // trh44_valentines15_milestones:text_input_display
            IF_SETHIDE(false, comp(1583, 110));  // trh44_valentines15_milestones:resizable_3x3_button_disabled_layer_accept
            IF_SETHIDE(false, comp(1583, 70));  // trh44_valentines15_milestones:darkness
            IF_SETHIDE(false, comp(1583, 97));  // trh44_valentines15_milestones:popup_layer
        } else {
            printmessage("You can't sprinkle any more petals.");
        };
    } else if ((int0 == 103743571)) {
        if ((INV_TOTAL(93 as inv, 33968 as obj) == 0)) {
            printmessage("You don't have any rose petals in your inventory to crush.");
            return;
        };
        if ((varbitplayer_26868 < 1250)) {
            IF_SETGRAPHIC(21731 as graphic, comp(1583, 103));  // trh44_valentines15_milestones:popup_icon
            IF_SETTEXT("How many rose petals would you like to add to the hate side?", comp(1583, 131));  // trh44_valentines15_milestones:popup_description
            IF_SETTEXT("0", comp(1583, 129));  // trh44_valentines15_milestones:text_input_display
            IF_SETHIDE(false, comp(1583, 110));  // trh44_valentines15_milestones:resizable_3x3_button_disabled_layer_accept
            IF_SETHIDE(false, comp(1583, 70));  // trh44_valentines15_milestones:darkness
            IF_SETHIDE(false, comp(1583, 97));  // trh44_valentines15_milestones:popup_layer
        } else {
            printmessage("You can't crush any more petals.");
        };
    };
    return;
}