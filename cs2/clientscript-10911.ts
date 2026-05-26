//
function script10911(): void {
    var string0 = "Drop in";
    if ((varbitplayer_26721 == 1)) {
        IF_SETHIDE(false, comp(1579, 33));
        IF_SETTEXT("Drop in: 5.00", comp(1579, 34));
        IF_SETONTIMER(callback(script10912, CLIENTCLOCK(), (CLIENTCLOCK() + 250), string0), 103481378);
    } else if ((varbitplayer_26721 == 2)) {
        IF_SETHIDE(false, comp(1579, 33));
        IF_SETTEXT("Next round in: ", comp(1579, 34));
        string0 = "Next round in";
        IF_SETONTIMER(callback(script10912, CLIENTCLOCK(), (CLIENTCLOCK() + 500), string0), 103481378);
    };
    return;
}