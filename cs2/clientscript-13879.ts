//
function script13879(): void {
    stack(varclient_6344);
    varclient_6344 = (varclient_6344 + 1);
    if ((stack() >= 20)) {
        if ((((MAP_LOADEDPERCENT() < 60) && (MAP_LOADINGSCREEN_ISOPEN() == 1)) && (varclient_6564 <= CLIENTCLOCK()))) {
            if ((script14160() == 1)) {
                script14175();
            };
            script14987(0);
            IF_OPENSUBCLIENT(comp(1477, 920), 1921);
            IF_SETONKEY(callback(script736, -2147483640, -2147483639), comp(1921, 1));
            IF_SETONTIMER(callback(script8300, 0), 96797592);
            script19667();
        } else {
            IF_SETONTIMER(callback(script8298), comp(1477, 920));
            script6556(5);
        };
    };
    return;
}