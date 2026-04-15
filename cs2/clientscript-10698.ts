//
function script10698(int0: unknown_int, int1: int, int2: unknown_int, string0: string): void {
    var int3 = 0;
    if ((MODULO(int1, 50) == 0)) {
        if ((varclient_4624 > CLIENTCLOCK())) {
            int3 = (varclient_4624 - CLIENTCLOCK());
            int3 = (int3 / 50);
            IF_SETTEXT(strconcat(string0, inttostring(int3, 10)), comp(1545, 17));
        } else {
            IF_SETONTIMER(callback(), comp(706, 1));
            if ((int0 == 1)) {
                IF_SETTEXT("", comp(1545, 17));
                return;
            };
            IF_SETTEXT("Cres statue cooldown: Ready", comp(1545, 17));
            return;
        };
    };
    var int1 = (int1 + 1);
    IF_SETONTIMER(callback(script10698, int0, string0, int1, int2), 46268417);
    return;
}