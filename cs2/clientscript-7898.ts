//
function script7898(): void {
    if ((varclient_3484 == 0)) {
        varclient_3487 = IF_GETMODELANGLE_Y(comp(1420, 46));
        varclient_6880 = IF_GETMODELANGLE_Y(comp(1420, 47));
        varclient_3483 = GET_MOUSEX();
        varclient_3484 = 1;
        varclient_3494 = CLIENTCLOCK();
        script3121(188, 188);
    };
    var int0 = GET_MOUSEX();
    int0 = (int0 - varclient_3483);
    int0 = (int0 * 8);
    var int1 = -1;
    if ((int0 < 0)) {
        int0 = (int0 * -1);
        int1 = 1;
    };
    IF_SETONTIMER(callback(script7899, (CLIENTCLOCK() + 10), int0, int1, 50), 93061131);
    varclient_3483 = GET_MOUSEX();
    return;
}