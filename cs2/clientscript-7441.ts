//
function script7441(int0: number, int1: number): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 220);
    if ((int1 == 0)) {
        return;
    };
    var int2 = script2249(21530);
    varbitplayer_60941 = CLEARBIT(varbitplayer_60941, int2);
    varbitplayer_60941 = SETBIT(varbitplayer_60941, int0);
    script3341();
    return;
}