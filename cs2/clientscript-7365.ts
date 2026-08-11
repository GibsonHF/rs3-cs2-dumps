//
function script7365(): void {
    SOUND_VORBIS_RATE(6185 as vorbis, 1, 0, 100, 350);
    if ((IF_GETHIDE(comp(1379, 80)) == false)) {  // pop_manager:zone_layer
        IF_SETHIDE(true, comp(1379, 80));  // pop_manager:zone_layer
        IF_SETHIDE(false, comp(1379, 75));  // pop_manager:scrolls_layer
    } else {
        IF_SETHIDE(true, comp(1379, 75));  // pop_manager:scrolls_layer
        IF_SETHIDE(false, comp(1379, 80));  // pop_manager:zone_layer
    };
    script7367();
    return;
}