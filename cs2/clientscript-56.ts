//
function script56(int0: number, int1: number, int2: number): void {
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script58, 0, -1, int1, int2), comp(1465, 21));  // toplevel_v2_minimap:world_map_layer
    } else {
        IF_SETONTIMER(callback(), comp(1465, 21));  // toplevel_v2_minimap:world_map_layer
    };
    return;
}