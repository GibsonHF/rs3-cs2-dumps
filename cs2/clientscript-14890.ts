//
function script14890(): void {
    if ((varplayer_9290 != 0)) {
        return;
    };
    script10458(comp(693, 28), comp(693, 80), comp(-1, 65535), comp(693, 82), comp(-1, 65535), -1, -1, 0, 367);
    if ((IF_FIND(comp(693, 80)) == 1)) {
        if ((cc_getparam(4520) <= 0)) {
            script13959(comp(693, 94), 28692 as struct, false);
            IF_SETHIDE(true, comp(693, 30));
        } else {
            script13959(comp(693, 94), 28691 as struct, false);
            IF_SETHIDE(false, comp(693, 30));
        };
    };
    return;
}