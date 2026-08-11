//
function script19039(): number {
    if ((IF_GETHIDE(comp(1014, 40)) == false)) {  // trh183_overlay:splash_layer
        IF_TRIGGEROP(comp(1014, 17), -1, 1);  // trh183_overlay:splash_close_button
        return 1;
    };
    return 0;
}