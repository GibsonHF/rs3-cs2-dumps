//
function script15742(): void {
    IF_SETHIDE(true, comp(662, 87));  // lore_stats_side:lore_pets
    IF_SETHIDE(false, comp(1430, 38));  // toplevel_v2_combat_bar:spell_icon
    IF_SETHIDE(false, comp(1506, 18));  // topstat_lore:spell_icon
    IF_SETHIDE(false, comp(662, 55));  // lore_stats_side:time
    IF_SETHIDE(false, comp(662, 53));  // lore_stats_side:lore_renew_button
    IF_SETHIDE(false, comp(662, 65));  // lore_stats_side:lore_health_holder
    IF_SETHIDE(false, comp(662, 69));  // lore_stats_side:lore_spell_points_holder
    IF_SETHIDE(false, comp(662, 67));  // lore_stats_side:attack_layer
    IF_SETHIDE(false, comp(662, 68));  // lore_stats_side:settings
    script11727(1);
    IF_SETPOSITION(10, 86, 0, 0, comp(662, 54));  // lore_stats_side:call_animal_button
    IF_SETPOSITION(0, 98, 0, 2, comp(662, 65));  // lore_stats_side:lore_health_holder
    IF_SETSIZE(100, 26, 1, 0, comp(662, 66));  // lore_stats_side:lore_familiar_healthbar_button
    script15829(1);
    return;
}