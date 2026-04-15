//
function script9316(): void {
    if ((IF_HASSUBMODAL(comp(1477, 693), 1387) == 1)) {
        script595(0);
        return;
    };
    if ((IF_HASSUBMODAL(comp(1477, 693), 1621) == 1)) {
        script15069(0);
        return;
    };
    if ((IF_HASSUBMODAL(comp(1477, 693), 1313) == 1)) {
        script19511();
        return;
    };
    if (((varclient_6681 == CLIENTCLOCK()) || (varclient_6681 == -1))) {
        return;
    };
    if ((script10906() == 1)) {
        script9313();
        script13889();
        if ((varclient_6682 <= CLIENTCLOCK())) {
            script13748(varbitplayer_45191);
            script10186(0, 20);
            script9324(1);
            script15439();
            varclient_6682 = (CLIENTCLOCK() + 5);
        };
    };
    return;
}