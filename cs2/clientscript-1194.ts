//
function script1194(): void {
    IF_SETTEXT("10:00", comp(1535, 10));
    script4542(100, comp(1535, 5), comp(-1, 65535));
    varclient_4612 = 0;
    varclient_4613 = CLIENTCLOCK();
    script10595(varclient_4612);
    IF_SETONTIMER(callback(script10594, CLIENTCLOCK()), comp(1535, 10));
    IF_SETONVARCTRANSMIT(callback(script9552, 4612, 1), 100597770);
    return;
}