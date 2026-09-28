//
function script1859(int0: number): void {
    if ((int0 == 1)) {
        IF_SETONKEY(callback(script1866, -2147483640, -2147483639, -2147483645), comp(1422, 101));  // worldmap_v2_ui:map_menu_layer
        IF_SETTEXT(varclient_2545, comp(1422, 101));  // worldmap_v2_ui:map_menu_layer
        script1566(0, varclient_2545, 50);
    } else {
        IF_SETONKEY(callback(), comp(1422, 101));  // worldmap_v2_ui:map_menu_layer
        script1594();
    };
    return;
}