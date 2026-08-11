//
function script10104(int0: number): void {
    if ((int0 == -1337)) {
        IF_SETCOLOUR(51455, comp(1515, 29));  // sb_overlay:progress_graphic
    } else if ((int0 != -1)) {
        IF_SETCOLOUR(16757760, comp(1515, 29));  // sb_overlay:progress_graphic
        var int0 = (CLIENTCLOCK() + (int0 * 50));
    } else {
        IF_SETCOLOUR(65280, comp(1515, 29));  // sb_overlay:progress_graphic
    };
    IF_SETONTIMER(callback(script10105, CLIENTCLOCK(), int0), comp(1515, 20));  // sb_overlay:progress_bar_layer
    return;
}