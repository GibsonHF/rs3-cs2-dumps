//
function script697(int0: number): void {
    if ((IF_FIND(int0) == 1)) {
        CC_SETOUTLINE(2);
    };
    if (((CC_FIND(comp(662, 73), 0) == 1) && (AND(CC_GETTARGETMASK(), 32) != 0))) {  // lore_stats_side:spell_icon
        script8311(2);
    };
    return;
}