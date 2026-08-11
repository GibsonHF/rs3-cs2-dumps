//
function script11686(int0: number): void {
    CC_DELETEALL(int0);
    var int1 = 1;
    if ((int0 == comp(662, 42))) {  // lore_stats_side:lore_fixed_spell_points
        if ((strcmp("Collapse", IF_GETOP(1, comp(662, 13))) == 0)) {  // lore_stats_side:collapse_click
            int1 = 0;
        };
        script15835(int0, 0, 0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 65280, 0, 14471, 28, 1, int1);
    } else {
        script15835(int0, 0, 0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 65280, 0, 14471, 28, 1, 0);
    };
    script11687(int0, 0);
    return;
}