//
function script20279(int0: number, int1: number, int2: number): void {
    if ((STAT_BASE(3 as stat) > 5)) {
        IF_SETONSTATTRANSMIT(callback(), int0);
    };
    var int3 = 0;
    if ((script6431() == 1)) {
        IF_SETHIDE(true, comp(1361, 18));
        IF_SETPOSITION(0, 0, 1, 2, comp(1361, 11));
        int3 = 33;
    };
    varplayer_12329 = 0;
    varclient_8336 = varplayer_12351;
    IF_SETPARAM_INT(9340, 0, comp(1361, 21));
    script20292();
    script20282();
    return;
}