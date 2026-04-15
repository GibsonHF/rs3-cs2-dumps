//
function script14836(int0: int, string0: string): void {
    if ((int0 <= CLIENTCLOCK())) {
        if ((strcmp(varclient_2250, string0) != 0)) {
            script14829(varclient_2250);
            var string0 = varclient_2250;
        };
        var int0 = (CLIENTCLOCK() + 25);
        IF_SETONTIMER(callback(script14835, string0, int0), comp(685, 73));
    };
    return;
}