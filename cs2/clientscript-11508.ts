//
function script11508(): void {
    if ((script4158() == 0)) {
        return;
    };
    if ((IF_GETHEIGHT(comp(662, 44)) < 245)) {  // lore_stats_side:lore_bounding_box
        IF_SETHIDE(true, comp(662, 77));  // lore_stats_side:scroll_counter_holder
        IF_SETHIDE(false, comp(662, 71));  // lore_stats_side:scroll_counter_holder_small
        IF_SETPOSITION(0, 10, 1, 2, comp(662, 69));  // lore_stats_side:lore_spell_points_holder
        IF_SETPOSITION(0, 56, 1, 2, comp(662, 65));  // lore_stats_side:lore_health_holder
    } else {
        IF_SETHIDE(false, comp(662, 77));  // lore_stats_side:scroll_counter_holder
        IF_SETHIDE(true, comp(662, 71));  // lore_stats_side:scroll_counter_holder_small
        IF_SETPOSITION(0, 56, 1, 2, comp(662, 69));  // lore_stats_side:lore_spell_points_holder
        IF_SETPOSITION(0, 98, 1, 2, comp(662, 65));  // lore_stats_side:lore_health_holder
    };
    return;
}