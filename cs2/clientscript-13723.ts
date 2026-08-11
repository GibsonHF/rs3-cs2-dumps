//
function script13723(): void {
    var int0 = IF_GETHEIGHT(comp(1911, 4));  // mtxfest17_tapper_overlay:progress_bar_bar_layer
    var int1 = 0;
    if ((int0 < varbitplayer_38525)) {
        int1 = 1;
    };
    IF_SETONTIMER(callback(script13724, int1), comp(1911, 4));  // mtxfest17_tapper_overlay:progress_bar_bar_layer
    return;
}