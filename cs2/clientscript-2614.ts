//
function script2614(): void {
    if ((IF_GETHIDE(comp(1637, 16)) == true)) {  // mtx91_entry:details_layer
        IF_SETHIDE(false, comp(1637, 16));  // mtx91_entry:details_layer
        IF_SETHIDE(true, comp(1637, 18));  // mtx91_entry:options_layer
    } else {
        IF_SETHIDE(true, comp(1637, 16));  // mtx91_entry:details_layer
        IF_SETHIDE(false, comp(1637, 18));  // mtx91_entry:options_layer
    };
    return;
}