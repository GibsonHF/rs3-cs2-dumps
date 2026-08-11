//
function script15776(): void {
    IF_SETHIDE(false, comp(662, 87));  // lore_stats_side:lore_pets
    script10840(0);
    IF_SETHIDE(false, comp(1430, 38));  // toplevel_v2_combat_bar:spell_icon
    IF_SETHIDE(false, comp(1506, 18));  // topstat_lore:spell_icon
    if ((varbitplayer_6048 == 101)) {
        IF_SETHIDE(true, comp(662, 89));  // lore_stats_side:lore_pet_growth_button
    };
    if ((varbitplayer_6049 == 101)) {
        IF_SETHIDE(true, comp(662, 88));  // lore_stats_side:lore_pet_hunger_button
    };
    IF_SETPOSITION(0, script14445(-1279), 1, 4, comp(662, 52));  // lore_stats_side:lore_chathead
    IF_SETHIDE(true, comp(662, 55));  // lore_stats_side:time
    IF_SETHIDE(true, comp(662, 53));  // lore_stats_side:lore_renew_button
    IF_SETHIDE(true, comp(662, 65));  // lore_stats_side:lore_health_holder
    IF_SETHIDE(true, comp(662, 69));  // lore_stats_side:lore_spell_points_holder
    script11727(0);
    IF_SETPOSITION(10, 44, 0, 0, comp(662, 54));  // lore_stats_side:call_animal_button
    script15829(0);
    return;
}