//
function script6298(): void {
    if ((varbitplayer_45911 == 0)) {
        varbitplayer_45911 = 1;
        SOUND_VORBIS_RATE(3550 as vorbis, 1, 0, 100, 350);
    } else {
        varbitplayer_45911 = 0;
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    };
    script6521();
    return;
}