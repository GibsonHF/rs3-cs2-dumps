//
function script7667(int0: number): void {
    if ((varclient_198 != 1)) {
        IF_SETHIDE(0, int0);
        varclient_198 = 1;
        if ((varclient_2753 == 1)) {
            IF_SETONTIMER(callback(script7668, int0), 92078094);
        } else if ((varclient_2753 == 2)) {
            IF_SETONTIMER(callback(script7668, int0), 92078109);
        };
    };
    return;
}