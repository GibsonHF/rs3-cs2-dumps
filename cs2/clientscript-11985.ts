//
function script11985(int0: int, string0: string): void {
    if ((int0 <= CLIENTCLOCK())) {
        if ((strcmp(varclient_2250, string0) != 0)) {
            script11986(varclient_2250);
            script11957(varbitplayer_30164, varclient_2250);
        };
        var string0 = varclient_2250;
        var int0 = (CLIENTCLOCK() + 25);
    };
    IF_SETONTIMER(callback(script11984, string0, int0), comp(1108, 31));
    return;
}