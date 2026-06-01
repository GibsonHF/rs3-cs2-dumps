//
function script8045(int0: number, int1: number): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 220);
    if ((int1 == 0)) {
        return;
    };
    var int2 = script2250(21814);
    varbitplayer_60946 = CLEARBIT(varbitplayer_60946, int2);
    varbitplayer_60946 = SETBIT(varbitplayer_60946, int0);
    script3341();
    return;
}