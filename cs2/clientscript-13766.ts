//
function script13766(int0: number, int1: number): void {
    var int2 = ((36 * varbitplayer_38639) - 2);
    var int3 = 2;
    IF_SETHIDE(true, comp(1430, 250));  // toplevel_v2_combat_bar:mid_vert_edge
    IF_SETHIDE(true, comp(1430, 251));  // toplevel_v2_combat_bar:mid_hor_edge
    if ((int1 == 0)) {
        if ((varbitplayer_27169 == 1)) {
            int2 = (((36 + 1) * varbitplayer_38639) - 2);
        } else if ((int0 == 1)) {
            int2 = (((36 - 1) * varbitplayer_38639) - 2);
        };
        IF_SETPOSITION(0, 0, 0, 0, comp(1430, 247));  // toplevel_v2_combat_bar:left_edge
        IF_SETSIZE(int3, 36, 0, 0, comp(1430, 247));  // toplevel_v2_combat_bar:left_edge
        IF_SETPOSITION(int2, 0, 0, 0, comp(1430, 249));  // toplevel_v2_combat_bar:right_edge
        IF_SETSIZE(int3, 36, 0, 0, comp(1430, 249));  // toplevel_v2_combat_bar:right_edge
        IF_SETPOSITION(0, 0, 0, 0, comp(1430, 252));  // toplevel_v2_combat_bar:top_edge
        IF_SETSIZE(int2, int3, 0, 0, comp(1430, 252));  // toplevel_v2_combat_bar:top_edge
        IF_SETPOSITION(0, (36 - 2), 0, 0, comp(1430, 248));  // toplevel_v2_combat_bar:bottom_edge
        IF_SETSIZE(int2, int3, 0, 0, comp(1430, 248));  // toplevel_v2_combat_bar:bottom_edge
    } else if ((int1 == 1)) {
        if ((int0 == 1)) {
            int2 = (((36 - 1) * varbitplayer_38639) - 2);
        };
        IF_SETPOSITION(0, 0, 0, 0, comp(1430, 247));  // toplevel_v2_combat_bar:left_edge
        IF_SETSIZE(int3, int2, 0, 0, comp(1430, 247));  // toplevel_v2_combat_bar:left_edge
        IF_SETPOSITION((36 - 2), 0, 0, 0, comp(1430, 249));  // toplevel_v2_combat_bar:right_edge
        IF_SETSIZE(int3, int2, 0, 0, comp(1430, 249));  // toplevel_v2_combat_bar:right_edge
        IF_SETPOSITION(0, 0, 0, 0, comp(1430, 252));  // toplevel_v2_combat_bar:top_edge
        IF_SETSIZE(36, int3, 0, 0, comp(1430, 252));  // toplevel_v2_combat_bar:top_edge
        IF_SETPOSITION(0, int2, 0, 0, comp(1430, 248));  // toplevel_v2_combat_bar:bottom_edge
        IF_SETSIZE(36, int3, 0, 0, comp(1430, 248));  // toplevel_v2_combat_bar:bottom_edge
    };
    return;
}