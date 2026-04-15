//
function script2895(int0: component): void {
    if ((varclient_1078 > varbitplayer_5746)) {
        if ((varclient_1079 != 1)) {
            IF_SETONTIMER(callback(script2896, int0), int0);
            varclient_1079 = 1;
        };
    } else if ((varclient_1078 == 0)) {
        varclient_1078 = varbitplayer_5746;
    };
    return;
}