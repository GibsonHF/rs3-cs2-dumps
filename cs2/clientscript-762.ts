//
function script762(): void {
    var int0 = (varbitplayer_3292 + varbitplayer_20973);
    IF_SETMODELANGLE(0, 0, 4, 4, 0, (3900 - (int0 * 100)), comp(696, 5));  // trh169_overlay:trh169_slime_model
    IF_SETPOSITION(0, 60, 1, 1, comp(696, 5));  // trh169_overlay:trh169_slime_model
    IF_RESETMODELLIGHTING(comp(696, 5));  // trh169_overlay:trh169_slime_model
    IF_SETMODELLIGHTING(1024, 179, 0, 255, 255, 255, -50, -60, -50, 3224 as material, comp(696, 5));  // trh169_overlay:trh169_slime_model
    IF_SETONOP(callback(script1308, 1), comp(696, 7));  // trh169_overlay:trh169_slime_slay_button_click
    IF_SETONOP(callback(script1308, 1), comp(696, 1));  // trh169_overlay:trh169_keybind_slay
    IF_SETONOP(callback(script1308, 2), comp(696, 13));  // trh169_overlay:trh169_feed_key_click
    IF_SETONOP(callback(script1308, 2), comp(696, 2));  // trh169_overlay:trh169_keybind_key
    IF_SETONOP(callback(script1308, 3), comp(696, 15));  // trh169_overlay:trh169_feed_hearts_click
    IF_SETONOP(callback(script1308, 4), comp(696, 43));  // trh169_overlay:heart_warning_confirm_click
    IF_SETONOP(callback(script1308, 5), comp(696, 73));  // trh169_overlay:key_warning_confirm_click
    IF_SETONOP(callback(script1308, 6), comp(696, 87));  // trh169_overlay:first_heart_warning_confirm_click
    IF_SETONOP(callback(script1308, 7), comp(696, 98));  // trh169_overlay:slay_warning_confirm_click
    IF_SETOP(1, "Unlock", comp(696, 13));  // trh169_overlay:trh169_feed_key_click
    IF_SETOPCURSOR(1, 201, comp(696, 13));  // trh169_overlay:trh169_feed_key_click
    IF_SETOP(1, "Feed", comp(696, 15));  // trh169_overlay:trh169_feed_hearts_click
    IF_SETOPCURSOR(1, 202, comp(696, 15));  // trh169_overlay:trh169_feed_hearts_click
    IF_SETOP(1, "Slay", comp(696, 7));  // trh169_overlay:trh169_slime_slay_button_click
    IF_SETOPCURSOR(1, 42, comp(696, 7));  // trh169_overlay:trh169_slime_slay_button_click
    var int1 = enum_getvalue(0, 0, 1072 as cs2enum, (varbitplayer_20973 + 1));
    if ((varbitplayer_3292 < 6)) {
        if ((script6950() > 0)) {
            IF_SETGRAPHIC(1933 as graphic, comp(696, 54));  // trh169_overlay:trh169_feed_key_graphic_1
            IF_SETGRAPHIC(1935 as graphic, comp(696, 55));  // trh169_overlay:trh169_feed_key_graphic_2
            IF_SETGRAPHIC(1934 as graphic, comp(696, 56));  // trh169_overlay:trh169_feed_key_graphic_3
            IF_SETTEXT("Feed a Key", comp(696, 57));  // trh169_overlay:trh169_feed_key_text
        } else {
            IF_SETGRAPHIC(1945 as graphic, comp(696, 54));  // trh169_overlay:trh169_feed_key_graphic_1
            IF_SETGRAPHIC(1947 as graphic, comp(696, 55));  // trh169_overlay:trh169_feed_key_graphic_2
            IF_SETGRAPHIC(1946 as graphic, comp(696, 56));  // trh169_overlay:trh169_feed_key_graphic_3
            if ((script6950() == 0)) {
                IF_SETTEXT("No Keys", comp(696, 57));  // trh169_overlay:trh169_feed_key_text
            } else {
                IF_SETTEXT("Full", comp(696, 57));  // trh169_overlay:trh169_feed_key_text
            };
        };
    } else {
        IF_SETGRAPHIC(1945 as graphic, comp(696, 54));  // trh169_overlay:trh169_feed_key_graphic_1
        IF_SETGRAPHIC(1947 as graphic, comp(696, 55));  // trh169_overlay:trh169_feed_key_graphic_2
        IF_SETGRAPHIC(1946 as graphic, comp(696, 56));  // trh169_overlay:trh169_feed_key_graphic_3
        if ((script6950() == 0)) {
            IF_SETTEXT("No Keys", comp(696, 57));  // trh169_overlay:trh169_feed_key_text
        } else {
            IF_SETTEXT("Full", comp(696, 57));  // trh169_overlay:trh169_feed_key_text
        };
    };
    if ((varbitplayer_3292 > 1)) {
        IF_SETTEXT(`x${inttostring(enum_getvalue(0, 0, 1071 as cs2enum, (varbitplayer_3292 - 1)), 10)}`, comp(696, 9));  // trh169_overlay:trh169_multiplier_slot_1
    } else {
        IF_SETTEXT("", comp(696, 9));  // trh169_overlay:trh169_multiplier_slot_1
    };
    IF_SETTEXT(`x${inttostring(enum_getvalue(0, 0, 1071 as cs2enum, varbitplayer_3292), 10)}`, comp(696, 10));  // trh169_overlay:trh169_multiplier_slot_2
    if ((varbitplayer_3292 < 6)) {
        IF_SETTEXT(`x${inttostring(enum_getvalue(0, 0, 1071 as cs2enum, (varbitplayer_3292 + 1)), 10)}`, comp(696, 11));  // trh169_overlay:trh169_multiplier_slot_3
    } else {
        IF_SETTEXT("", comp(696, 11));  // trh169_overlay:trh169_multiplier_slot_3
    };
    return;
}