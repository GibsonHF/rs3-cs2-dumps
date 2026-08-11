//
function script19892(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string, string1: string, string2: string): void {
    stack(int0);
    script21005();
    if (BRANCH_EQUALS(1)) {
        IF_SETHIDE(true, comp(1594, 98));  // rewardshop:item_preview_buy_button
        IF_SETPOSITION(0, 8, 1, 2, comp(1594, 99));  // rewardshop:item_preview_close_button
        return;
    };
    IF_SETHIDE(false, comp(1594, 98));  // rewardshop:item_preview_buy_button
    IF_SETPOSITION(-68, 8, 1, 2, comp(1594, 99));  // rewardshop:item_preview_close_button
    IF_SETHIDE(true, comp(1594, 119));  // rewardshop:item_preview_buy_button_disabled_layer
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, comp(1594, 121));  // rewardshop:item_preview_buy_button_text
    };
    var int5 = struct_getparam(int1, 1446);
    if ((int2 == 0)) {
        IF_CLEAROPS(comp(1594, 118));  // rewardshop:item_preview_buy
        IF_SETONOP(callback(), comp(1594, 118));  // rewardshop:item_preview_buy
        IF_SETOP(1, script12793(int1, struct_getparam(int1, 4854), int5), comp(1594, 118));  // rewardshop:item_preview_buy
        if ((((struct_getparam(int1, 4855) != -1) || (struct_getparam(int1, 4856) != -1)) || (struct_getparam(int1, 4857) != -1))) {
            if ((script6431() == 1)) {
                var string1 = "There are more buy options if you tap and hold.";
            } else {
                string1 = "There are more buy options if you right-click.";
            };
            if ((struct_getparam(int1, 4855) != -1)) {
                IF_SETOP(2, script12793(int1, struct_getparam(int1, 4855), 0), comp(1594, 118));  // rewardshop:item_preview_buy
            };
            if ((struct_getparam(int1, 4856) != -1)) {
                IF_SETOP(3, script12793(int1, struct_getparam(int1, 4856), 0), comp(1594, 118));  // rewardshop:item_preview_buy
                if ((int5 == 0)) {
                    IF_SETOP(4, script12793(int1, -1, 1), comp(1594, 118));  // rewardshop:item_preview_buy
                };
            };
            if ((struct_getparam(int1, 4857) != -1)) {
                IF_SETOP(4, script12793(int1, struct_getparam(int1, 4857), 0), comp(1594, 118));  // rewardshop:item_preview_buy
                if ((int5 == 0)) {
                    IF_SETOP(5, script12793(int1, -1, 1), comp(1594, 118));  // rewardshop:item_preview_buy
                };
            };
        };
    } else {
        IF_SETHIDE(false, comp(1594, 119));  // rewardshop:item_preview_buy_button_disabled_layer
        IF_CLEAROPS(comp(1594, 118));  // rewardshop:item_preview_buy
        IF_SETONMOUSEREPEAT(callback(script8799, string1, 104464482, -1), comp(1594, 119));  // rewardshop:item_preview_buy_button_disabled_layer
    };
    if ((script6431() == 1)) {
        if ((int2 == 1)) {
            if ((STRING_LENGTH(string1) > 0)) {
                IF_SETONCLICK(callback(script7774, string1, 104464482, -1, int4), comp(1594, 98));  // rewardshop:item_preview_buy_button
            } else {
                IF_SETONCLICK(callback(), comp(1594, 98));  // rewardshop:item_preview_buy_button
            };
        } else {
            IF_SETONCLICK(callback(), comp(1594, 98));  // rewardshop:item_preview_buy_button
        };
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string1, 104464482, -1), comp(1594, 98));  // rewardshop:item_preview_buy_button
    return;
}