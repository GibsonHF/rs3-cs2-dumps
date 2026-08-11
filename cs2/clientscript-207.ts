//
function script207(): void {
    if ((IF_GETHIDE(comp(628, 6)) == true)) {  // pnr_map:pnr_key_dropdown_layer
        IF_SETOP(1, "Close key", comp(628, 2));  // pnr_map:pnr_key_open_layer
        IF_SETHIDE(false, comp(628, 6));  // pnr_map:pnr_key_dropdown_layer
    } else {
        IF_SETOP(1, "Open key", comp(628, 2));  // pnr_map:pnr_key_open_layer
        IF_SETHIDE(true, comp(628, 6));  // pnr_map:pnr_key_dropdown_layer
    };
    return;
}