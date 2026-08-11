//
function script5563(): void {
    var int0 = (varplayer_3870 * varplayer_3869);
    var int1 = (INV_TOTAL(93 as inv, 29494 as obj) + varbitplayer_23016);
    var int2 = script17401();
    IF_SETTEXT(script17372(script17400(), 9, 1), comp(230, 3));  // bonds_repackage:coins_info_count
    IF_SETTEXT(inttostring(int1, 10), comp(230, 5));  // bonds_repackage:bonds_info_count
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3869, 1), comp(230, 0));  // bonds_repackage:buy_info_count
    IF_SETTEXT(inttostring(varplayer_3870, 10), comp(230, 26));  // bonds_repackage:selection_count
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), comp(230, 16));  // bonds_repackage:total_cost_text
    if ((int0 > int2)) {
        IF_SETCOLOUR(16711680, comp(230, 16));  // bonds_repackage:total_cost_text
    } else {
        IF_SETCOLOUR(16777215, comp(230, 16));  // bonds_repackage:total_cost_text
    };
    return;
}