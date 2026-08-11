//
function script13737(int0: number): void {
    if ((IF_GETHIDE(comp(1913, 36)) == true)) {  // trh131_costume:info_layer
        IF_SETHIDE(true, comp(1913, 32));  // trh131_costume:main_layer
        IF_SETHIDE(true, comp(1913, 34));  // trh131_costume:preview_layer
        IF_SETHIDE(false, comp(1913, 36));  // trh131_costume:info_layer
    } else {
        IF_SETHIDE(true, comp(1913, 36));  // trh131_costume:info_layer
        if ((int0 == 1)) {
            IF_SETHIDE(false, comp(1913, 34));  // trh131_costume:preview_layer
        } else {
            IF_SETHIDE(false, comp(1913, 32));  // trh131_costume:main_layer
        };
    };
    return;
}