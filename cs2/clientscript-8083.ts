//
function script8083(int0: npc): [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean] {
    if ((int0 == -1 as npc)) {
        return [false, false, false, false, false, false, false, false];
    };
    define_array[1](8);
    pop_array(0, 1);
    pop_array(3, 1);
    pop_array(7, 1);
    if ((script8085() != 1)) {
        pop_array(1, 0);
        pop_array(2, 0);
        pop_array(4, 1);
        pop_array(6, 0);
    } else {
        pop_array(2, 1);
        pop_array(1, 1);
        pop_array(4, 1);
        pop_array(6, 1);
    };
    if (((npc_getparam(int0, 1323) < 1) && (npc_getparam(int0, 379) <= 0))) {
        pop_array(5, 0);
    } else {
        pop_array(5, 1);
    };
    return [push_array(0), push_array(1), push_array(2), push_array(3), push_array(4), push_array(5), push_array(6), push_array(7)];
}