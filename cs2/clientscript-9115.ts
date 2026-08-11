//
function script9115(): void {
    IF_SETOBJECT_NONUM(varplayer_3906, 2147483647, comp(275, 1));  // confirm_donation:confirm_item
    IF_SETTEXT(OC_NAME(varplayer_3906), comp(275, 0));  // confirm_donation:confirm_item_name
    script9117();
    IF_SETONVARTRANSMIT(callback(script9116, 3908, 1), comp(275, 2));  // confirm_donation:confirm_item_count
    if (((varplayer_3906 == 29492 as obj) || (varplayer_3906 == 29494 as obj))) {
        IF_SETTEXT(`Total Bonds : ${TOSTRING_LOCALISED(varplayer_3909, 1)}`, comp(275, 23));  // confirm_donation:confirm_item_amount
    } else if ((varplayer_3909 == 1)) {
        IF_SETTEXT(`Value: ${TOSTRING_LOCALISED(varplayer_3909, 1)} coin`, comp(275, 23));  // confirm_donation:confirm_item_amount
    } else {
        IF_SETTEXT(`Value: ${TOSTRING_LOCALISED(varplayer_3909, 1)} coins`, comp(275, 23));  // confirm_donation:confirm_item_amount
    };
    script9119();
    IF_SETONVARTRANSMIT(callback(script9118, 3910, 3910, 2), comp(275, 25));  // confirm_donation:add_more_stuff_layer
    script10687();
    IF_SETONVARTRANSMIT(callback(script10685, 3911, 1), comp(275, 13));  // confirm_donation:charity_options_layer
    return;
}