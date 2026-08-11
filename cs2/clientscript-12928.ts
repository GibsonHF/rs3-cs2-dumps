//
function script12928(int0: number): void {
    var int1 = 8;
    var string0 = "Collapse";
    var string1 = "Expand";
    if ((int0 == 0)) {
        script14093(43384839, -1, 0, 1, 114, 0, int1, 2);
        script14093(43384834, -1, 0, 1, 114, 1, int1, 2);
        IF_SETVFLIP(0, comp(662, 14));  // lore_stats_side:lore_fixed_expand_collapse_graphic
        IF_SETONMOUSEREPEAT(callback(script8799, string0, 43384843, -1), comp(662, 11));  // lore_stats_side:lore_fixed_expand_collapse
        IF_SETOP(1, string0, comp(662, 13));  // lore_stats_side:collapse_click
        IF_SETPOSITION(0, 4, 1, 0, comp(662, 11));  // lore_stats_side:lore_fixed_expand_collapse
        IF_SETPOSITION(-80, 42, 1, 0, comp(662, 15));  // lore_stats_side:lore_fixed_give
        IF_SETPOSITION(-40, 42, 1, 0, comp(662, 16));  // lore_stats_side:lore_fixed_dump
        IF_SETPOSITION(0, 42, 1, 0, comp(662, 17));  // lore_stats_side:lore_fixed_renew
        IF_SETPOSITION(40, 42, 1, 0, comp(662, 18));  // lore_stats_side:lore_fixed_spell
        IF_SETPOSITION(80, 42, 1, 0, comp(662, 19));  // lore_stats_side:spell_fixed_auto_fire
        IF_SETPOSITION(-80, 78, 1, 0, comp(662, 20));  // lore_stats_side:lore_fixed_attack
        IF_SETPOSITION(-40, 78, 1, 0, comp(662, 21));  // lore_stats_side:lore_fixed_call
        IF_SETPOSITION(0, 78, 1, 0, comp(662, 22));  // lore_stats_side:lore_fixed_dismiss
        IF_SETPOSITION(40, 78, 1, 0, comp(662, 23));  // lore_stats_side:fixed_settings
        IF_SETPOSITION(80, 78, 1, 0, comp(662, 30));  // lore_stats_side:lore_fixed_switchmode
        IF_SETHIDE(false, comp(662, 17));  // lore_stats_side:lore_fixed_renew
        IF_SETHIDE(false, comp(662, 20));  // lore_stats_side:lore_fixed_attack
        IF_SETHIDE(false, comp(662, 22));  // lore_stats_side:lore_fixed_dismiss
        IF_SETHIDE(false, comp(662, 23));  // lore_stats_side:fixed_settings
        IF_SETHIDE(false, comp(662, 30));  // lore_stats_side:lore_fixed_switchmode
        IF_SETHIDE(false, comp(662, 19));  // lore_stats_side:spell_fixed_auto_fire
        IF_SETPOSITION(0, 8, 0, 0, comp(662, 9));  // lore_stats_side:fixed_health_holder
        IF_SETPOSITION(0, 8, 2, 0, comp(662, 8));  // lore_stats_side:fixed_spell_points_holder
        IF_SETPOSITION(0, 13, 1, 0, comp(662, 10));  // lore_stats_side:animal_fixed_time_left
        IF_SETSIZE(8192, 26, 2, 0, comp(662, 9));  // lore_stats_side:fixed_health_holder
        IF_SETSIZE(8192, 26, 2, 0, comp(662, 8));  // lore_stats_side:fixed_spell_points_holder
    } else {
        script14093(43384839, -1, 0, 1, 64, 0, int1, 2);
        script14093(43384834, -1, 0, 1, 64, 1, int1, 2);
        IF_SETVFLIP(1, comp(662, 14));  // lore_stats_side:lore_fixed_expand_collapse_graphic
        IF_SETONMOUSEREPEAT(callback(script8799, string1, 43384843, -1), comp(662, 11));  // lore_stats_side:lore_fixed_expand_collapse
        IF_SETOP(1, string1, comp(662, 13));  // lore_stats_side:collapse_click
        IF_SETPOSITION(0, 8, 1, 0, comp(662, 11));  // lore_stats_side:lore_fixed_expand_collapse
        IF_SETPOSITION(-80, 8, 1, 0, comp(662, 15));  // lore_stats_side:lore_fixed_give
        IF_SETPOSITION(-40, 8, 1, 0, comp(662, 16));  // lore_stats_side:lore_fixed_dump
        IF_SETPOSITION(40, 8, 1, 0, comp(662, 18));  // lore_stats_side:lore_fixed_spell
        IF_SETPOSITION(80, 8, 1, 0, comp(662, 21));  // lore_stats_side:lore_fixed_call
        IF_SETHIDE(true, comp(662, 17));  // lore_stats_side:lore_fixed_renew
        IF_SETHIDE(true, comp(662, 20));  // lore_stats_side:lore_fixed_attack
        IF_SETHIDE(true, comp(662, 22));  // lore_stats_side:lore_fixed_dismiss
        IF_SETHIDE(true, comp(662, 23));  // lore_stats_side:fixed_settings
        IF_SETHIDE(true, comp(662, 30));  // lore_stats_side:lore_fixed_switchmode
        IF_SETHIDE(true, comp(662, 19));  // lore_stats_side:spell_fixed_auto_fire
        IF_SETPOSITION(0, 48, 0, 0, comp(662, 9));  // lore_stats_side:fixed_health_holder
        IF_SETPOSITION(0, 48, 2, 0, comp(662, 8));  // lore_stats_side:fixed_spell_points_holder
        IF_SETPOSITION(0, 35, 1, 0, comp(662, 10));  // lore_stats_side:animal_fixed_time_left
        IF_SETSIZE(8192, 8, 2, 0, comp(662, 9));  // lore_stats_side:fixed_health_holder
        IF_SETSIZE(8192, 8, 2, 0, comp(662, 8));  // lore_stats_side:fixed_spell_points_holder
    };
    script11688();
    return;
}