//
function script8300(int0: int): void {
    var int1 = MAP_LOADEDPERCENT();
    if (((int1 >= 90) || (varclient_6564 > CLIENTCLOCK()))) {
        script14987(1);
        if ((script14160() == 1)) {
            script14174();
        };
        IF_CLOSESUBCLIENT(comp(1477, 920));
        IF_SETONTIMER(callback(script8298), comp(1477, 920));
        return;
    };
    var int2 = MIN(400, int0);
    var int3 = 1;
    if ((int2 < (int1 * 4))) {
        int3 = MAX(1, (((int1 * 4) - int2) / 5));
        int2 = MIN(400, (int2 + int3));
        IF_SETSIZE(int2, 15, 0, 0, comp(1921, 6));
    };
    IF_SETONTIMER(callback(script8300, int2), comp(1477, 920));
    return;
}