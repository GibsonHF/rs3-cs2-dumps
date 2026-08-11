//
function script13767(int0: number): void {
    var int1 = ((36 * MODULO(varbitplayer_38639, (14 / 2))) - 2);
    var int2 = 0;
    var int3 = 2;
    IF_SETHIDE(false, comp(1430, 250));  // toplevel_v2_combat_bar:mid_vert_edge
    IF_SETHIDE(false, comp(1430, 251));  // toplevel_v2_combat_bar:mid_hor_edge
    if ((int0 == 0)) {
        int1 = ((36 * (varbitplayer_38639 - (14 / 2))) - 2);
        IF_SETPOSITION(0, 0, 0, 0, comp(1430, 247));  // toplevel_v2_combat_bar:left_edge
        IF_SETSIZE(int3, 0, 0, 1, comp(1430, 247));  // toplevel_v2_combat_bar:left_edge
        IF_SETPOSITION(0, 0, 2, 0, comp(1430, 249));  // toplevel_v2_combat_bar:right_edge
        IF_SETSIZE(int3, (36 - 2), 0, 0, comp(1430, 249));  // toplevel_v2_combat_bar:right_edge
        IF_SETPOSITION(0, 0, 0, 0, comp(1430, 252));  // toplevel_v2_combat_bar:top_edge
        IF_SETSIZE(0, int3, 1, 0, comp(1430, 252));  // toplevel_v2_combat_bar:top_edge
        IF_SETPOSITION(0, 0, 0, 2, comp(1430, 248));  // toplevel_v2_combat_bar:bottom_edge
        IF_SETSIZE(int1, int3, 0, 0, comp(1430, 248));  // toplevel_v2_combat_bar:bottom_edge
        IF_SETPOSITION(int1, 0, 0, 2, comp(1430, 250));  // toplevel_v2_combat_bar:mid_vert_edge
        IF_SETSIZE(int3, (36 + 2), 0, 0, comp(1430, 250));  // toplevel_v2_combat_bar:mid_vert_edge
        IF_SETPOSITION(0, (36 - 2), 2, 0, comp(1430, 251));  // toplevel_v2_combat_bar:mid_hor_edge
        IF_SETSIZE((245 - int1), int3, 0, 0, comp(1430, 251));  // toplevel_v2_combat_bar:mid_hor_edge
    } else if ((int0 == 1)) {
        int1 = (((36 - 1) * (varbitplayer_38639 - (14 / 2))) - 2);
        int2 = (((36 - 1) * (14 - varbitplayer_38639)) + 2);
        IF_SETPOSITION(0, 0, 0, 0, comp(1430, 247));  // toplevel_v2_combat_bar:left_edge
        IF_SETSIZE(int3, 0, 0, 1, comp(1430, 247));  // toplevel_v2_combat_bar:left_edge
        IF_SETPOSITION(0, 0, 2, 0, comp(1430, 249));  // toplevel_v2_combat_bar:right_edge
        IF_SETSIZE(int3, int1, 0, 0, comp(1430, 249));  // toplevel_v2_combat_bar:right_edge
        IF_SETPOSITION(0, 0, 0, 0, comp(1430, 252));  // toplevel_v2_combat_bar:top_edge
        IF_SETSIZE(0, int3, 1, 0, comp(1430, 252));  // toplevel_v2_combat_bar:top_edge
        IF_SETPOSITION(0, 0, 0, 2, comp(1430, 248));  // toplevel_v2_combat_bar:bottom_edge
        IF_SETSIZE((36 - 2), int3, 0, 0, comp(1430, 248));  // toplevel_v2_combat_bar:bottom_edge
        IF_SETPOSITION((36 - 2), 0, 0, 2, comp(1430, 250));  // toplevel_v2_combat_bar:mid_vert_edge
        IF_SETSIZE(int3, int2, 0, 0, comp(1430, 250));  // toplevel_v2_combat_bar:mid_vert_edge
        IF_SETPOSITION(0, int1, 2, 0, comp(1430, 251));  // toplevel_v2_combat_bar:mid_hor_edge
        IF_SETSIZE((36 + 2), int3, 0, 0, comp(1430, 251));  // toplevel_v2_combat_bar:mid_hor_edge
    };
    return;
}