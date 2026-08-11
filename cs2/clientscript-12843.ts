//
function script12843(int0: number): void {
    if ((int0 == 1)) {
        IF_SETCOLOUR(script10495(3), comp(1422, 108));  // worldmap_v2_ui:zoom_level
    } else {
        IF_SETCOLOUR(script10495(6), comp(1422, 108));  // worldmap_v2_ui:zoom_level
    };
    IF_SETONTIMER(callback(script306, CLIENTCLOCK(), -2147483645), comp(1422, 108));  // worldmap_v2_ui:zoom_level
    return;
}