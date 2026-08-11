//
function script11854(int0: number, int1: number): void {
    var int2 = MAX(0, SCALE(varplayer_679, 1000, IF_GETWIDTH(comp(1923, 68))));  // toplevel_v2_combat_bar_mobile:combat_bar
    var int3 = MAX(0, SCALE(MAX(0, (varplayer_679 - 1000)), 1000, IF_GETWIDTH(comp(1923, 68))));  // toplevel_v2_combat_bar_mobile:combat_bar
    IF_SETSIZE(int2, IF_GETHEIGHT(int0), 0, 0, int0);
    IF_SETSIZE(int3, IF_GETHEIGHT(int1), 0, 0, int1);
    return;
}