//
function script18474(): void {
    varplayer_11598 = false;
    if ((script18461(4539) == 1)) {
        IF_SETHIDE(false, comp(855, 19));  // mtx_front_end_spotlight:loading_layer
        script18464(4539);
    } else {
        script18476(2);
        IF_SETHIDE(true, comp(855, 9));  // mtx_front_end_spotlight:crm_braze
        IF_SETHIDE(true, comp(855, 19));  // mtx_front_end_spotlight:loading_layer
    };
    return;
}