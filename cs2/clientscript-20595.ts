//
function script20595(): void {
    var int0 = 4;
    if ((script6431() == 0)) {
        IF_SETPOSITION(-281, (266 - int0), 1, 0, comp(1494, 25));  // marketplace_featured:rotator_panel_middle
        IF_SETPOSITION(-94, (266 - int0), 1, 0, comp(1494, 26));  // marketplace_featured:rotator_panel_right
        IF_SETPOSITION(94, (266 - int0), 1, 0, comp(1494, 27));  // marketplace_featured:rotator_button_layer
        IF_SETPOSITION(281, (266 - int0), 1, 0, comp(1494, 28));  // marketplace_featured:carousel_standard_frame
        IF_SETPOSITION(0, (4 + int0), 1, 0, comp(1494, 22));  // marketplace_featured:carousel_price_layer
        IF_SETPOSITION(0, (4 + int0), 1, 0, comp(1494, 2));  // marketplace_featured:preview_triggerop_layer
    } else {
        int0 = 38;
        IF_SETPOSITION(-281, (266 - int0), 1, 0, comp(1494, 25));  // marketplace_featured:rotator_panel_middle
        IF_SETPOSITION(-94, (266 - int0), 1, 0, comp(1494, 26));  // marketplace_featured:rotator_panel_right
        IF_SETPOSITION(94, (266 - int0), 1, 0, comp(1494, 27));  // marketplace_featured:rotator_button_layer
        IF_SETPOSITION(281, (266 - int0), 1, 0, comp(1494, 28));  // marketplace_featured:carousel_standard_frame
        IF_SETPOSITION(0, -10, 1, 0, comp(1494, 22));  // marketplace_featured:carousel_price_layer
        IF_SETPOSITION(0, -10, 1, 0, comp(1494, 2));  // marketplace_featured:preview_triggerop_layer
    };
    return;
}