//
function script6922(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int5 != 1)) {
        return;
    };
    SOUND_VORBIS_RATE(6185, 1, 0, 100, 350);
    if ((TESTBIT(varplayer_1587, int3) == 1)) {
        varplayer_1587 = CLEARBIT(varplayer_1587, int3);
    } else {
        varplayer_1587 = SETBIT(varplayer_1587, int3);
    };
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int0, int2) == 1))) {
        script6921(int0, int3, int4);
    };
    return;
}