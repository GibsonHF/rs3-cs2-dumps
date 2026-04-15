//
function script8866(int0: component, int1: unknown_int): void {
    if ((varplayer_160 == 0)) {
        varplayer_160 = 1;
        SOUND_VORBIS_RATE(3550 as vorbis, 1, 0, 100, 350);
    } else {
        varplayer_160 = 0;
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    };
    script1487(int0, int1);
    return;
}