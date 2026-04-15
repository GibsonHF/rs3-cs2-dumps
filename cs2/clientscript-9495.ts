//
function script9495(int0: component): void {
    if ((varclient_3891 < 0)) {
        script9494();
        return;
    };
    IF_SETHIDE(false, comp(749, 63));
    if ((varclient_3891 == 0)) {
        if ((varclient_3892 == 1)) {
        } else {
            IF_SETTEXT("PvP enabled", comp(749, 70));
            IF_SETONTIMER(callback(script9496), comp(749, 63));
        };
    } else {
        script9498();
        IF_SETONTIMER(callback(script9497), comp(749, 63));
        if (((varbitplayer_21127 == 1) || (varclient_3892 == 1))) {
            IF_SETSIZE((24 + STRINGWIDTH(IF_GETTEXT(comp(749, 70)), IF_GETFONTMETRICS(comp(749, 70)))), 26, 0, 0, comp(749, 63));
        } else {
            IF_SETSIZE(300, 100, 0, 0, int0);
        };
    };
    return;
}