//
function script13223(int0: int, string0: string): void {
    if ((int0 <= CLIENTCLOCK())) {
        if ((strcmp(varclient_2250, string0) != 0)) {
            IF_SETONTIMER(callback(), comp(1843, 238));
            if ((IF_FIND(120783031) == 1)) {
                if ((varclient_5938 != script441(1))) {
                    script13230();
                    return;
                };
                script13170(varclient_2250, cc_getparam(6362), cc_getparam(6364), cc_getparam(6365), cc_getparam(6366), cc_getparam(6367), cc_getparam(6368), cc_getparam(6369), cc_getparam(6370), cc_getparam(6371), cc_getparam(6372));
            };
            var string0 = varclient_2250;
        };
        var int0 = (CLIENTCLOCK() + 25);
        IF_SETONTIMER(callback(script13222, string0, int0), comp(1843, 238));
    };
    return;
}