//
function script18895(): void {
    var int0 = script15113();
    if ((varclient_7418 <= (int0 - 28))) {
        script7871(comp(1284, 10), false, 1, false, false);
        script7871(comp(1284, 13), true, 1, false, false);
        IF_SETHIDE(false, comp(1284, 12));
        IF_SETHIDE(true, comp(1284, 15));
    } else if ((script18855(-1) >= (int0 + 14))) {
        script7871(comp(1284, 10), true, 1, false, false);
        script7871(comp(1284, 13), false, 1, false, false);
        IF_SETHIDE(true, comp(1284, 12));
        IF_SETHIDE(false, comp(1284, 15));
    } else {
        script7871(comp(1284, 10), true, 1, false, false);
        script7871(comp(1284, 13), true, 1, false, false);
        IF_SETHIDE(true, comp(1284, 12));
        IF_SETHIDE(true, comp(1284, 15));
    };
    return;
}