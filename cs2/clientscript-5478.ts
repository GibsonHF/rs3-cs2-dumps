//
function script5478(): void {
    varclient_1683 = (varclient_1683 + 1);
    if ((varclient_1683 < 0)) {
        IF_SETPOSITION(0, varclient_1683, 1, 2, comp(1163, 88));  // dom_climber:bottom_info_layer
    } else {
        IF_SETPOSITION(0, 0, 1, 2, comp(1163, 88));  // dom_climber:bottom_info_layer
        IF_SETONTIMER(callback(), comp(1163, 44));  // dom_climber:background_1
    };
    return;
}