//
function script3348(int0: number, int1: number, int2: number): void {
    if ((int0 == -1)) {
        return;
    };
    varclient_2 = 0;
    script3350();
    IF_SETSIZE(350, 0, 0, 0, comp(1451, 33));  // toplevel_v2_ability_book_tooltip:main_layer
    script11910(int0, 86638598, 0, 0, 0, 0);
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script3351(350, IF_GETHEIGHT(comp(1451, 33)), int1, int2);  // toplevel_v2_ability_book_tooltip:main_layer
    IF_SETSIZE(350, IF_GETHEIGHT(comp(1451, 33)), 0, 0, comp(1451, 33));  // toplevel_v2_ability_book_tooltip:main_layer
    IF_SETPOSITION(int3, int4, 0, 0, comp(1451, 33));  // toplevel_v2_ability_book_tooltip:main_layer
    return;
}