//
function script19909(): void {
    var int0 = -1 as graphic;
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    [int0, int1, int2, int3, int4, int5] = script10582();
    [int6, int7, int8, int9] = script10583();
    IF_SETGRAPHIC(int0, comp(1082, 52));  // trh189_overlay:solar_panel
    IF_SETGRAPHIC(int1, comp(1082, 87));  // trh189_overlay:progress_bar_graphic
    IF_SETGRAPHIC(int2, comp(1082, 50));  // trh189_overlay:lunar_panel
    IF_SETGRAPHIC(int3, comp(1082, 92));  // trh189_overlay:progress_bar_graphic_1
    IF_SETSIZE(int4, int5, 0, 0, comp(1082, 52));  // trh189_overlay:solar_panel
    IF_SETSIZE(int4, int5, 0, 0, comp(1082, 50));  // trh189_overlay:lunar_panel
    IF_SETPOSITION(int6, int7, 0, 0, comp(1082, 85));  // trh189_overlay:progress_container_left
    IF_SETSIZE(int8, int9, 0, 0, comp(1082, 85));  // trh189_overlay:progress_container_left
    IF_SETPOSITION(int6, int7, 2, 0, comp(1082, 90));  // trh189_overlay:progress_container_right
    IF_SETSIZE(int8, int9, 0, 0, comp(1082, 90));  // trh189_overlay:progress_container_right
    return;
}