//
function script19296(int0: number, int1: number): void {
    var int2 = IF_GETWIDTH(comp(1290, 32));  // trh_dungeon_crawl_overlay:boss_healthbar_background_layer
    if ((int2 == int0)) {
        IF_SETONTIMER(callback(), comp(1290, 102));  // trh_dungeon_crawl_overlay:boss_healthbar_progress_layer
        return;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int3, int4, int5] = script2413(2023680);
    int3 = MAX(1, (int3 - SCALE(int3, 100, (100 - int1))));
    int4 = MAX(1, (int4 - SCALE(int4, 100, (100 - int1))));
    int5 = MAX(1, (int5 - SCALE(int5, 100, (100 - int1))));
    IF_SETCOLOUR(script693(int3, int4, int5), comp(1290, 96));  // trh_dungeon_crawl_overlay:boss_healthbar_left_end_graphic
    IF_SETCOLOUR(script693(int3, int4, int5), comp(1290, 97));  // trh_dungeon_crawl_overlay:boss_healthbar_right_end_graphic
    var int6 = 1;
    if ((int2 < int0)) {
        if ((int2 < (int0 - 10))) {
            int6 = 5;
        };
        IF_SETSIZE((int2 + int6), 17, 0, 0, comp(1290, 32));  // trh_dungeon_crawl_overlay:boss_healthbar_background_layer
    } else if ((int2 > int0)) {
        if ((int2 > (int0 + 10))) {
            int6 = 5;
        };
        IF_SETSIZE((int2 - int6), 17, 0, 0, comp(1290, 32));  // trh_dungeon_crawl_overlay:boss_healthbar_background_layer
    };
    return;
}