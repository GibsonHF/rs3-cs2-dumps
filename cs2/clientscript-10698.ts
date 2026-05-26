//
function script10698(int0: number, int1: number, int2: number, string0: string): void {
    var int3 = 0;
    if ((MODULO(int1, 50) == 0)) {
        if ((varclient_4624 > CLIENTCLOCK())) {
            int3 = (varclient_4624 - CLIENTCLOCK());
            int3 = (int3 / 50);
            IF_SETTEXT(strconcat(string0, inttostring(int3, 10)), 101253137);
        } else {
            IF_SETONTIMER(callback(), 46268417);
            if ((int0 == 1)) {
                IF_SETTEXT("", 101253137);
                return;
            };
            IF_SETTEXT("Cres statue cooldown: Ready", 101253137);
            return;
        };
    };
    var int1 = (int1 + 1);
    IF_SETONTIMER(callback(script10698, int0, string0, int1, int2), 46268417);
    return;
}