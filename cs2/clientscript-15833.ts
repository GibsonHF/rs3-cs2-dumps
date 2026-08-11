//
function script15833(): void {
    if ((script4157() != 5)) {
        IF_SETHIDE(true, comp(662, 90));  // lore_stats_side:pet_abilities
        return;
    };
    IF_SETHIDE(false, comp(662, 90));  // lore_stats_side:pet_abilities
    varclient_4787 = script4695();
    script10649();
    return;
}