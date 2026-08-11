//
function script13001(): void {
    if ((CC_FIND(comp(1430, 57), 3) == 1)) {  // toplevel_v2_combat_bar:player_adrenaline_bar
        CC_SETONTIMER(callback());
    };
    if ((IF_FIND(comp(1616, 0)) == 1)) {  // combatv2_adrenaline:fullscreen_adrenaline_bar_graphic
        CC_SETONTIMER(callback());
    };
    return;
}