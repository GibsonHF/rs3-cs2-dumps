//
function script3496(int0: number, int1: number): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 220);
    if ((int1 == 0)) {
        return;
    };
    var int2 = script2249(21529);
    varbitplayer_60939 = CLEARBIT(varbitplayer_60939, int2);
    varbitplayer_60939 = SETBIT(varbitplayer_60939, int0);
    script3341();
    return;
}