//
function script9831(int0: int, int1: component, int2: component, int3: unknown_int, string0: string): void {
    if ((int0 <= CLIENTCLOCK())) {
        if ((strcmp(varclient_2250, string0) != 0)) {
            if ((STRING_LENGTH(varclient_2250) > 0)) {
                if ((int3 == 1)) {
                    IF_SETHIDE(false, comp(517, 202));
                };
                IF_SETONTIMER(callback(), int1);
                script9832(varclient_2250, int2);
            } else if ((int3 == 0)) {
                script7470(int2);
            };
        };
        var string0 = varclient_2250;
        var int0 = (CLIENTCLOCK() + 10);
    };
    IF_SETONTIMER(callback(script9830, string0, int0, int1, int2, int3), int1);
    return;
}