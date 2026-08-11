//
function script16580(): void {
    if ((IF_GETHIDE(comp(891, 6)) == true)) {  // mtx_front_end_confirm:probabilities_layer
        IF_SETHIDE(false, comp(891, 6));  // mtx_front_end_confirm:probabilities_layer
    } else {
        IF_SETHIDE(true, comp(891, 6));  // mtx_front_end_confirm:probabilities_layer
    };
    return;
}