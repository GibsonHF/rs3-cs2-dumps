//
function script10840(int0: number): void {
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(662, 45));  // lore_stats_side:lore_bob
        IF_SETSIZE(8, 44, 1, 1, comp(662, 44));  // lore_stats_side:lore_bounding_box
    } else {
        IF_SETHIDE(true, comp(662, 45));  // lore_stats_side:lore_bob
        IF_SETSIZE(8, 8, 1, 1, comp(662, 44));  // lore_stats_side:lore_bounding_box
    };
    if ((script4157() == 5)) {
        script13786();
    };
    return;
}