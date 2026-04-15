//
function script15004(int0: int, string0: string): void {
    if ((int0 <= CLIENTCLOCK())) {
        if ((strcmp(varclient_2250, string0) != 0)) {
            script7494();
            script7491(varclient_2699, varbitplayer_678, 0, varclient_2250);
            var string0 = varclient_2250;
            varclient_6786 = varclient_2250;
        };
        var int0 = (CLIENTCLOCK() + 25);
        IF_SETONTIMER(callback(script15003, string0, int0), comp(1311, 135));
    };
    return;
}