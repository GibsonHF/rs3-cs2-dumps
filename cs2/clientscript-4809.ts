//
function script4809(): void {
    IF_SETHIDE(true, comp(1258, 478));  // clan_stronghold_main_decor:custom_buy_layer_1
    IF_SETHIDE(true, comp(1258, 403));  // clan_stronghold_main_decor:custom_buy_layer_2
    IF_SETHIDE(true, comp(1258, 322));  // clan_stronghold_main_decor:custom_buy_layer_3
    IF_SETHIDE(true, comp(1258, 466));  // clan_stronghold_main_decor:custom_cancel_layer_1
    IF_SETHIDE(true, comp(1258, 391));  // clan_stronghold_main_decor:custom_cancel_layer_2
    IF_SETHIDE(true, comp(1258, 310));  // clan_stronghold_main_decor:custom_cancel_layer_3
    if ((script4828(varbitplayer_6981) == 1)) {
        IF_SETHIDE(false, comp(1258, 466));  // clan_stronghold_main_decor:custom_cancel_layer_1
        IF_SETHIDE(false, comp(1258, 391));  // clan_stronghold_main_decor:custom_cancel_layer_2
        IF_SETHIDE(false, comp(1258, 310));  // clan_stronghold_main_decor:custom_cancel_layer_3
    } else {
        IF_SETHIDE(false, comp(1258, 478));  // clan_stronghold_main_decor:custom_buy_layer_1
        IF_SETHIDE(false, comp(1258, 403));  // clan_stronghold_main_decor:custom_buy_layer_2
        IF_SETHIDE(false, comp(1258, 322));  // clan_stronghold_main_decor:custom_buy_layer_3
    };
    script4840();
    script4814();
    return;
}