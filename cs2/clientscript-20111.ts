//
function script20111(int0: number): void {
    if ((script12477() > int0)) {
        IF_SETHIDE(true, comp(843, 11));  // mtx_front_end_oddments:countdown_layer
        return;
    };
    script20113(int0);
    IF_SETHIDE(false, comp(843, 11));  // mtx_front_end_oddments:countdown_layer
    IF_SETONTIMER(callback(script20112, int0), comp(843, 11));  // mtx_front_end_oddments:countdown_layer
    return;
}