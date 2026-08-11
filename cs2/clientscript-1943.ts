//
function script1943(): void {
    if ((STRING_LENGTH(varclient_2455) == 0)) {
        IF_SETHIDE(true, comp(802, 6));  // sc_tutorial_overlay:title_layer
        return;
    };
    IF_SETHIDE(false, comp(802, 6));  // sc_tutorial_overlay:title_layer
    IF_SETTEXT(varclient_2455, 52559877);
    varclient_581 = 1;
    return;
}