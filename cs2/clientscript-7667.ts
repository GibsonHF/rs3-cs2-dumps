//
function script7667(int0: component): void {
    if ((varclient_198 != 1)) {
        IF_SETHIDE(false, int0);
        varclient_198 = 1;
        if ((varclient_2753 == 1)) {
            IF_SETONTIMER(callback(script7668, int0), comp(1405, 14));
        } else if ((varclient_2753 == 2)) {
            IF_SETONTIMER(callback(script7668, int0), comp(1405, 29));
        };
    };
    return;
}