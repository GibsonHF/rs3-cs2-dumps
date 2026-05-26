//
function script8866(int0: number, int1: number): void {
    if ((varplayer_160 == 0)) {
        varplayer_160 = 1;
        SOUND_VORBIS_RATE(3550, 1, 0, 100, 350);
    } else {
        varplayer_160 = 0;
        SOUND_VORBIS_VOLUME(36961, 1, 0, 100);
    };
    script1487(int0, int1);
    return;
}