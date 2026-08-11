//
function script1309(): void {
    if ((varbitplayer_3292 != 6)) {
        if ((script6950() > 1)) {
            IF_SETOPKEY(1, 83, 0, comp(696, 13));  // trh169_overlay:trh169_feed_key_click
            IF_SETOPKEYIGNOREHELD(1, comp(696, 13));  // trh169_overlay:trh169_feed_key_click
        } else {
            IF_SETOPKEY(1, 83, 0, comp(696, 7));  // trh169_overlay:trh169_slime_slay_button_click
            IF_SETOPKEYIGNOREHELD(1, comp(696, 7));  // trh169_overlay:trh169_slime_slay_button_click
        };
    } else {
        IF_SETOPKEY(1, 83, 0, comp(696, 7));  // trh169_overlay:trh169_slime_slay_button_click
        IF_SETOPKEYIGNOREHELD(1, comp(696, 7));  // trh169_overlay:trh169_slime_slay_button_click
    };
    IF_SETOPKEY(1, 53, 0, comp(696, 15));  // trh169_overlay:trh169_feed_hearts_click
    IF_SETOPKEY(1, 55, 0, comp(696, 2));  // trh169_overlay:trh169_keybind_key
    IF_SETOPKEY(1, 49, 0, comp(696, 1));  // trh169_overlay:trh169_keybind_slay
    IF_SETOPKEYIGNOREHELD(1, comp(696, 15));  // trh169_overlay:trh169_feed_hearts_click
    IF_SETOPKEYIGNOREHELD(1, comp(696, 2));  // trh169_overlay:trh169_keybind_key
    IF_SETOPKEYIGNOREHELD(1, comp(696, 1));  // trh169_overlay:trh169_keybind_slay
    varclient_1993 = 0;
    return;
}