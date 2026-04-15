//
function script13905(int0: int, string0: string): void {
    if ((int0 <= CLIENTCLOCK())) {
        if ((strcmp(varclient_2250, string0) != 0)) {
            varclient_6711 = varclient_2250;
            script9325(varclient_6711, 1);
            var string0 = varclient_2250;
        };
        var int0 = (CLIENTCLOCK() + 10);
        IF_SETONTIMER(callback(script13905, string0, int0), comp(517, 231));
    };
    return;
}