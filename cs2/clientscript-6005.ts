//
function script6005(int0: int, int1: unknown_int): void {
    if ((varclient_4147 == 1)) {
        return;
    };
    varclient_4146 = int0;
    script6228(varplayer_4381);
    IF_SETONTIMER(callback(), comp(1043, 2));
    if ((struct_getparam(int1, 4219) == 0)) {
        script8056(comp(1043, 153), -1, 1);
        script8059(2);
    } else {
        script8056(comp(1043, 157), -1, 1);
        script8056(comp(1043, 161), -1, 2);
    };
    return;
}