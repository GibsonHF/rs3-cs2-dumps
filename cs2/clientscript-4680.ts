//
function script4680(): void {
    var int0 = IF_GETWIDTH(comp(302, 27));  // deadly_hunting_side:max_layer_1
    var int1 = SCALE(varclient_1536, 10000, int0);
    IF_SETSIZE(int1, IF_GETHEIGHT(comp(302, 27) /*deadly_hunting_side:max_layer_1*/), 0, 0, comp(302, 28) /*deadly_hunting_side:bar_layer_1*/);
    return;
}