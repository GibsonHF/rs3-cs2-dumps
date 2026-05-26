//
function script8298(): void {
    if ((MODULO(CLIENTCLOCK(), 10) != 0)) {
        return;
    };
    if (((MAP_LOADINGSCREEN_ISOPEN() == 1) && (varclient_6564 <= CLIENTCLOCK()))) {
        varclient_6344 = 0;
        IF_SETONTIMER(callback(script13879), comp(1477, 920));
    };
    if (((varclient_6564 != 0) && (varclient_6564 < CLIENTCLOCK()))) {
        varclient_6564 = 0;
        if ((varclient_3698 == 1)) {
            MAP_LOADINGSCREEN_SETTRIGGERPERCENT(20, 90);
        };
    };
    return;
}