//
function script603(): void {
    if ((varclient_82 <= 0)) {
        IF_SETONTIMER(callback(), comp(105, 170));  // stockmarket:quantity_input_display ?
        script621();
    };
    varclient_82 = (varclient_82 - 1);
    return;
}