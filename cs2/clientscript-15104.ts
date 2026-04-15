//
function script15104(): void {
    varbitplayer_47707 = (1 - varbitplayer_47707);
    if ((varbitplayer_47707 == 0)) {
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    } else {
        SOUND_VORBIS_RATE(3550 as vorbis, 1, 0, 100, 350);
    };
    script15106();
    return;
}