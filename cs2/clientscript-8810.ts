//
function script8810(): void {
    script8812();
    IF_SETONVARTRANSMIT(callback(script8811, 3906, 3905, 2), comp(248, 8));  // donation:item_info_layer
    script8857();
    IF_SETONVARTRANSMIT(callback(script8821, 3900, 1), comp(248, 18));  // donation:player_donation_so_far
    IF_SETOBJECT_NONUM(29492 as obj, 1, comp(248, 63));  // donation:bond_graphic
    script8859();
    IF_SETONVARTRANSMIT(callback(script8858, 3901, 1), comp(248, 64));  // donation:player_bond_donation_so_far
    script9109();
    IF_SETONVARTRANSMIT(callback(script9068, 3908, 1), comp(248, 56));  // donation:total_donation_of_item
    return;
}