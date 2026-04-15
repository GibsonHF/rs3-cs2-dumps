//
function script6026(int0: unknown_int, int1: unknown_int, int2: int): void {
    if ((int2 < 25)) {
        IF_SETONTIMER(callback(script6026, int0, int1, (int2 + 1)), 68354050);
        return;
    };
    IF_SETONTIMER(callback(), comp(1043, 2));
    script8059(1);
    script8059(2);
    if ((varclient_4146 == int0)) {
        varclient_4146 = -1;
    };
    script6228(varplayer_4381);
    return;
}