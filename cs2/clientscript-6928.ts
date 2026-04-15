//
function script6928(int0: component, int1: int, int2: int, int3: unknown_int): void {
    if ((int3 != 1)) {
        return;
    };
    SOUND_VORBIS_RATE(6185 as vorbis, 1, 0, 100, 350);
    if ((int2 == 17)) {
        if ((varbitplayer_17837 == 1)) {
            varbitplayer_17837 = 0;
        } else {
            varbitplayer_17837 = 1;
        };
    } else if ((TESTBIT(varbitplayer_5000, int2) == 1)) {
        varbitplayer_5000 = CLEARBIT(varbitplayer_5000, int2);
    } else {
        varbitplayer_5000 = SETBIT(varbitplayer_5000, int2);
    };
    if ((CC_FIND[1](int0, int1) == 1)) {
        script6927(int2);
    };
    return;
}