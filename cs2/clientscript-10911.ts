//
function script10911(): void {
    var string0 = "Drop in";
    if ((varbitplayer_26721 == 1)) {
        IF_SETHIDE(false, comp(1579, 33));  // thedrop:thedrop_panel
        IF_SETTEXT("Drop in: 5.00", comp(1579, 34));  // thedrop:thedrop_timer
        IF_SETONTIMER(callback(script10912, CLIENTCLOCK(), (CLIENTCLOCK() + 250), string0), comp(1579, 34));  // thedrop:thedrop_timer
    } else if ((varbitplayer_26721 == 2)) {
        IF_SETHIDE(false, comp(1579, 33));  // thedrop:thedrop_panel
        IF_SETTEXT("Next round in: ", comp(1579, 34));  // thedrop:thedrop_timer
        string0 = "Next round in";
        IF_SETONTIMER(callback(script10912, CLIENTCLOCK(), (CLIENTCLOCK() + 500), string0), comp(1579, 34));  // thedrop:thedrop_timer
    };
    return;
}