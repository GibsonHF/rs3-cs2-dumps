//
function script20237(): void {
    var int0 = IF_GETTRANS(comp(1380, 1));  // league_fade:window_bg
    IF_SETONTIMER(callback(script20238, int0, CLIENTCLOCK()), comp(1380, 1));  // league_fade:window_bg
    return;
}