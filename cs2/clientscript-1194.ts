//
function script1194(): void {
    IF_SETTEXT("10:00", 100597770);
    script4542(100, 100597765, -1);
    varclient_4612 = 0;
    varclient_4613 = CLIENTCLOCK();
    script10595(varclient_4612);
    IF_SETONTIMER(callback(script10594, CLIENTCLOCK()), 100597770);
    IF_SETONVARCTRANSMIT(callback(script9552, 4612, 1), 100597770);
    return;
}