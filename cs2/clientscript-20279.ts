//
function script20279(int0: number, int1: number, int2: number): void {
    if ((STAT_BASE(3) > 5)) {
        IF_SETONSTATTRANSMIT(callback(), int0);
    };
    var int3 = 0;
    if ((script6431() == 1)) {
        IF_SETHIDE(1, 89194514);
        IF_SETPOSITION(0, 0, 1, 2, 89194507);
        int3 = 33;
    };
    varplayer_12329 = 0;
    varclient_8336 = varplayer_12351;
    IF_SETPARAM_INT(9340, 0, 89194517);
    if ((script20129() == 0)) {
        IF_SETSIZE(0, 28, 1, 0, int1);
        IF_SETSIZE(0, (67 - int3), 1, 1, int2);
    } else {
        IF_SETSIZE(0, 58, 1, 0, int1);
        IF_SETSIZE(0, (97 - int3), 1, 1, int2);
    };
    script20292();
    script20282();
    return;
}