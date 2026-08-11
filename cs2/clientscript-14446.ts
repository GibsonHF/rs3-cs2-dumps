//
function script14446(int0: number): void {
    if ((script4157() != 5)) {
        return;
    };
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(662, 65));  // lore_stats_side:lore_health_holder
        IF_SETHIDE(true, comp(662, 67));  // lore_stats_side:attack_layer
        IF_SETHIDE(true, comp(662, 68));  // lore_stats_side:settings
        IF_SETSIZE(16, 26, 1, 0, comp(662, 66));  // lore_stats_side:lore_familiar_healthbar_button
        if ((varbitplayer_6048 == 101)) {
            IF_SETPOSITION(0, 58, 0, 2, comp(662, 65));  // lore_stats_side:lore_health_holder
        } else {
            IF_SETPOSITION(0, 92, 0, 2, comp(662, 65));  // lore_stats_side:lore_health_holder
        };
        script11683(43384898);
    } else {
        IF_SETHIDE(true, comp(662, 65));  // lore_stats_side:lore_health_holder
    };
    return;
}