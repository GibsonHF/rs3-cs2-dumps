//
function script10105(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = (int1 - int0);
    if ((int1 != -1)) {
        if ((int1 == -1337)) {
            int2 = SCALE(230, 200, MIN(200, varclient_4275));
            IF_SETSIZE(int2, IF_GETHEIGHT(99287068), 0, 0, 99287068);
            IF_SETHIDE(0, 99287070);
            IF_SETTEXT(`Wall health: ${inttostring(SCALE((int2 * 2), 100, 43), 10)}%`, 99287070);
        } else if ((CLIENTCLOCK() > int1)) {
            IF_SETONTIMER(callback(), 99287060);
            IF_SETHIDE(1, 99287058);
            IF_SETSIZE(0, IF_GETHEIGHT(99287068), 0, 0, 99287068);
        } else {
            int2 = (100 - SCALE(MAX(0, (int1 - CLIENTCLOCK())), int3, 100));
            int2 = SCALE(230, 100, MIN(100, int2));
            IF_SETSIZE(int2, IF_GETHEIGHT(99287068), 0, 0, 99287068);
            IF_SETHIDE(0, 99287070);
            IF_SETTEXT(`Burn: ${inttostring(SCALE((int2 + 2), 100, 43), 10)}%`, 99287070);
        };
    } else {
        int2 = SCALE(230, 200, MIN(200, varclient_4274));
        IF_SETSIZE(int2, IF_GETHEIGHT(99287068), 0, 0, 99287068);
        IF_SETHIDE(0, 99287070);
        IF_SETTEXT(`Acidity level: ${inttostring(varclient_4274, 10)}%`, 99287070);
    };
    return;
}