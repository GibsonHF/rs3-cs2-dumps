//
function script19556(int0: int, string0: string): void {
    if ((int0 <= CLIENTCLOCK())) {
        if ((strcmp(varclient_2250, string0) != 0)) {
            varclient_6711 = varclient_2250;
            script19519(varclient_6711, 1);
            var string0 = varclient_2250;
        };
        var int0 = (CLIENTCLOCK() + 10);
        IF_SETONTIMER(callback(script19556, string0, int0), comp(1313, 93));
    };
    return;
}