//
function script8812(): void {
    IF_SETOBJECT_NONUM(varplayer_3906, 2147483647, comp(248, 4));  // donation:item_to_donate
    IF_SETTEXT(OC_NAME(varplayer_3906), comp(248, 5));  // donation:item_name
    IF_SETTEXT(`You can donate ${TOSTRING_LOCALISED(varplayer_3905, 1)}`, comp(248, 6));  // donation:item_amount
    return;
}