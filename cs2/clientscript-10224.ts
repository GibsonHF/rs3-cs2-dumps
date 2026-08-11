//
function script10224(int0: number, int1: number, int2: number): void {
    CC_DELETEALL(comp(1422, 4));  // worldmap_v2_ui:mapelement_mouseover_layer
    if (((varbitplayer_14112 == 1) || (IF_HASSUB(comp(1477, 800)) == 0))) {  // toplevel_v2:worldmap_ui_layer
        return;
    };
    CC_CREATE(comp(1422, 4), 5, 0);  // worldmap_v2_ui:mapelement_mouseover_layer
    CC_SETSIZE(24, 24, 0, 0);
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script8405(93192196);
    CC_SETPOSITION(((int1 - int3) - (CC_GETWIDTH() / 2)), ((int2 - int4) - (CC_GETHEIGHT() / 2)), 0, 0);
    script7590(int0);
    return;
}