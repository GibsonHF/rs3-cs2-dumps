//
function script3675(int0: number, int1: number): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 220);
    if ((int1 == 0)) {
        return;
    };
    var int2 = script2250(21529);
    varbitplayer_60940 = CLEARBIT(varbitplayer_60940, int2);
    varbitplayer_60940 = SETBIT(varbitplayer_60940, int0);
    script3341();
    return;
}