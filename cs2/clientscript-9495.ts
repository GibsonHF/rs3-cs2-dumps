//
function script9495(int0: number): void {
    if ((varclient_3891 < 0)) {
        script9494();
        return;
    };
    IF_SETHIDE(0, 49086527);
    if ((varclient_3891 == 0)) {
        if ((varclient_3892 == 1)) {
        } else {
            IF_SETTEXT("PvP enabled", 49086534);
            IF_SETONTIMER(callback(script9496), 49086527);
        };
    } else {
        script9498();
        IF_SETONTIMER(callback(script9497), 49086527);
        if (((varbitplayer_21127 == 1) || (varclient_3892 == 1))) {
            IF_SETSIZE((24 + STRINGWIDTH(IF_GETTEXT(49086534), IF_GETFONTMETRICS(49086534))), 26, 0, 0, 49086527);
        } else {
            IF_SETSIZE(300, 100, 0, 0, int0);
        };
    };
    return;
}