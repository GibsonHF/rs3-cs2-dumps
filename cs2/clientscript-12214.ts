//
function script12214(): void {
    IF_SETTEXT(inttostring(varbitplayer_30383, 10), comp(1717, 2));  // trh82_valentines:text_total
    var int0 = IF_GETHEIGHT(comp(1717, 4));  // trh82_valentines:progress_bar_graphic
    var int1 = IF_GETHEIGHT(comp(1717, 53));  // trh82_valentines:progress_bar_layer
    var int2 = ((int0 * 100) / 2500);
    var int3 = MAX(1, ((int2 * varclient_5126) / 100));
    if ((varclient_5126 == 2500)) {
        int3 = int0;
    };
    IF_SETSIZE(IF_GETWIDTH(comp(1717, 4) /*trh82_valentines:progress_bar_graphic*/), int3, 0, 0, comp(1717, 53) /*trh82_valentines:progress_bar_layer*/);
    IF_SETONTIMER(callback(script12215), comp(1717, 53));  // trh82_valentines:progress_bar_layer
    return;
}