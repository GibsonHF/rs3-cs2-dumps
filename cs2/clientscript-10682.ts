//
function script10682(int0: number): void {
    if ((IF_GETHIDE(comp(1544, 27)) == true)) {  // trh31_costume:info_layer
        IF_SETHIDE(true, comp(1544, 23));  // trh31_costume:main_layer
        IF_SETHIDE(true, comp(1544, 25));  // trh31_costume:preview_layer
        IF_SETHIDE(false, comp(1544, 27));  // trh31_costume:info_layer
    } else {
        IF_SETHIDE(true, comp(1544, 27));  // trh31_costume:info_layer
        if ((int0 == 1)) {
            IF_SETHIDE(false, comp(1544, 25));  // trh31_costume:preview_layer
        } else {
            IF_SETHIDE(false, comp(1544, 23));  // trh31_costume:main_layer
        };
    };
    return;
}