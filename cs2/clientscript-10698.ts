//
function script10698(int0: number, int1: number, int2: number, string0: string): void {
    var int3 = 0;
    if ((MODULO(int1, 50) == 0)) {
        if ((varclient_4624 > CLIENTCLOCK())) {
            int3 = (varclient_4624 - CLIENTCLOCK());
            int3 = (int3 / 50);
            IF_SETTEXT(strconcat(string0, inttostring(int3, 10)), comp(1545, 17));  // divdnd_overlay:cres_cooldown
        } else {
            IF_SETONTIMER(callback(), comp(706, 1));  // divdnd_overlay_timer:timer_cres
            if ((int0 == 1)) {
                IF_SETTEXT("", comp(1545, 17));  // divdnd_overlay:cres_cooldown
                return;
            };
            IF_SETTEXT("Cres statue cooldown: Ready", comp(1545, 17));  // divdnd_overlay:cres_cooldown
            return;
        };
    };
    var int1 = (int1 + 1);
    IF_SETONTIMER(callback(script10698, int0, string0, int1, int2), comp(706, 1));  // divdnd_overlay_timer:timer_cres
    return;
}