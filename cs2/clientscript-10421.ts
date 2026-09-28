//
function script10421(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if ((script6431() == 1)) {
        [int1, int2, int3, int4] = script2956();
        IF_SETSIZE(0, (50 + int2), 1, 0, int0);
        IF_SETPOSITION(0, int2, 1, 0, comp(1422, 79));  // worldmap_v2_ui:funclisttoggle_layer
        IF_SETSIZE((int1 + int3), 50, 1, 0, comp(1422, 79));  // worldmap_v2_ui:funclisttoggle_layer
        IF_SETSIZE(0, (50 + int2), 1, 1, comp(1422, 1));  // worldmap_v2_ui:worldmap_overlay
        IF_SETPOSITION(int1, IF_GETHEIGHT(int0), 0, 0, comp(1422, 2));  // worldmap_v2_ui:mainwin
        IF_SETSIZE((int1 + int3), ((IF_GETHEIGHT(int0) + int2) + int4), 1, 1, comp(1422, 2));  // worldmap_v2_ui:mainwin
        IF_SETPOSITION(script8407(93192294), (script8408(93192294) + IF_GETHEIGHT(comp(1422, 102) /*worldmap_v2_ui:zoom_layer*/)), 0, 0, comp(1422, 114) /*worldmap_v2_ui:map_menu_bg*/);
    };
    script13990(int0, -1, 2830);
    return;
}