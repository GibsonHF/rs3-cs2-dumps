//
function script15829(int0: number): void {
    if ((int0 == 1)) {
        IF_SETOP(1, "View information", comp(662, 50));  // lore_stats_side:header_holder
        IF_SETONOP(callback(script13497, 43384878), comp(662, 50));  // lore_stats_side:header_holder
        IF_SETSIZE(30, 0, 1, 1, comp(662, 58));  // lore_stats_side:lore_name
        IF_SETHIDE(false, comp(662, 59));  // lore_stats_side:familiar_info
    } else {
        IF_SETOP(callback(script1), comp(662, 50));  // lore_stats_side:header_holder
        IF_SETONOP(callback(), comp(662, 50));  // lore_stats_side:header_holder
        IF_SETSIZE(8, 0, 1, 1, comp(662, 58));  // lore_stats_side:lore_name
        IF_SETHIDE(true, comp(662, 59));  // lore_stats_side:familiar_info
    };
    return;
}