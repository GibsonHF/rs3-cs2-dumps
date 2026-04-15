//
function script6258(int0: component, int1: component): void {
    if ((WORLDLIST_FETCH() == 1)) {
        varclient_6542 = CLIENTCLOCK();
        IF_SETONTIMER(callback(), int0);
        if ((unk10993(0) == 1)) {
            script4436(varclient_1035, int1);
        };
        if ((ACTIVECLANCHANNEL_FIND_LISTENED() == 1)) {
            script6259(-1, int1);
        };
    };
    return;
}