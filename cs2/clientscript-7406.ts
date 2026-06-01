//
function script7406(int0: number, int1: number): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 220);
    if ((int1 == 0)) {
        return;
    };
    var int2 = script2249(21813);
    varbitplayer_60947 = CLEARBIT(varbitplayer_60947, int2);
    varbitplayer_60947 = SETBIT(varbitplayer_60947, int0);
    script3341();
    return;
}